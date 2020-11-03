const Book = require("../models/Book");
const express = require("express");
const router = new express.Router();
const auth = require("../Middleware/auth");

/** Endpoint for adding books */
router.post("/book", auth, async (req, res) => {
  try {
    const book = new Book({
      ...req.body
    });

    // Enter book in the db
    await book.save();

    res.status(201).send({ book });
  } catch (e) {
    res.status(400).send(e);
  }
});

/**  */


module.exports = router;