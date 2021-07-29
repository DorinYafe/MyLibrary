const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        resuired: true,
    },
    isBorrowed: {
        type: Boolean,
    },
    borrower: {
        type: String,
    },
});

module.exports = Book = mongoose.model('book', BookSchema);