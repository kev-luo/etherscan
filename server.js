require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Ether = require('./models/ethSearch');
// const api = require('etherscan-api').init(process.env.etherScanKey);

const app = express();
const port = 8080;

mongoose.connect(process.env.dataBaseURI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(result => app.listen(port))
  .catch(err => console.log(err));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.json());

// route handlers ==================================================================
app.get('/', (req,res) => {
  res.render('index', {title: "New Search"})
})

app.get('/searchHistory', async (req,res) => {
  try {
    const searches = await Ether.find().sort({createdAt: 'descending'});
    res.render('searchHistory', {title: "Search History", searches})
  }
  catch (err) {
    console.log(err);
  }
});

app.get('/display/:address', async (req,res) => {
  let address = await Ether.findOne({address: req.params.address});
  if (address === null) res.redirect('/');
  let addressInfo = await ercTxns(address.address)
  res.render('display', {title: "Analytics", addressInfo})
});

app.post('/', async (req,res) => {
  try {
    let newSearch = await (new Ether(req.body)).save();
    res.redirect(`/display/${newSearch.address}`);
  }
  catch (err) {
    console.log(err);
  }
})

function ercTxns(address) {
  let queryUrl = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&sort=desc&apikey=${process.env.etherScanKey}`
  let result = axios.get(queryUrl).then(response => {
    return response.data.result;
  });
  return result;
}