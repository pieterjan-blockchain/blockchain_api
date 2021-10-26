## [0.52.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.52.1...v0.52.2) (2021-03-08)


### Bug Fixes

* add missing index.d.ts generated file ([9749511](https://github.com/blockstack/stacks-blockchain-api/commit/9749511a6608c52b9c755d453bba146b7d22c66e))
* block endpoint & minor fixes (rosetta) ([#23](https://github.com/blockstack/stacks-blockchain-api/issues/23)) ([6426cbc](https://github.com/blockstack/stacks-blockchain-api/commit/6426cbc9eecf172df40575027fa763acaf6f0057))
* change rosetta construction parse api ([#22](https://github.com/blockstack/stacks-blockchain-api/issues/22)) ([2e8ff92](https://github.com/blockstack/stacks-blockchain-api/commit/2e8ff92245a20e94e79f3208fdc70e5adb2a1259)), closes [#11](https://github.com/blockstack/stacks-blockchain-api/issues/11)
* combine endpoint to revert RSV to VRS (rebasing) and use 'ecdsa_recovery' ([6fc0888](https://github.com/blockstack/stacks-blockchain-api/commit/6fc088805fee4b39b88af509ea331099216e485f))
* data API fixes ([#27](https://github.com/blockstack/stacks-blockchain-api/issues/27)) ([b7d3d5a](https://github.com/blockstack/stacks-blockchain-api/commit/b7d3d5addf1eb12c555342e92dc19128886daba9))
* missing generated index file ([98f06e9](https://github.com/blockstack/stacks-blockchain-api/commit/98f06e9ce1c89bc9bf534be8c0195ec6b2f4f008))
* rename getCurrencyData to getStxCurrencyMetadata ([afdbf28](https://github.com/blockstack/stacks-blockchain-api/commit/afdbf2880f535689f1eb9ac9c8f5033dec2b3791))
* revert modifying .env ([ccb2935](https://github.com/blockstack/stacks-blockchain-api/commit/ccb29352ed82f50d93e96de22c3d61ea126e89b0))
* rosetta construction derive api ([#21](https://github.com/blockstack/stacks-blockchain-api/issues/21)) ([cade138](https://github.com/blockstack/stacks-blockchain-api/commit/cade138987df5ffe77d683c0392900925f07a161)), closes [#10](https://github.com/blockstack/stacks-blockchain-api/issues/10)
* spaces ([53981c1](https://github.com/blockstack/stacks-blockchain-api/commit/53981c191f2e9cd9cec3b0736dd55edd26a2ab1e))

## [0.52.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.52.0...v0.52.1) (2021-03-08)


### Bug Fixes

* also generate client docs ([475ba26](https://github.com/blockstack/stacks-blockchain-api/commit/475ba26e45dfbb867ba3eacc27060e0d5396f7cc))

# [0.52.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.51.0...v0.52.0) (2021-03-05)


### Features

* add dotenv-flow ([1776443](https://github.com/blockstack/stacks-blockchain-api/commit/1776443b103789aea5c1a782cf73c5a68a7b6f99))

# [0.51.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.50.0...v0.51.0) (2021-03-04)


### Bug Fixes

* dropped mempool tx list count property ([58d0e31](https://github.com/blockstack/stacks-blockchain-api/commit/58d0e31195b89e9631bc1904f8e37ea763a46efb))
* improve conditions in which a dropped vs non-canonical tx result is returned ([2a57fbc](https://github.com/blockstack/stacks-blockchain-api/commit/2a57fbc5c2884ce874f20d8f71ac354b991eb283))
* update conditions for when a mined canonical vs non-canonical, vs mempool tx is returned ([573f75c](https://github.com/blockstack/stacks-blockchain-api/commit/573f75cc0dee34c6efab8176ebb00b7c28269515))


### Features

* distinct tx status values for mempool txs vs mined tx responses ([3236053](https://github.com/blockstack/stacks-blockchain-api/commit/3236053431732dd74fadd7316471094058e61d4c))
* endpoint to query dropped mempool txs ([4556cd7](https://github.com/blockstack/stacks-blockchain-api/commit/4556cd7c257355be6a1972d4bd5c04f4d6f550e4))
* implement dropped transaction event handling and API responses ([9936c66](https://github.com/blockstack/stacks-blockchain-api/commit/9936c6628b95e16a301143c19347d755bfc940ab))

# [0.50.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.49.0...v0.50.0) (2021-02-26)


### Features

* implement total supply endpoint with legacy formatting support ([811f06b](https://github.com/blockstack/stacks-blockchain-api/commit/811f06b6ed02770cf2c0bc8c9a5a513b4e4c6646))
* openAPI docs for total-supply endpoint ([cec343a](https://github.com/blockstack/stacks-blockchain-api/commit/cec343a1ea20f5aa0d230be94def12e9bdfc6b08))
* openAPI docs for total-supply legacy format endpoint ([e627209](https://github.com/blockstack/stacks-blockchain-api/commit/e627209351ad4e4e74f86a1fb92ac6edb2f1ac9b))

# [0.49.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.48.3...v0.49.0) (2021-02-23)


### Bug Fixes

* signature fix(ecdsa) combine api ([a52e172](https://github.com/blockstack/stacks-blockchain-api/commit/a52e17249439a8d715500107160f059a46fb2d2a))
* specify radix in `height` parseInt ([eb7b623](https://github.com/blockstack/stacks-blockchain-api/commit/eb7b623476ec727e53b5cea196694757bc07191d))
* specify radix in `height` parseInt ([5dcf73e](https://github.com/blockstack/stacks-blockchain-api/commit/5dcf73e47ee454287e3649557c404b7fbe09dd7d))


### Features

* add `height` filter to `/stx_inbound`, increase pagination limit, fix error response msg ([dc0d111](https://github.com/blockstack/stacks-blockchain-api/commit/dc0d11193ebd1d1c99764ca676744ca969a366e9))
* get block by height endpoint ([f05332b](https://github.com/blockstack/stacks-blockchain-api/commit/f05332b077c364d5fabc05c2c0bce90d84decac0))

## [0.48.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.48.2...v0.48.3) (2021-02-16)


### Bug Fixes

* move stx_inbound extended text to `description` ([62511d8](https://github.com/blockstack/stacks-blockchain-api/commit/62511d87d2141ced8939e890f844d4d35b7cd807))

## [0.48.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.48.1...v0.48.2) (2021-02-16)


### Bug Fixes

* error fetching coinbase tx containing events [#446](https://github.com/blockstack/stacks-blockchain-api/issues/446) ([d3b1e96](https://github.com/blockstack/stacks-blockchain-api/commit/d3b1e969f52db3059bba6f128d717d230a103dfa))

## [0.48.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.48.0...v0.48.1) (2021-02-15)


### Bug Fixes

* bump stacks-node docker image versions to 2.0.5 ([8ebdf25](https://github.com/blockstack/stacks-blockchain-api/commit/8ebdf25a0f4f554740cfdd7508599ebb65e9194e))

# [0.48.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.5...v0.48.0) (2021-02-15)


### Features

* add block height filter to `/extended/v1/address/:address/transactions` ([5d9492f](https://github.com/blockstack/stacks-blockchain-api/commit/5d9492f1b7b581c656fac9ed08b04df894ad3100))
* add recipients of stx from contract-call txs to `:address/transactions` ([1280dd0](https://github.com/blockstack/stacks-blockchain-api/commit/1280dd0d240c93553eed0acebe499c5c52bc81b0))
* include any tx type in the address filtered mempool result, fixes [#438](https://github.com/blockstack/stacks-blockchain-api/issues/438) ([d532309](https://github.com/blockstack/stacks-blockchain-api/commit/d5323093882c17761a0924c7716702273645b888))
* new api endpoint to get inbound stx and send-many transfers with memos ([875dfa3](https://github.com/blockstack/stacks-blockchain-api/commit/875dfa34caf113ab072000a1152541be59341c42))

## [0.47.5](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.4...v0.47.5) (2021-02-12)


### Bug Fixes

* add tx_fees_streamed_produced ([021082a](https://github.com/blockstack/stacks-blockchain-api/commit/021082ac358423fbf8db7a69ac103ca3949366ff))
* bug with rewards received in immediately non-canonical blocks ([2c587ac](https://github.com/blockstack/stacks-blockchain-api/commit/2c587ac968ac4a6056f9dd550e94d27e08315d8a))
* correct re-org handling for miner rewards, although something still off ([e10c121](https://github.com/blockstack/stacks-blockchain-api/commit/e10c1215b3a4525721bfc2e107b36caf68045c33))

## [0.47.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.3...v0.47.4) (2021-02-12)


### Bug Fixes

* custom nonce added in /payloads and /balance ([f8dbc54](https://github.com/blockstack/stacks-blockchain-api/commit/f8dbc542bbf323344f50410a473718bbf15914da))

## [0.47.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.2...v0.47.3) (2021-02-11)


### Bug Fixes

* removed 0x from public key in rosetta combine api ([c127017](https://github.com/blockstack/stacks-blockchain-api/commit/c127017d83e917a6f6a526389a127eed4d2b5c1f))
* used slice instead of replace ([638a170](https://github.com/blockstack/stacks-blockchain-api/commit/638a170a56efe259bdbcef9dd9970c5727282564))

## [0.47.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.1...v0.47.2) (2021-01-30)


### Bug Fixes

* add `?tip` query param to RPC methods ([18a0532](https://github.com/blockstack/stacks-blockchain-api/commit/18a05328942cb27f14866955f7f1ed0358e1d237))

## [0.47.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.47.0...v0.47.1) (2021-01-26)


### Bug Fixes

* chainid env var to work around bootup deadlock ([cee0547](https://github.com/blockstack/stacks-blockchain-api/commit/cee0547d0143a9b4498adb939a683faafbc9a49e))

# [0.47.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.46.0...v0.47.0) (2021-01-25)


### Bug Fixes

* ignore failed on-btc-chain transactions ([4c69b66](https://github.com/blockstack/stacks-blockchain-api/commit/4c69b661fb0b0b18a33a53b4175847c5cf4289af))
* more unit test fixes ([21df2fc](https://github.com/blockstack/stacks-blockchain-api/commit/21df2fc40cb10d40218f24b85f1eb6d058072795))
* tests ([f3048ca](https://github.com/blockstack/stacks-blockchain-api/commit/f3048ca04e888fe9547e0c6e921619d266c3e0b0))


### Features

* handling for on-btc-chain stx-stacks operations ([7c804f8](https://github.com/blockstack/stacks-blockchain-api/commit/7c804f8d6fe04a35db0e9cb4497f3865fe5c2c4d))

# [0.46.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.45.0...v0.46.0) (2021-01-25)


### Features

* env var override for /v2/pox min_amount_ustx ([be27f04](https://github.com/blockstack/stacks-blockchain-api/commit/be27f04625d2215c65256d648dc8ffa8a7f3750f))

# [0.45.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.44.0...v0.45.0) (2021-01-25)


### Features

* normalize express prometheus metrics with route parsing ([292f794](https://github.com/blockstack/stacks-blockchain-api/commit/292f794c89f803475c537cd8a10067da2c6098fb))

# [0.44.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.43.0...v0.44.0) (2021-01-20)


### Features

* filter mempool by stx address ([44f2207](https://github.com/blockstack/stacks-blockchain-api/commit/44f220765ed8ed46f6371f78d19bae0c4d49e97a))

# [0.43.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.42.2...v0.43.0) (2021-01-20)


### Features

* add tx nonce field ([22d7361](https://github.com/blockstack/stacks-blockchain-api/commit/22d7361695b21f287a7c7938d2ccdd469a2a0f5c))

## [0.42.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.42.1...v0.42.2) (2021-01-19)


### Bug Fixes

* [#402](https://github.com/blockstack/stacks-blockchain-api/issues/402) tx events not showing due to pagination issue ([61db3f8](https://github.com/blockstack/stacks-blockchain-api/commit/61db3f8ef5ada9d4ecf47ea439baf931bbfa7e9b))

## [0.42.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.42.0...v0.42.1) (2021-01-19)


### Bug Fixes

* create mock transactions for BTC -- attempt 2 ([ec82251](https://github.com/blockstack/stacks-blockchain-api/commit/ec822513c888f3a62566d4fe642d813cdea9b4e6))


### Reverts

* Revert "fix: create mock tx from event for BTC tx's" ([1ba13a0](https://github.com/blockstack/stacks-blockchain-api/commit/1ba13a0270adfe5146797a42428b5f07c2137418))

# [0.42.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.41.1...v0.42.0) (2021-01-16)


### Features

* detect chain ID during init and use in rosetta APIs ([ad4b7a0](https://github.com/blockstack/stacks-blockchain-api/commit/ad4b7a04596b24ad608b590a64306a78f190739c))

## [0.41.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.41.0...v0.41.1) (2021-01-16)


### Bug Fixes

* create mock tx from event for BTC tx's ([e5c1512](https://github.com/blockstack/stacks-blockchain-api/commit/e5c1512fbdc4ddef8ab41e24766b03c7da22b14c))

# [0.41.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.40.1...v0.41.0) (2021-01-15)


### Features

* config to specifying a different core node for the /v2 proxy ([2a0ed09](https://github.com/blockstack/stacks-blockchain-api/commit/2a0ed0977336efec42d0548d859126a62ca4c2e0))
* configure custom http agent used in v2 proxy, limit max sockets ([b5d35d9](https://github.com/blockstack/stacks-blockchain-api/commit/b5d35d9b7973c1174e7f8b5ba9cbe383992f9a6c))

## [0.40.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.40.0...v0.40.1) (2021-01-15)


### Bug Fixes

* log sql query leak detection correctly ([a4a9326](https://github.com/blockstack/stacks-blockchain-api/commit/a4a9326cd9489d98195a04ae85492d84d2c3d5dc))

# [0.40.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.39.0...v0.40.0) (2021-01-14)


### Bug Fixes

* mainnet follower mode ([c91b25d](https://github.com/blockstack/stacks-blockchain-api/commit/c91b25d6086207df3881ce6999f67c7a3d018b71))


### Features

* update to stacks-node 2.0.1 ([dc06236](https://github.com/blockstack/stacks-blockchain-api/commit/dc06236522840c2cdf531cf51f591dfd76ecc202))

# [0.39.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.38.1...v0.39.0) (2021-01-14)


### Bug Fixes

* consistent url path in openapi.yaml ([fca8ea8](https://github.com/blockstack/stacks-blockchain-api/commit/fca8ea8c5ea61150134bbc0f6c6d699b2487e6ed))
* use wss in client example code ([40624ff](https://github.com/blockstack/stacks-blockchain-api/commit/40624ff5faf13065645e552e3710efbb71c93d8e))


### Features

* update server URLs ([67b79e6](https://github.com/blockstack/stacks-blockchain-api/commit/67b79e64f759afaac2289ff82dbd7b2497435ff3)), closes [blockstack/stacks-blockchain-api#381](https://github.com/blockstack/stacks-blockchain-api/issues/381)

## [0.38.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.38.0...v0.38.1) (2021-01-05)


### Bug Fixes

* ignore source map files in sql migration ([d4e50ed](https://github.com/blockstack/stacks-blockchain-api/commit/d4e50ed74c6437c3e61cd20ec5e07462bbf33479))

# [0.38.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.37.0...v0.38.0) (2021-01-05)


### Features

* implement sql query leak detection and logging ([5c74ab1](https://github.com/blockstack/stacks-blockchain-api/commit/5c74ab1b521c77265cc32f2480c28041aa289c2a))

# [0.37.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.36.1...v0.37.0) (2020-12-30)


### Features

* add pagination for tx events [#365](https://github.com/blockstack/stacks-blockchain-api/issues/365) ([6d9c021](https://github.com/blockstack/stacks-blockchain-api/commit/6d9c02191caf1feaa1fd222793efddb696236a7c))

## [0.36.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.36.0...v0.36.1) (2020-12-28)


### Bug Fixes

* miner reward event parse error ([91d82a1](https://github.com/blockstack/stacks-blockchain-api/commit/91d82a183b275d26429fc9d89a8f37d38b884356))

# [0.36.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.35.1...v0.36.0) (2020-12-23)


### Bug Fixes

* rosetta test fixes ([425cb6f](https://github.com/blockstack/stacks-blockchain-api/commit/425cb6f133b39dc0385f5d1586fa63bab81aacbe))
* throw correct error on failure to fetch tx nonce or fee rate values ([6c92a5d](https://github.com/blockstack/stacks-blockchain-api/commit/6c92a5da0a207c79407548c6d0127780234c8cea))
* update couple more krypton to xenon configs ([8169ca7](https://github.com/blockstack/stacks-blockchain-api/commit/8169ca705ef57bb7f6e2a21aec509492ae5002f4))


### Features

* send stx faucet requests to both miner and follower, increment nonce until stack limit reached ([98eab71](https://github.com/blockstack/stacks-blockchain-api/commit/98eab7153fa30b840c8e4034e7ef201d4fdbc395))
* update dev images from krypton to xenon ([b7018b1](https://github.com/blockstack/stacks-blockchain-api/commit/b7018b1b4c861f295638c5b844846aed72c47302))

## [0.35.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.35.0...v0.35.1) (2020-12-15)


### Bug Fixes

* add temporary limit of 200 stx asset events returned for a given transaction ([d6c663c](https://github.com/blockstack/stacks-blockchain-api/commit/d6c663cba919b3be2d99107f372ec0af7dabe4c3))

# [0.35.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.34.2...v0.35.0) (2020-12-14)


### Bug Fixes

* increase event stream body POST size limit for large genesis block ([b0327fd](https://github.com/blockstack/stacks-blockchain-api/commit/b0327fd1f1e9b0aff747694f974205f654373a32))
* initial genesis ingest optimization pass, from ~30 minutes to ~30 seconds ([0c3bdba](https://github.com/blockstack/stacks-blockchain-api/commit/0c3bdba37a9a0c8df003ac7663408b281d82862d))


### Features

* abstract batch event inserts, apply to contract events ([94b754b](https://github.com/blockstack/stacks-blockchain-api/commit/94b754b80534aa00e1763fe1b6aa7a0302dfa2c8))

## [0.34.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.34.1...v0.34.2) (2020-11-30)


### Bug Fixes

* security issues with packages ([dd734de](https://github.com/blockstack/stacks-blockchain-api/commit/dd734de1540de1cfd1199b0aa3f4b0eddfa237a8))

## [0.34.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.34.0...v0.34.1) (2020-11-25)


### Bug Fixes

* update core images used in docker files, fix [#349](https://github.com/blockstack/stacks-blockchain-api/issues/349) ([7a9b9ba](https://github.com/blockstack/stacks-blockchain-api/commit/7a9b9baaa28057bc2987b33be948e67aa817cee0))

# [0.34.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.33.0...v0.34.0) (2020-11-24)


### Features

* update to latest stacks.js lib, fixes [#342](https://github.com/blockstack/stacks-blockchain-api/issues/342) ([b8e546c](https://github.com/blockstack/stacks-blockchain-api/commit/b8e546cdd301b0479144810bfd9fb50119310ad8))

# [0.33.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.4...v0.33.0) (2020-11-20)


### Bug Fixes

* bug with locked stx referring to STX chaintip rather than burnchain tip [#343](https://github.com/blockstack/stacks-blockchain-api/issues/343) [#344](https://github.com/blockstack/stacks-blockchain-api/issues/344) (same bug in a rosetta function) ([12cd2fa](https://github.com/blockstack/stacks-blockchain-api/commit/12cd2fa7b00b9b837bfa6db8924e55b11dfc694d))
* openapi client gen chokes on nullable string types ([d59c55b](https://github.com/blockstack/stacks-blockchain-api/commit/d59c55b2d5f3f5540021b06c7da225b12b32af78))


### Features

* add lock height and lock txid to balance endpoints [#340](https://github.com/blockstack/stacks-blockchain-api/issues/340) ([aac121d](https://github.com/blockstack/stacks-blockchain-api/commit/aac121d8c7948e40d4eb43bc21685899c783fe73))

## [0.32.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.3...v0.32.4) (2020-11-20)


### Bug Fixes

* bug with locked stx referring to STX chaintip rather than burnchain tip [#343](https://github.com/blockstack/stacks-blockchain-api/issues/343) [#344](https://github.com/blockstack/stacks-blockchain-api/issues/344) ([c1bf091](https://github.com/blockstack/stacks-blockchain-api/commit/c1bf0911157778a02e67cf38413ce115e3616732))

## [0.32.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.2...v0.32.3) (2020-11-18)


### Bug Fixes

* wrap mempool tx inserts in sql transactions, along with a few other queries ([a6cf1f1](https://github.com/blockstack/stacks-blockchain-api/commit/a6cf1f10588cf2ca49955b4a9225af315715d3bc))

## [0.32.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.1...v0.32.2) (2020-11-18)


### Bug Fixes

* increase logging for tx handling in db ([f1d6501](https://github.com/blockstack/stacks-blockchain-api/commit/f1d65018aca9ab9fea2710647dd862492a6c5b39))

## [0.32.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.1...v0.32.2) (2020-11-18)


### Bug Fixes

* increase logging for tx handling in db ([f1d6501](https://github.com/blockstack/stacks-blockchain-api/commit/f1d65018aca9ab9fea2710647dd862492a6c5b39))

## [0.32.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.32.0...v0.32.1) (2020-11-17)


### Bug Fixes

* restore mempool transactions when cycling from non-canonical back to canonical ([c84ecca](https://github.com/blockstack/stacks-blockchain-api/commit/c84ecca5aa7d880fb92ca7aaa3ae418a62e8f43b))

# [0.32.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.31.4...v0.32.0) (2020-11-17)


### Features

* add btc reward API endpoints ([7a9b18e](https://github.com/blockstack/stacks-blockchain-api/commit/7a9b18e43d3e01723fa79e91ca0c5e4034133e8a))
* API for total burn reward amount for address ([72a560f](https://github.com/blockstack/stacks-blockchain-api/commit/72a560f0f713c983c11e47fc9383eafb93186d83))
* integrate btc rewards into db ([19a1e6f](https://github.com/blockstack/stacks-blockchain-api/commit/19a1e6fe7a27ff6d7f9b99cb317014f54bc66314))

## [0.31.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.31.3...v0.31.4) (2020-11-16)


### Bug Fixes

* [#319](https://github.com/blockstack/stacks-blockchain-api/issues/319) [#330](https://github.com/blockstack/stacks-blockchain-api/issues/330) bump STX faucet to accommodate increasing min Stacking amount ([cfcf45d](https://github.com/blockstack/stacks-blockchain-api/commit/cfcf45d07fbeafefcec294c3bdeb58bf62f415b2))

## [0.31.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.31.2...v0.31.3) (2020-11-12)


### Bug Fixes

* return string for post transactions endpoint ([a132bcb](https://github.com/blockstack/stacks-blockchain-api/commit/a132bcbfd41b0af243eb1f3563a6ddac44afe9d9))
* use Blob in TransactionsApi ([8d7bdbb](https://github.com/blockstack/stacks-blockchain-api/commit/8d7bdbb153a824ef35ecd49003895c4da403ece5))
* v2/transactions format ([50b0037](https://github.com/blockstack/stacks-blockchain-api/commit/50b003740eef6c9355c3177e77b8e5b431eb6ee5))

## [0.31.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.31.1...v0.31.2) (2020-11-12)


### Bug Fixes

* [#322](https://github.com/blockstack/stacks-blockchain-api/issues/322) contract names can be less than 5 chars ([b835507](https://github.com/blockstack/stacks-blockchain-api/commit/b8355073506ba222c902ce71758cccc3692480a8))

## [0.31.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.31.0...v0.31.1) (2020-11-12)


### Bug Fixes

* attempt client gh workflow fix [#2](https://github.com/blockstack/stacks-blockchain-api/issues/2) ([5bec19f](https://github.com/blockstack/stacks-blockchain-api/commit/5bec19f7ccc8975df7db70c0c432bdd334f4d50d))
* bad cache keys breaking gh workflow (?) ([c459b2c](https://github.com/blockstack/stacks-blockchain-api/commit/c459b2c915b141148fb8b0ac9989d25317ee6d2c))

# [0.31.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.30.0...v0.31.0) (2020-11-12)


### Features

* define `matured_miner_rewards` object ([8fc8a7a](https://github.com/blockstack/stacks-blockchain-api/commit/8fc8a7a7c4bfb0d7c93ce528e3a00db4fc58f588))
* integrate miner rewards into db and account balance calcuations ([9cac60c](https://github.com/blockstack/stacks-blockchain-api/commit/9cac60cf1919f0e79ee796f947bc9408f6cbfeca))

# [0.30.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.5...v0.30.0) (2020-11-12)


### Bug Fixes

* bump nodejs version in github workflow ([0640790](https://github.com/blockstack/stacks-blockchain-api/commit/064079076b6ffe08cdef25aafa041c35947f453c))
* stub response for `/new_burn_block` (allows sidecar to run with latest core node) ([4a48a29](https://github.com/blockstack/stacks-blockchain-api/commit/4a48a294a2312d98a37509de1ff73b4b9f165a27))


### Features

* add locked STX events and balance info to tx and address endpoints [#282](https://github.com/blockstack/stacks-blockchain-api/issues/282) [#268](https://github.com/blockstack/stacks-blockchain-api/issues/268) ([67cb65d](https://github.com/blockstack/stacks-blockchain-api/commit/67cb65df366eaf0fbb79226318230b00472087f3))
* add STX lock events to API endpoints ([e20f4df](https://github.com/blockstack/stacks-blockchain-api/commit/e20f4dfc4d80468f7da14d71749f8f1d364a515d))
* integrate Stacking STX into database and provide through account API details, upgrade to nodejs v14 ([b61129c](https://github.com/blockstack/stacks-blockchain-api/commit/b61129c2f177054befae9255d9180c7bcfabc31d))
* integrate stx lock event handling into db ([334eb9d](https://github.com/blockstack/stacks-blockchain-api/commit/334eb9da9d6c0cb9f1d50479c90ea8bfd3a60c63))
* use core event_index from https://github.com/blockstack/stacks-blockchain/pull/2050 ([9d8db70](https://github.com/blockstack/stacks-blockchain-api/commit/9d8db70fe1ae52fb8d737d3ed5dc8f8383a36bbc))
* use STX locked_address from https://github.com/blockstack/stacks-blockchain/pull/2050 ([ac741d7](https://github.com/blockstack/stacks-blockchain-api/commit/ac741d7c5b56dd6a4676aee0135eea44f3a75d6b))

## [0.29.5](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.4...v0.29.5) (2020-11-12)


### Bug Fixes

* update v2/info documentation and client ([35afa71](https://github.com/blockstack/stacks-blockchain-api/commit/35afa71fbdf5a9b714a572480364d8fef67f8126))

## [0.29.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.3...v0.29.4) (2020-11-11)


### Bug Fixes

* getStxBalanceAtBlock() did not calculate fees properly ([944bc36](https://github.com/blockstack/stacks-blockchain-api/commit/944bc36e18da79060b72e6efdc85cc59b88ee408))
* handle contract call transactions with no function args ([531d9ad](https://github.com/blockstack/stacks-blockchain-api/commit/531d9adddad5b1c7e224071964e054de81714873))

## [0.29.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.2...v0.29.3) (2020-11-10)


### Bug Fixes

* copy *.toml from the app build section, do not depend on local repo ([c43258c](https://github.com/blockstack/stacks-blockchain-api/commit/c43258c140bcd56c1e7ad9af659ce5464c12d456))
* oops, forgot to update the test to check for rosetta 1.4.6 ([8b705c0](https://github.com/blockstack/stacks-blockchain-api/commit/8b705c074b3f0c217e6ce5864fb36f629a5d4dc7))
* remove a command from stx-rosetta.Dockerfile used for testing ([ccdde18](https://github.com/blockstack/stacks-blockchain-api/commit/ccdde18cd52cdeebbe2e4a3307f22da0057ee085))
* remove check:construction until the other PR is merged ([7cb531d](https://github.com/blockstack/stacks-blockchain-api/commit/7cb531d29bbe86abeba4bced4cd1b254040761d6))
* stx-rosetta.Dockerfile had a COPY that should not be committed ([e52ea17](https://github.com/blockstack/stacks-blockchain-api/commit/e52ea176e4b9dfdf9dbf392ca0e7907df1e3712e))
* upgrade rosetta version from 1.4.2 to 1.4.6 ([2e621be](https://github.com/blockstack/stacks-blockchain-api/commit/2e621be6ccfab118efe3a4d8fe7a86a9a807d9cb))

## [0.29.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.1...v0.29.2) (2020-11-05)


### Bug Fixes

* lint issue ([8af17fc](https://github.com/blockstack/stacks-blockchain-api/commit/8af17fcfda03fa638855388f10eac5a174357252))
* removed empty status ([d4cfa51](https://github.com/blockstack/stacks-blockchain-api/commit/d4cfa51b9721922645592a461d951143e9070610))

## [0.29.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.29.0...v0.29.1) (2020-10-27)


### Bug Fixes

* [#306](https://github.com/blockstack/stacks-blockchain-api/issues/306) query for min stacking STX amount from /v2/pox endpoint ([1ba0599](https://github.com/blockstack/stacks-blockchain-api/commit/1ba0599d725311b8ad3e5486bf7910673e2994b5))

# [0.29.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.28.0...v0.29.0) (2020-10-27)


### Features

* [#302](https://github.com/blockstack/stacks-blockchain-api/issues/302) add btc info to blocks, [#301](https://github.com/blockstack/stacks-blockchain-api/issues/301) pull stacks-node from dockerhub image ([9e9fd99](https://github.com/blockstack/stacks-blockchain-api/commit/9e9fd9922770cd75e366cab86fe339872cb60379))

# [0.28.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.27.0...v0.28.0) (2020-10-15)


### Bug Fixes

* adding schema for fee estimates ([6c13a55](https://github.com/blockstack/stacks-blockchain-api/commit/6c13a554cced554509531408543550e3afdf9156))


### Features

* adding client updates ([5999360](https://github.com/blockstack/stacks-blockchain-api/commit/5999360e4c05a10a37b16bd4ca932d05c4b7f8df))

# [0.27.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.26.0...v0.27.0) (2020-10-13)


### Features

* adding new pox & stacking fields ([75f7f8e](https://github.com/blockstack/stacks-blockchain-api/commit/75f7f8ef7463280452f2187780e90f256b1952cf))

# [0.26.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.5...v0.26.0) (2020-10-12)


### Bug Fixes

* add support for multi signature in payloads endpoint ([4b1adf2](https://github.com/blockstack/stacks-blockchain-api/commit/4b1adf260ad193d0ae844c18ba8719870dd36d96))
* fixed number of multisignature ([46af37a](https://github.com/blockstack/stacks-blockchain-api/commit/46af37aca7fcda3e1746ccbb12c591fcb22d939f))


### Features

* add implementation of rosetta construction/combine endpoint ([8d7f0dc](https://github.com/blockstack/stacks-blockchain-api/commit/8d7f0dc8996943d5568d2ad7528e930e80a084e5))
* implement rosetta construction/payloads endpoint ([55f855a](https://github.com/blockstack/stacks-blockchain-api/commit/55f855a4b0a46e73f5829cc1aa64d7504bbe439f))

## [0.25.5](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.4...v0.25.5) (2020-10-12)


### Bug Fixes

* add a return statement after setting the response ([e833b1b](https://github.com/blockstack/stacks-blockchain-api/commit/e833b1b5305c2531a67c97c948757d12f322df7d))
* update condition ([991961c](https://github.com/blockstack/stacks-blockchain-api/commit/991961c8dd351ab25d7edec1954bb5ecaa06c312))

## [0.25.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.3...v0.25.4) (2020-10-07)


### Bug Fixes

* [#280](https://github.com/blockstack/stacks-blockchain-api/issues/280) -- standalone docker image broken ([58d05c6](https://github.com/blockstack/stacks-blockchain-api/commit/58d05c67ee5309b744a420c6e7bb3ac2d4f0a29b))

## [0.25.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.2...v0.25.3) (2020-10-06)


### Bug Fixes

* fix mempool transaction issue response issue ([4bb146d](https://github.com/blockstack/stacks-blockchain-api/commit/4bb146d5450a3e77410fcac812fd2c09debdc95d))

## [0.25.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.1...v0.25.2) (2020-10-02)


### Bug Fixes

* faucet node override vars missing in tx submission call ([0d0b76c](https://github.com/blockstack/stacks-blockchain-api/commit/0d0b76c9128278c908d148b3e936be31b3361436))

## [0.25.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.25.0...v0.25.1) (2020-10-02)


### Bug Fixes

* rosetta submit test generates txs instead of using hardcoded ones ([e175f12](https://github.com/blockstack/stacks-blockchain-api/commit/e175f1226ab78df5679a3d14a5ed1fa1fa5322f4))

# [0.25.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.24.1...v0.25.0) (2020-10-02)


### Features

* faucet txs now stacks mempool txs with retry-nonce-incrementing up to 5 ([fb53e1e](https://github.com/blockstack/stacks-blockchain-api/commit/fb53e1eb4a2e10a14848a97c059486889e57d343))

## [0.24.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.24.0...v0.24.1) (2020-10-02)


### Bug Fixes

* **openapi:** add get contract data map entry schema ([b87f484](https://github.com/blockstack/stacks-blockchain-api/commit/b87f4844275a1e8e984ba3b1cf5f5fbc055552da))

# [0.24.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.23.0...v0.24.0) (2020-10-02)


### Bug Fixes

* update openapi.yaml to use a single tag for rosetta endpoints ([c05086f](https://github.com/blockstack/stacks-blockchain-api/commit/c05086fc8cf60e53f25155c1d67e3d16f2459a5c))


### Features

* stx faucet stacking differentiation [#247](https://github.com/blockstack/stacks-blockchain-api/issues/247) ([f37eeee](https://github.com/blockstack/stacks-blockchain-api/commit/f37eeee3858472815428437f7a2020bebe34549c))

# [0.23.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.22.1...v0.23.0) (2020-10-02)


### Features

* env var to override the node used for the faucet [#257](https://github.com/blockstack/stacks-blockchain-api/issues/257) ([e3992c6](https://github.com/blockstack/stacks-blockchain-api/commit/e3992c6a96654e0d32dac96df81393690d792440))

## [0.22.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.22.0...v0.22.1) (2020-10-01)


### Bug Fixes

* lint issues ([87aa514](https://github.com/blockstack/stacks-blockchain-api/commit/87aa514a343131ea14b17fb69cbef5a6374e5744))
* place all rosetta tests in one file ([0eda451](https://github.com/blockstack/stacks-blockchain-api/commit/0eda451ddc30138ad44f526eb5146b262a0e5b41))
* typos and add check signer in parse test ([839a409](https://github.com/blockstack/stacks-blockchain-api/commit/839a4094629af8d9db6fa30472a0e0de79924cda))
* used stacks-transaction for testing parse api ([6765cde](https://github.com/blockstack/stacks-blockchain-api/commit/6765cde716f89af0426d0996713c5422ac1a2c3e))

# [0.22.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.21.0...v0.22.0) (2020-09-25)


### Features

* add rosetta construction/hash endpoin implementation ([b9f4ff6](https://github.com/blockstack/stacks-blockchain-api/commit/b9f4ff6bb9107caf1ce450698c2ee1b8b1aa27c7))
* add rosetta construction/metadata implementation ([b60b30e](https://github.com/blockstack/stacks-blockchain-api/commit/b60b30e7fbf5f0d4ac4d72c86ffb77f613f4fe46))

# [0.21.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.20.0...v0.21.0) (2020-09-25)


### Features

* add follower-mode vscode debug config ([f07bc57](https://github.com/blockstack/stacks-blockchain-api/commit/f07bc57553a89681ab0f188d34c9354a8910ad41))

# [0.20.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.19.0...v0.20.0) (2020-09-25)


### Features

* add pox endpoint ([d4e6966](https://github.com/blockstack/stacks-blockchain-api/commit/d4e6966aa4d18409d127ab916144511b901bb192))
* adding generated client libs for pox proxy ([2a4aa5a](https://github.com/blockstack/stacks-blockchain-api/commit/2a4aa5a0843cd0090b32820fa3ede6a046a8634f))

# [0.19.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.18.1...v0.19.0) (2020-09-24)


### Features

* update client to match new openapi spec ([bba888c](https://github.com/blockstack/stacks-blockchain-api/commit/bba888ca294efacd57c6a5dd823068da2415c093))

## [0.18.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.18.0...v0.18.1) (2020-09-24)


### Bug Fixes

* support new Clarity string types [#223](https://github.com/blockstack/stacks-blockchain-api/issues/223) ([2c8669b](https://github.com/blockstack/stacks-blockchain-api/commit/2c8669b1f6692bb15c8838816cc8b107034a9da2))

# [0.18.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.17.0...v0.18.0) (2020-09-24)


### Features

* noop handler for STXLockEvent, _should_ ignore event rather than reject ([b02985c](https://github.com/blockstack/stacks-blockchain-api/commit/b02985c5f7c6afc0ed93378f512daafe18e5907e))

# [0.17.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.16.0...v0.17.0) (2020-09-24)


### Features

* cool down: from 2 days to 1 hour ([c6f4924](https://github.com/blockstack/stacks-blockchain-api/commit/c6f4924f56ecf211184e072271983632197757ca))

# [0.16.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.15.0...v0.16.0) (2020-09-22)


### Bug Fixes

* build issues with prom libs ([bb38998](https://github.com/blockstack/stacks-blockchain-api/commit/bb38998f7cb323f853b4f1707f661c14a766c19a))
* use import instead of require ([798e44a](https://github.com/blockstack/stacks-blockchain-api/commit/798e44a670634054037f06213e7fda309a2fdde5))


### Features

* add prometheus metrics endpoint ([ce9cbe9](https://github.com/blockstack/stacks-blockchain-api/commit/ce9cbe94d40a8f60de05ae9b81282fb213c70ce0))

# [0.15.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.14.4...v0.15.0) (2020-09-22)


### Features

* add functionality for rosetta construction/preprocess endpoint ([f9bcbe4](https://github.com/blockstack/stacks-blockchain-api/commit/f9bcbe4760d52b86be9c84a8ee6e226b7c3275f4))

## [0.14.4](https://github.com/blockstack/stacks-blockchain-api/compare/v0.14.3...v0.14.4) (2020-09-16)


### Bug Fixes

* derive address from specific network ([342cce9](https://github.com/blockstack/stacks-blockchain-api/commit/342cce9cde158c34a224e0f3a6914f97b84d0c6b))

## [0.14.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.14.2...v0.14.3) (2020-09-15)


### Bug Fixes

* pagination and proof params in openapi spec ([4363ffe](https://github.com/blockstack/stacks-blockchain-api/commit/4363ffe7ef503c94d47d68150393e8aa9258ce3d)), closes [#222](https://github.com/blockstack/stacks-blockchain-api/issues/222)
* string array enum ([50f16ff](https://github.com/blockstack/stacks-blockchain-api/commit/50f16ff0a2d2b9ddc10128f12bfbe80afb3e0acf))

## [0.14.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.14.1...v0.14.2) (2020-09-12)


### Bug Fixes

* **client:** add readOnlyFunctionArgs ([3258dcf](https://github.com/blockstack/stacks-blockchain-api/commit/3258dcf59b0a33fe1591d45d387537adc115d7c5))

## [0.14.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.14.0...v0.14.1) (2020-09-10)


### Bug Fixes

* [#229](https://github.com/blockstack/stacks-blockchain-api/issues/229) standalone docker image starts stacks-node twice ([26692b3](https://github.com/blockstack/stacks-blockchain-api/commit/26692b37442c27814c70a244d5c88853a73ec2e5))

# [0.14.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.13.0...v0.14.0) (2020-09-08)


### Bug Fixes

* accidentally deleted the hash hexToBuffer validator check, added ([78ac061](https://github.com/blockstack/stacks-blockchain-api/commit/78ac061ca2c5e1ce022de5ca987ff760865af1de))
* missed a line while merging in the pull request ([f0f2e8d](https://github.com/blockstack/stacks-blockchain-api/commit/f0f2e8d3b04374742b3241a0c6337d8ece1373c8))
* optional property checks in /rosetta/v1/block for RosettaPartialBlockIdentifier ([35aac8f](https://github.com/blockstack/stacks-blockchain-api/commit/35aac8f6db2894ce84cdae710061ae47b1229bd1))
* remove validation middleware stub from api/init.ts ([cb64091](https://github.com/blockstack/stacks-blockchain-api/commit/cb640917e297cfe342767dff5bc968b253376f9c))
* restore "canonical = true" check in various SQL queries ([afba1a1](https://github.com/blockstack/stacks-blockchain-api/commit/afba1a1f871b430c16e7b21bc1253e8c206bf68c))
* schema changes for rosetta block and block/transaction calls ([174c4c5](https://github.com/blockstack/stacks-blockchain-api/commit/174c4c524bbc6ec08d261f66b18c0b84664517e9))
* the blockHash parameter was incorrectly named indexBlockHash ([e568ae9](https://github.com/blockstack/stacks-blockchain-api/commit/e568ae93e2a2628f420f5f9b2b5476326597747c))
* trim trailing slashes (if any) from the url in rosettaValidateRequest() ([9c211da](https://github.com/blockstack/stacks-blockchain-api/commit/9c211dabc4742360779a0094940a179ff3409e8d))
* type, reciever -> receiver ([e40a829](https://github.com/blockstack/stacks-blockchain-api/commit/e40a82923625fb1f1f5da55eda0d99100b279407))
* use http 404 for rosetta errors of the type "Not Found" for consistency ([8929334](https://github.com/blockstack/stacks-blockchain-api/commit/8929334df33bbc492e90d107f597698c708a0eed))


### Features

* add request validation code for rosetta ([c8dfb43](https://github.com/blockstack/stacks-blockchain-api/commit/c8dfb43df5070a414f7fa92fc8c32d5bb0fb4e45))
* rosetta mempool api endpoints ([90bb40c](https://github.com/blockstack/stacks-blockchain-api/commit/90bb40cfd662d6b0150bd5cb0a0f51911ca021ca))

# [0.13.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.12.0...v0.13.0) (2020-09-03)


### Features

* option to start the self-contained image in mocknet mode ([e567024](https://github.com/blockstack/stacks-blockchain-api/commit/e567024bc10f7877b8fc8d7ac548291ecf31807b))

# [0.12.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.11.3...v0.12.0) (2020-09-02)


### Features

* update jsonrc package—thanks [@zensh](https://github.com/zensh), closes [#208](https://github.com/blockstack/stacks-blockchain-api/issues/208) ([86b575d](https://github.com/blockstack/stacks-blockchain-api/commit/86b575da766f229ce971495139eae0ba68f1002b))

## [0.11.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.11.2...v0.11.3) (2020-09-01)


### Bug Fixes

* mempool schema files renamed: rosetta-mempool-transaction-list-* -> rosetta-mempool-* ([d24bfe8](https://github.com/blockstack/stacks-blockchain-api/commit/d24bfe8956f4596a143e49f45a8d25111b1c783a))
* missed several request/response files ([09e373b](https://github.com/blockstack/stacks-blockchain-api/commit/09e373b3f93f79c6089c0c791bcb9eceec60d66e))
* separate out rosetta request/response schema files from entity files ([bd4dc86](https://github.com/blockstack/stacks-blockchain-api/commit/bd4dc8649341139a2251024417bfb57805f04367))


### Reverts

* this volume change should not have been committed ([8e46a40](https://github.com/blockstack/stacks-blockchain-api/commit/8e46a40011a4ce07e4057e77966c25d692d5e068))

## [0.11.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.11.1...v0.11.2) (2020-08-27)


### Bug Fixes

* add tx_result to example ([1ce88a6](https://github.com/blockstack/stacks-blockchain-api/commit/1ce88a65d9bb8ac2df86c036b05b6af1e061aeba)), closes [#212](https://github.com/blockstack/stacks-blockchain-api/issues/212)
* adding block time ([f895fe7](https://github.com/blockstack/stacks-blockchain-api/commit/f895fe7225d3e457137bed719221047560d6ed43)), closes [#213](https://github.com/blockstack/stacks-blockchain-api/issues/213)

## [0.11.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.11.0...v0.11.1) (2020-08-27)


### Bug Fixes

* sidecar do not exit while trying to connect to postgres ([2a3c693](https://github.com/blockstack/stacks-blockchain-api/commit/2a3c693870951d512d44eb296befd48a592c2bf1))

# [0.11.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.10.0...v0.11.0) (2020-08-27)


### Bug Fixes

* add java to follower docker build ([78caee3](https://github.com/blockstack/stacks-blockchain-api/commit/78caee30e9068f8e504f88019621a6a2c71b7e8e))
* restarting services on node exit ([7f86511](https://github.com/blockstack/stacks-blockchain-api/commit/7f86511366df58e8e639cdcc97684a42f6ace312))


### Features

* dockerfile for self-contained follower ([9628148](https://github.com/blockstack/stacks-blockchain-api/commit/96281487229b6fd85d8fc5a2c75d74390a07efda))
* dockerfile with all stacks-blockchain-api dependencies working ([66d64ed](https://github.com/blockstack/stacks-blockchain-api/commit/66d64ed4e068bf6d2a500d8a6a347eff72fcc11a))
* progress on self contained follower ([d544edf](https://github.com/blockstack/stacks-blockchain-api/commit/d544edf9e3ff7769ab333b41aea11f3f472cfa2d))

# [0.10.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.9.0...v0.10.0) (2020-08-26)


### Bug Fixes

* revert test:integration script operator change ([d949119](https://github.com/blockstack/stacks-blockchain-api/commit/d949119fcaeb1ebc8fee9dd2376b168ed4409d9e))
* update readme and openapi client description ([2af816b](https://github.com/blockstack/stacks-blockchain-api/commit/2af816b4a50583f00af481be9fa748ccb41dd21d))
* windows friendly operator ([f1cd6ff](https://github.com/blockstack/stacks-blockchain-api/commit/f1cd6ff27ee5cc368fac5783a92d7682a4b4552f))


### Features

* adding docs tasks to main package.json ([6fda66c](https://github.com/blockstack/stacks-blockchain-api/commit/6fda66c3cc7dab6c250a2dbcd5980c8081623d34))
* client docs ([602a266](https://github.com/blockstack/stacks-blockchain-api/commit/602a2669e3c9ad03f75e012da386c6c1c67f77ea))

# [0.9.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.8.0...v0.9.0) (2020-08-26)


### Bug Fixes

* fetch the api server's version from package.json ([e6efc40](https://github.com/blockstack/stacks-blockchain-api/commit/e6efc40fd11a363cd2f29cbe105bb63a040b972d))


### Features

* add hard-coded status and error messages for rosetta ([84fae9b](https://github.com/blockstack/stacks-blockchain-api/commit/84fae9b7573df995ae029b152172f88a95ae6c91))
* add mempool openapi docs ([b981c49](https://github.com/blockstack/stacks-blockchain-api/commit/b981c499e6d0e0bc3fb3bf0f6049f409921746a9))
* add rosetta api schema for type information ([edb3b14](https://github.com/blockstack/stacks-blockchain-api/commit/edb3b14b597466d49674b07fee2aff615a300ad5))
* fill out rosetta network list and options calls ([a753c96](https://github.com/blockstack/stacks-blockchain-api/commit/a753c9614a9d62ad3cb6579ec36b44a4443208ad))
* stub handlers for rosetta api endpoints ([9603ea4](https://github.com/blockstack/stacks-blockchain-api/commit/9603ea4b46107e21412a2f468df0a6b966e39922))

# [0.8.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.7.0...v0.8.0) (2020-08-25)


### Bug Fixes

* deserializing multisig txs ([db6d264](https://github.com/blockstack/stacks-blockchain-api/commit/db6d264d1995aa5f872a4a8da9c34819e02e58ee))
* N-of-M multisig working ([34ba78c](https://github.com/blockstack/stacks-blockchain-api/commit/34ba78c40376a06dc161bd97b92756553a488cdd))
* N-of-N (one to one) multisig txs working ([4cc155b](https://github.com/blockstack/stacks-blockchain-api/commit/4cc155bf7ca4f2869827593a0d049f508d3f2cd7))


### Features

* initial debug endpoint support for sending multisig transactions ([d12ba53](https://github.com/blockstack/stacks-blockchain-api/commit/d12ba53fb0f1230baed3782d362b5bf3d3d9fa5b))

# [0.7.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.6.0...v0.7.0) (2020-08-24)


### Features

* expose target block time [#192](https://github.com/blockstack/stacks-blockchain-api/issues/192) ([89165b2](https://github.com/blockstack/stacks-blockchain-api/commit/89165b2becc48b9e83f92f54564434fde291a403))

# [0.6.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.5.3...v0.6.0) (2020-08-20)


### Bug Fixes

* add java to gh workflow ([d5ae6ca](https://github.com/blockstack/stacks-blockchain-api/commit/d5ae6caaa4ee9da261f67e47e0a1514ce04980f5))
* add jre to the dockerfile build ([402686c](https://github.com/blockstack/stacks-blockchain-api/commit/402686c1bfb83bbfb6c12aaa83652cce3e411719))
* client package.json files includes ([da6061f](https://github.com/blockstack/stacks-blockchain-api/commit/da6061f1cfc3ce9cf421ae18d38feac9a0950bcd))
* cross-platform openapi generation script ([7ade2fb](https://github.com/blockstack/stacks-blockchain-api/commit/7ade2fb9736943b1ba7690d8d7d3ba2eebd500d5))
* lint fixes ([465a72e](https://github.com/blockstack/stacks-blockchain-api/commit/465a72e651b6721e9e15a7065fb84235f1d99e96))
* postinstall script to build client lib if needed, add readme ([791f763](https://github.com/blockstack/stacks-blockchain-api/commit/791f763120e166bb253da093eb7cf8cf4c5e01e8))
* typing errors with esModuleInterop, default websocket client connection URL ([a1517b1](https://github.com/blockstack/stacks-blockchain-api/commit/a1517b1824d785a82adf30063723e355d575c308))


### Features

* auto-generated client demo ([6eda93d](https://github.com/blockstack/stacks-blockchain-api/commit/6eda93d7ffd4ba886c4ede489fcdf6adda830914))

## [0.5.3](https://github.com/blockstack/stacks-blockchain-api/compare/v0.5.2...v0.5.3) (2020-08-13)


### Bug Fixes

* retry npm publish ([3bda2bb](https://github.com/blockstack/stacks-blockchain-api/commit/3bda2bba4c38663aa075b8475681aa4c7cf49aa1))

## [0.5.2](https://github.com/blockstack/stacks-blockchain-api/compare/v0.5.1...v0.5.2) (2020-08-13)


### Bug Fixes

* gh-action to npm build before publishing ([40cd062](https://github.com/blockstack/stacks-blockchain-api/commit/40cd062178ab78f2940876511c9baac5f1e5df51))

## [0.5.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.5.0...v0.5.1) (2020-08-13)


### Bug Fixes

* gh-action for publishing ws-rpc-client ([544f970](https://github.com/blockstack/stacks-blockchain-api/commit/544f9704ab70ed1dd25979f8cfbb7339250bd02d))

# [0.5.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.4.0...v0.5.0) (2020-08-13)


### Bug Fixes

* remove unnecessary db tx status query from event listeners ([0a0a20d](https://github.com/blockstack/stacks-blockchain-api/commit/0a0a20dcd4b4017019ac9944f235b9ecf15568f8))


### Features

* friendlier ws-rpc-api client subscription functions ([9160039](https://github.com/blockstack/stacks-blockchain-api/commit/9160039afc3f1a674d76ccc2d87f78404adf8525))
* websocket rpc client lib ([0a67a11](https://github.com/blockstack/stacks-blockchain-api/commit/0a67a11043d83cc5aedfa2811e6fc3118e4042d6))
* websocket rpc notifications for address tx and balance updates ([14d92b0](https://github.com/blockstack/stacks-blockchain-api/commit/14d92b0ca43b7638a90eda04ed86d34e66f19097))
* websocket RPC pubsub service for real-time data services ([6eb83e8](https://github.com/blockstack/stacks-blockchain-api/commit/6eb83e8aa1cb6e5eb98c8c5ad8c94ff3954819f6))

# [0.4.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.3.1...v0.4.0) (2020-07-28)


### Bug Fixes

* linting errors after rebase with latest master ([3679652](https://github.com/blockstack/stacks-blockchain-api/commit/3679652058df3b6456ed16c0a8fc170499b2ac88))
* unit tests fixed after rebase with latest master ([a806740](https://github.com/blockstack/stacks-blockchain-api/commit/a806740cb59537cf1048a97114cec64be0daa7a9))
* unit tests for sponsored tx (redundant null property) ([c918235](https://github.com/blockstack/stacks-blockchain-api/commit/c9182357a2e52db97159c04de6b52976ca241409))


### Features

* add sponsor transaction option to debug broadcast endpoints ([4511a50](https://github.com/blockstack/stacks-blockchain-api/commit/4511a502650bc834540ea032eb476ba2b09d8d84))
* support sponsored tx in db and API response ([01703e7](https://github.com/blockstack/stacks-blockchain-api/commit/01703e7222828b6df2ed1ed0e26de3e9ae18d11e))

## [0.3.1](https://github.com/blockstack/stacks-blockchain-api/compare/v0.3.0...v0.3.1) (2020-07-28)


### Bug Fixes

* address stx balance schema bug ([b44a9b9](https://github.com/blockstack/stacks-blockchain-api/commit/b44a9b9e20329987d00a8cac90eaa7098c9de1b1))
* make address stx balance take fees into account ([f845086](https://github.com/blockstack/stacks-blockchain-api/commit/f84508668ecb6c264e9d56dfb8f29c4675b40b33))

# [0.3.0](https://github.com/blockstack/stacks-blockchain-api/compare/v0.2.5...v0.3.0) (2020-07-28)


### Bug Fixes

* possible fix for core-node proxy in gitpod deployment ([c0aaee8](https://github.com/blockstack/stacks-blockchain-api/commit/c0aaee81863150d024eb82626bee3fa61cf4a404))
* **docs:** conform to 'Response' naming convention ([735006e](https://github.com/blockstack/stacks-blockchain-api/commit/735006e58207e6bcd21ab5ce67e9bd0a0b460fdd))
* **docs:** required props, dictionary for fts, nfts ([63fe101](https://github.com/blockstack/stacks-blockchain-api/commit/63fe101b366df3f28cd554ac937a4a0bd7bea574))
* Mempool tx status to enable union type ([26feddb](https://github.com/blockstack/stacks-blockchain-api/commit/26feddb9483dbc6cae77e78837830d5fcf611baa))
* type errors in build ([c842e2b](https://github.com/blockstack/stacks-blockchain-api/commit/c842e2b4462cba24cc088f1f6f846aa403cb0756))


### Features

* add gitpod to readme ([fa5f3df](https://github.com/blockstack/stacks-blockchain-api/commit/fa5f3dfc6c9d037133cd5ec16db58d4cbcb8bd37))
* add prebuild support to gitpod config ([fe89677](https://github.com/blockstack/stacks-blockchain-api/commit/fe89677bdab1049a0057127c640a664c6fcd4741))
* gitpod support ([f89191d](https://github.com/blockstack/stacks-blockchain-api/commit/f89191d844783e37f38db76d71a6155b320c350a))
* redirect root path to status path ([2e74937](https://github.com/blockstack/stacks-blockchain-api/commit/2e749373293d6d9c0890bc574aa4a0af2f00c9eb))

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

