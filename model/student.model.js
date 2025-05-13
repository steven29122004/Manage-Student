const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    sid: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('StudentEntity', StudentSchema, 'student');