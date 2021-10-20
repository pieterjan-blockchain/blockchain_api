import * as Ajv from 'ajv';
import * as RefParser from '@apidevtools/json-schema-ref-parser';
import { hexToBuffer, logger, has0xPrefix, isValidC32Address } from '../helpers';
import {
  RosettaConstants,
  RosettaError,
  RosettaErrors,
  RosettaSchemas,
  SchemaFiles,
  RosettaRequestType,
  getRosettaNetworkName,
  RosettaErrorsTypes,
} from './rosetta-constants';
import * as T from '@blockstack/stacks-blockchain-api-types';
import { NetworkIdentifier } from '@blockstack/stacks-blockchain-api-types';
import { dereferenceSchema } from './validate';
import { ChainID } from '@stacks/transactions';

export interface ValidSchema {
  valid: boolean;
  error?: string; // discovered during schema validation
  errorType?: RosettaErrorsTypes; // discovered using our validation
}

async function validate(schemaFilePath: string, data: any): Promise<ValidSchema> {
  const schemaDef = await dereferenceSchema(schemaFilePath);
  const ajv = new Ajv({ schemaId: 'auto' });
  const valid = await ajv.validate(schemaDef, data);
  if (!valid) {
    logger.error(`Schema validation:\n\n ${JSON.stringify(ajv.errors, null, 2)}`);
    const errors = ajv.errors || [{ message: 'error' }];
    return { valid: false, error: errors[0].message };
  }

  return { valid: true };
}

export async function rosettaValidateRequest(
  url: string,
  body: RosettaRequestType,
  chainId: ChainID
): Promise<ValidSchema> {
  // remove trailing slashes, if any
  if (url.endsWith('/')) {
    url = url.slice(0, url.length - 1);
  }
  // Check schemas
  const schemas: SchemaFiles = RosettaSchemas[url];
  // Return early if we don't know about this endpoint.
  if (!schemas) {
    logger.warn(`Schema validation:\n\n unknown endpoint: ${url}`);
    return { valid: true };
  }

  const path = require.resolve(schemas.request);
  const valid = await validate(path, body);

  if (!valid.valid) {
    return valid;
  }

  // Other request checks
  if ('network_identifier' in body) {
    if (RosettaConstants.blockchain != body.network_identifier.blockchain) {
      return { valid: false, errorType: RosettaErrorsTypes.invalidBlockchain };
    }

    if (getRosettaNetworkName(chainId) != body.network_identifier.network) {
      return { valid: false, errorType: RosettaErrorsTypes.invalidNetwork };
    }
  }

  if ('block_identifier' in body && !validHexId(body.block_identifier)) {
    return { valid: false, errorType: RosettaErrorsTypes.invalidBlockHash };
  }

  if ('transaction_identifier' in body && !validHexId(body.transaction_identifier)) {
    return { valid: false, errorType: RosettaErrorsTypes.invalidTransactionHash };
  }

  if ('account_identifier' in body && !isValidC32Address(body.account_identifier.address)) {
    return { valid: false, errorType: RosettaErrorsTypes.invalidAccount };
  }

  return { valid: true };
}

function validHexId(
  identifier:
    | T.RosettaBlockIdentifier
    | T.RosettaPartialBlockIdentifier
    | T.TransactionIdentifier
    | undefined
): boolean {
  if (identifier === undefined) {
    return true;
  }

  if ('hash' in identifier) {
    let hash = identifier.hash;

    if (hash === undefined) {
      return true;
    }

    try {
      if (!has0xPrefix(hash)) {
        hash = '0x' + hash;
        hexToBuffer(hash);
      }
    } catch (_e) {
      return false;
    }
  }
  return true;
}

// TODO: there has to be a better way to go from ajv errors to rosetta errors.
export function makeRosettaError(notValid: ValidSchema): RosettaError {
  let resp: RosettaError = RosettaErrors[RosettaErrorsTypes.unknownError];

  // we've already identified the problem
  if (notValid.errorType !== undefined) {
    resp = RosettaErrors[notValid.errorType];
  }

  const error = notValid.error || '';
  if (error.search(/network_identifier/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.emptyNetworkIdentifier];
    resp.details = { message: error };
  } else if (error.search(/blockchain/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.emptyBlockchain];
    resp.details = { message: error };
  } else if (error.search(/network/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.emptyNetwork];
    resp.details = { message: error };
  } else if (error.search(/block_identifier/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.invalidBlockIdentifier];
    resp.details = { message: error };
  } else if (error.search(/transaction_identifier/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.invalidTransactionIdentifier];
    resp.details = { message: error };
  } else if (error.search(/operations/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.invalidOperation];
    resp.details = { message: error };
  } else if (error.search(/should have required property/) != -1) {
    resp = RosettaErrors[RosettaErrorsTypes.invalidParams];
    resp.details = { message: error };
  }
  return resp;
}
