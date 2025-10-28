const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");


// CHECK health of API
router.get("/health", (req, res) => {
    res.json({status: "ok", time: new Date().toISOString()});
})

// GET all entries
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 }); // sort newest first
    res.json(entries);
  } catch (err) {
    next(err);
  }
});

// GET single entry
router.get("/:id", async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) {
        const error = new Error("Entry not found");
        error.statusCode = 404;
        next(error);
    }
    res.json(entry);
  } catch (err) {
    next(err);
  }
  //   const entry = entries.find((e) => e.id === req.params.id);
  //   if (!entry) return res.status(404).json({ error: "Entry not found" });
  //   res.json(entry);
});

// POST new entry
router.post("/", async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    next(err);
  }

  //   const { title, content } = req.body;
  //   if (!title || !content)
  //     return res.status(400).json({ error: "title and content are required" });
  //   const newEntry = {
  //     id: uuid4(),
  //     title: title,
  //     content: content,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };
  //   entries.push(newEntry);
  //   res.status(201).json(newEntry);
});

// PUT (update) existing entry
router.put("/:id", async (req, res) => {
  try {
    const updated = await Entry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      const error = new Error("Entry not found");
      error.statusCode = 404;
      return next(error);
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }

  //   const entry = entries.find((e) => e.id === req.params.id);
  //   if (!entry) return res.status(404).json({ error: "Entry not found" });
  //   const { title, content } = req.body;
  //   if (title) entry.title = title;
  //   if (content) entry.content = content;
  //   entry.updatedAt = new Date();
  //   res.json(entry);
});

// DELETE existing entry
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Entry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      const error = new Error("Entry not found");
      error.statusCode = 404;
      return next(error);
    }
    res.json({ message: `deleted: ${deleted[0]}` });
  } catch (err) {
    next(err);
  }
  //   const index = entries.findIndex((e) => e.id === req.params.id);
  //   if (index === -1) return res.status(404).json({ error: "Entry not found" });
  //   const deleted = entries.splice(index, 1);
  //   res.json(deleted[0]);
});

module.exports = router;
