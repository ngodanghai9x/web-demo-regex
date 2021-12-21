var sha256 = require('js-sha256').sha256;
var sha224 = require('js-sha256').sha224;

var SHA256 = require("crypto-js/sha256");

var hash = sha256.hmac.create('key');
hash.update('Message to hash');
var value1 = hash.hex();

var value2 = sha256('Message to hash');
var value2a = SHA256('Message to hash');
var value3 = sha256.hmac('key', 'Message to hash');

console.log("🚀 ~ file: testSHA.js ~ line 6 ~ hash", {
  value1,
  value3,
  value2,
  value2a,
  value2a1: value2a.toString()
})