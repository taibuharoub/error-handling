const path = require("path")

const rootDir = require("../utils/path");

exports.get404 = (req, res, next) => {
    // res.send("<h1>Page Not found</h1>")
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"), {
        pathTitle: "Page Not Found"
    })
}

exports.get500 = (req, res, next) => {
    // res.send("<h1>we're working on it sorry for the inconv!</h1>")
    res.status(500).sendFile(path.join(rootDir, "views", "500.html"));

}