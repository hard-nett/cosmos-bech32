let { assets, chains, ibc } = require('chain-registry') 
let { bech32 } = require('bech32') 
let decode = bech32.decode('bcna13jawsn574rf3f0u5rhu7e8n6sayx5gkwgusz73')

let addrArray = []
for (const key in chains) {
  addrArray.push([
    chains[key].chain_name, 
    bech32.encode(chains[key].bech32_prefix, decode.words)
  ])
} 

console.table(addrArray)
