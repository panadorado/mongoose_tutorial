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

// updateOne documnets
// documents.updateOne( { <filter {key:'value'}>, { $set: <update{ key: 'value' }> } }
documents.updateOne(
    // filter
    { username: 'vienjokve' },
    
    // update key
    { 
        $set: 
        { 
            username: 'vienjoke' 
        }
    })

// report the status of success or error
.then(()=>{
    console.log('Update success 1 docunments !');
})
.catch((err)=>{
    console.log(err);
})