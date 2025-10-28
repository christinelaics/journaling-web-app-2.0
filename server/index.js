require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db");
const entriesRouter = require("./routes/entries");

const app = express();

// MongoDB connection
connectDB(); // connect to mongodb

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/entries", entriesRouter);

// 404 Fallback
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    next(error);
});

// Error Handler (global)
app.use(errorHandler);

// Server start 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening at http:localhost:${PORT}`));