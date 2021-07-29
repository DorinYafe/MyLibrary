const express = require('express');
const router = express.Router();
const { check, validationResult, } = require('express-validator');

const Book = require('../../models/Book');

// @route   Post api/books
// @desc    Add book
// @access  Public
router.post('/',
    [
        check('title', 'Title is required')
            .not()
            .isEmpty(),
        check('author', 'Author name is required')
            .not()
            .isEmpty(),
        check('language', 'Language is required')
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, author, language, isBorrowed, borrower, } = req.body;

        try {
            let book = await Book.findOne({ title });
            if (book) {
                return res.status(400).json({ errors: [{ msg: 'Book already exists' }] });
            }

            book = new Book({
                title,
                author,
                language,
                isBorrowed,
                borrower,
            });

            await book.save();

            res.json(book);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;