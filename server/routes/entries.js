const express = require("express");
const router = express.Router();
const { entries } = require("../data/sampleEntries");
const {v4: uuid4} = require("uuid");

// GET all entries
router.get("/", (req, res) => {
    res.json(entries);
});

// GET single entry
router.get("/:id", (req,res) => {
    const entry = entry.find(n => n.id === req.params.id);
    if(!entry) return res.status(404).json({error: "Entry not found"});
    res.json(entry)
})

// POST new entry
router.post("/", (req, res) => {
    const {title, content} = req.body;
    if (!title || !content) return res.status(400).json({error: "title and content are required"});
    const newEntry = {id: uuid4(), title: title, content:content, createdAt: new Date(), updatedAt: new Date()};
    entries.push(newEntry);
    res.status(201).json(newEntry);
});


module.exports = router;