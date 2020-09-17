// tạo 1 biến và khao báo thư viện mongoose để sử dụng
const mongoose = require('mongoose');

// Kết nối đến MongoDB Database
mongoose.connect('mongodb://localhost/DiemAnNgon', { useNewUrlParser: true, useUnifiedTopology:true });

// Khởi tạo 1 Schema với các kiểu dữ liệu sau
const userSchema = new mongoose.Schema({
    username: String,
    displayname: String,
    email: String,
    password: String,
    image: String
});

// khởi tạo mô hình theo { key : 'value' } 
// với Schema đã được định dang trước đó.
const documents = mongoose.model('user', userSchema);

documents.create([
    // thêm vào một mảng documents vs các { key: 'value' }
    {
        username: 'panadora',
        displayname: 'Pham Quoc Cuong',
        email: 'panadora@gmail.com',
        password: '123456',
        image: 'image/panadora.jpg'
    },
    {
        username: 'devlinh',
        displayname: 'Tran Duc Linh',
        email: 'devlinh@gmail.com',
        password: '123456',
        image: 'image/devlinh.jpg'
    },
    {
        username: 'jokevien',
        displayname: 'Cao Xuan Vien',
        email: 'jokevien@gmail.com',
        password: '123456',
        image: 'image/jokevien.jpg'
    }

// report the status of success or error
]).then(()=> {
    console.log('Inserted array document');
}).catch((err)=> {
    console.log(err);
});