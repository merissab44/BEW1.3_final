const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'Post' }
});

module.exports = model('Comment', commentSchema);