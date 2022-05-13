module.exports = (app, Comment) => {
  // NEW Comment
  app.post('/posts/comments', (req, res) => {

      Comment.create(req.body).then((comment) => {
        console.log(comment)
        res.redirect(`/posts/${comment.postId}`);
      }).catch((err) => {
        console.log(err.message);
      });
    });

}