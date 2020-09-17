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

// update like updateOne documnets
documents.update(
    {
        username: 'vienjoke',
    },
    {
        $set:
        {
            username: 'cxvien'
        }
    })
.then(()=>{
    console.log('Update success 1 docunments !');
}).catch((err)=>{
    console.log(err);
})