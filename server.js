require('dotenv').config();
require('./data/db');
const express = require('express')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser');
const Post = require('./models/post');
const Comment = require('./models/comment');
const app = express()

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

// app.js

require('./controllers/posts')(app, Post);
require('./controllers/auth')(app);
require('./controllers/comments')(app, Comment);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('App listening on port 3000!')
}); 

module.exports = app;