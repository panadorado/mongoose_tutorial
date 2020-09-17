// Directory
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/DiemAnNgon', { useNewUrlParser:true, useUnifiedTopology:true });

// Create Schema
const userSchema = new mongoose.Schema({
    username: String,
    displayname: String,
    email: String,
    password: String,
    image: String
});

// create model 
const documents = mongoose.model('user', userSchema);

// display all documents
documents.find().exec((err, users) => {
    if (err) { console.log(err) }
    else { console.log(users) }
});