const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  title: String,
  url: String,
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Image", ImageSchema)