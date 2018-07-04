/*
 * Gartox 03-07-2018
 */

//Implementation eosjs

const Eos = require('eosjs')
 
// Default configuration (additional options below)
const config = {
  chainId:            null, // 32 byte (64 char) hex string
  keyProvider:        ['PrivateKeys...'], // WIF string or array of keys..
  httpEndpoint:       'http://127.0.0.1:8888',
  expireInSeconds:    60,
  broadcast:          true,
  verbose:            true, // API activity
  sign:               true
}
 
var eos = Eos(config);

eos.getInfo({})
  .then( ( res ) => {
      //print on the terminal the result
      console.log( res );
  });