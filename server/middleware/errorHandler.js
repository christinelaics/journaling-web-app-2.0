
function errorHandler(err, req, res, next) {
    console.log("error:", err.message);

    if(res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong on the server. Please try again later.",
    });
}

module.exports = errorHandler;