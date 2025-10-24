const {v4: uuid4} = require("uuid");

let entries = [
  { id: uuid4(), title: "First Entry", content: "This is my first journal entry", createdAt: new Date(), updatedAt: new Date() },
  { id: uuid4(), title: "Second Entry", content: "Another entry for practice", createdAt: new Date(), updatedAt: new Date() }
];

module.exports = { entries };