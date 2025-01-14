const mongoose = require('mongoose')
const database_name = 'retinopathy' //database name
const mongoURL = `mongodb+srv://<username>:<password>@diabeticretinpathy.wn2vpbi.mongodb.net/${database_name}?retryWrites=true&w=majority`
//replace <username> and <password>


const connectTOMongo = async() =>{
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectTOMongo;
