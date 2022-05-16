const Comment = require('../models/comment');
module.exports = (app, Comment) => {
  // NEW Comment
  app.post('/posts/comments', (req, res) => {
    const comment = new Comment(req.body);
    comment.save()
      .then(() => {
        res.redirect(`/posts/${comment.postId}`)
      }).catch(err => {
        console.log(err.message);
        res.status(400).send("Error saving comment");
      })
  })
}