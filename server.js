require("dotenv").config();
const express = require('express');
const ercFxns = require('./public/erc_fxns.js');
// const api = require('etherscan-api').init(process.env.etherScanKey);

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.json());

// route handlers ==================================================================
app.get('/', (req,res) => {
  res.render('index', {title: "New Search"})
})

app.get('/searchHistory', async (req,res) => {
  try {
    let searches = await ercFxns.getAddresses();
    res.render('searchHistory', {title: "Search History",searches})
  }
  catch (err) {
    console.log(err);
  }
});

app.get('/display/:address', async (req,res) => {
  // let addressInfo = await ercTxns(address.address)
  res.render('display', {title: "Analytics", addressInfo})
});

app.post('/', async (req,res) => {
  try {
    let address = req.body.address;
    let sqlRes = await ercFxns.addAddress(address);
    console.log(sqlRes);
    res.redirect('/searchHistory');
  }
  catch (err) {
    console.log(err);
  }
})

app.listen(port)