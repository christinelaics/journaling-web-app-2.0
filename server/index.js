const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const entriesRouter = require("./routes/entries");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/entries", entriesRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening at http:localhost:${PORT}`));