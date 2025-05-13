const mongoose = require('mongoose');
const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/studentList', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully')

    } catch (error) {
        console.log(`error ${error}`);
        process.exit(1);
    }
}

module.exports = mongoDB;