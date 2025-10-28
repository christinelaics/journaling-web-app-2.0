const mongoose = require("mongoose");

// define mongoose schema
const entrySchema = new mongoose.Schema(
  { title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    mood: {
      type: String,
      enum: ["happy", "sad", "neutral", "angry", "excited", "other"],
      default: "neutral",
    },
  },
  { timestamps: true }
);

// create model
const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;