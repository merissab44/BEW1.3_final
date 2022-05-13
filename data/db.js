const mongoose = require('mongoose');
assert = require('assert');

const url = process.env.DB_URL;
mongoose.connect(
  url,
  {
    useNewUrlParser: true
  },
  function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to database');

    // db.close(); 
  }
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

module.exports = mongoose.connection;