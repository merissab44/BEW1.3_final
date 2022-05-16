const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = function(app, Post) {

  app.get('/posts-index', (req, res) => {

    const currentUser = req.user;
    Post.find().lean().then((post) => {
    res.render('posts-show', { post: post, currentUser})
    }).catch((err) => {
      console.log(err.message);
    })
  });
  // CREATE
app.post('/posts', (req, res) => {
  // create a new review
  const Posts = new Post(req.body);
  // save it to the database
  Posts.save()
    .then(() => {
      // then redirect to the root route
      res.redirect(`/posts/${Posts._id}`)
    }).catch(err => {
      console.log(err.message);
      res.status(400).send("Error saving review");
    })
})
// SHOW 
app.get('/posts', (req, res) => {
 Post.find().lean().then((post) => {
    // console.log(review)
    res.render('posts-show', { post: post })
  }).catch((err) => {
    console.log(err.message);
  })
})
// NEW
app.get('/posts/new', (req, res) => {
  res.render('posts-new', {title: 'New Post'});
})
// EDIT
app.get('/posts/:id/edit', (req, res) => {
  Post.findById(req.params.id).lean().then((post) => {
    res.render('posts-edit', { post: post, title: 'Edit Post' })
  }).catch((err) => {
    console.log(err.message);
  })
})
// UPDATE
app.put('/posts/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => {
      res.redirect(`/posts/${posts._id}`)
    })
    .catch(err => {
      console.log(err.message)
    })
})
// SHOW EDITED REVIEW
app.get('/posts/:id', (req, res) => {
  Post.find().lean().then((post) => {
    // fetch comments for this review
  Comment.find({ postId: req.params.id }).lean().then((comments) => {
  res.render('posts-show', { post: post, comments:comments })
  })
}).catch((err) => {
    console.log(err.message);
  })
})
// DELETE
  app.delete('/posts/:id', function (req, res) {
    console.log('delete post')
    Post.findByIdAndRemove(req.params.id).then((post) => {
      res.redirect('/posts-show');
    }).catch((err) => {
      console.log(err.message);
    })
  })

}