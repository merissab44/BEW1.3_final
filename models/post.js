const { Schema, model } = require('mongoose');
const Comment = require('../models/comment');

const postSchema = new Schema({
  title: { type: String, required: true },
  restaurantName: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = model('Post', postSchema);