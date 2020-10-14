const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ethSchema = new Schema({
  address: {
    type: String,
    required: true
  }
}, {timestamps:true});

const Ether = mongoose.model("Ether", ethSchema);
module.exports = Ether;