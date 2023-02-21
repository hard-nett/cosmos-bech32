import {bech32} from 'bech32'

const terpAddrs = [ 
    "terp1...",

  ]
  
  terpAddrs.forEach(function(addr){
    let decode = bech32.decode(addr)
    let junoAddr = bech32.encode('juno', decode.words)  
    console.log(junoAddr)
  })