const mongoose = require('mongoose');

const connectdb = async function () {
    await mongoose.connect('mongodb+srv://basitabdul27358:xolit@ab27@cluster0.4dpqbyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
       useNewUrlParser: true
    }).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log('cant connect database Error : ' + error);
    });
}

module.exports = connectdb;