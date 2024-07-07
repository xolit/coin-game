const mongoose = require('mongoose');

const connectdb = async function () {
    await mongoose.connect(process.env.MONGO_LOCAL_URL, {
       useNewUrlParser: true
    }).then(() => {
        console.log('database connected');
    }).catch((error) => {
        console.log('cant connect database Error : ' + error);
    });
}

module.exports = connectdb;