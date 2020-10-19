[Get Ether Balance for multiple Addresses in a single call](https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67&tag=latest&apikey=YourApiKeyToken)


[Get Ether Balance for a single Address](https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken)
- Separate addresses by comma, up to a maxium of 20 accounts in a single batch


[Get a list of 'Normal' Transactions By Address](https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken)
- [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results
- (Returned 'isError' values: 0=No Error, 1=Got Error)
- (Returns up to a maximum of the last 10000 transactions only)
[OR](https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken)
- (To get paginated results use page=<page number> and offset=<max records to return>)


[Get a list of 'Internal' Transactions by Address](https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&sort=asc&apikey=YourApiKeyToken)
- (Returned 'isError' values: 0=No Error, 1=Got Error)
- (Returns up to a maximum of the last 10000 transactions only)
[OR](https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=YourApiKeyToken)
- (To get paginated results use page=<page number> and offset=<max records to return>)


[Get "Internal Transactions" by Transaction Hash](https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170&apikey=YourApiKeyToken)
- (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)
- (Returns up to a maximum of the last 10000 transactions only)


[Get "Internal Transactions" by Block Range](https://api.etherscan.io/api?module=account&action=txlistinternal&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=YourApiKeyToken)
- (Returns up to a maximum of the last 10000 transactions only)
[]()
[]()


[Get a list of "ERC20 - Token Transfer Events" by Address](https://api.etherscan.io/api?module=account&action=tokentx&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken)
- [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results
- (Returns up to a maximum of the last 10000 transactions only)
[OR](https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&page=1&offset=100&sort=asc&apikey=YourApiKeyToken)
- (To get paginated results use page=<page number> and offset=<max records to return>)
[OR](https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&sort=asc&apikey=YourApiKeyToken)
- (To get transfer events for a specific token contract, include the contractaddress parameter)


[Get a list of "ERC721 - Token Transfer Events" by Address](https://api.etherscan.io/api?module=account&action=tokennfttx&address=0x6975be450864c02b4613023c2152ee0743572325&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken)
- [Optional Parameters] startblock: starting blockNo to retrieve results, endblock: ending blockNo to retrieve results
- (Returns up to a maximum of the last 10000 transactions only)
[OR](https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&page=1&offset=100&sort=asc&apikey=YourApiKeyToken)
- (To get paginated results use page=<page number> and offset=<max records to return>)
[OR](https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=0x6975be450864c02b4613023c2152ee0743572325&page=1&offset=100&sort=asc&apikey=YourApiKeyToken)
- (To get transfer events for a specific token contract, include the contractaddress parameter)


[Get list of Blocks Mined by Address](https://api.etherscan.io/api?module=account&action=getminedblocks&address=0x9dd134d14d1e65f84b706d6f205cd5b1cd03a46b&blocktype=blocks&apikey=YourApiKeyToken)
[OR](https://api.etherscan.io/api?module=account&action=getminedblocks&address=0x9dd134d14d1e65f84b706d6f205cd5b1cd03a46b&blocktype=blocks&page=1&offset=10&apikey=YourApiKeyToken)
- (To get paginated results use page=<page number> and offset=<max records to return>)
- ** type = blocks (full blocks only) or uncles (uncle blocks only)