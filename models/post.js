const { Schema, model } = require('mongoose');
const Comment = require('../models/comment');

const postSchema = new Schema({
  title: { type: String, required: true },
  restaurantName: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  favoriteScore: { type: Number, default: 0 },
  description: { type: String, required: true }
});

module.exports = model('Post', postSchema);