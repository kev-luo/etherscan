const mysql = require('mysql');
const axios = require('axios');
require('dotenv').config();

const db = mysql.createPool({
  connectionLimit: 10,
  host:'localhost',
  port:3306,
  user:'root',
  password:process.env.mysqlP,
  database:'etherscan_db'
})

function addAddress(address) {
  return new Promise((resolve, reject) => {
    let queryString = `INSERT IGNORE INTO addresses SET ?`;
    let newData = {address:`${address}`, blockchain:`ethereum`}
    db.query(queryString, newData, (err,res) => {
      if (err) reject(err);
      resolve("address added");
    })
  })
}

function getAddresses() {
  return new Promise((resolve, reject) => {
    let queryString = `SELECT * FROM addresses`;
    db.query(queryString, (err,res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res)
      }
    });
  })
}

function ercTxns(address) { // erc-20 token transfer events
  let queryUrl = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&sort=desc&apikey=${process.env.etherScanKey}`
  let result = axios.get(queryUrl).then(response => {
    
    let res = response.data.result;
    
    let newData = res.map(res => {
      return [res.blockNumber, res.timeStamp, res.hash, res.nonce, res.blockHash, res.from, res.contractAddress, res.to, res.value, res.tokenName, res.tokenSymbol, res.tokenDecimal, res.transactionIndex, res.gas, res.gasPrice, res.gasUsed, res.cumulativeGasUsed, res.input, res.confirmations]
    })

    let queryString = `INSERT INTO erc20_tkn_tf_evt (block_number, time_stamp, hash, nonce, block_hash, from_address, contract_address, to_address, value, tkn_name, tkn_symbol, tkn_decimal, txn_index, gas, gas_price, gas_used, cum_gas_used, input, confirmations) VALUES ?`

    db.query(queryString, [newData], (err,res) => {
      if (err) throw err;
      console.log('data added');
    })

    return response.data.result;
  });
  return result;
}

module.exports = {addAddress, getAddresses, ercTxns}