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

// delete 1 documents
// documents.deleteOne( { key: "value" } )
documents.deleteOne({username:'cxvien'})
// report the status success or error
.then(()=> { console.log('Removed 1 document') })
.catch((err) => {console.log(err)});