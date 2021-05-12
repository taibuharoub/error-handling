const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

const adminRoutes = require("./routes/admin");
const errorControllers = require("./controllers/error")
const rootDir = require("./utils/path");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

if (process.env.NODE_ENV === "development") {
  // throw new Error("Sync Dummy"); //use for snyc code
  app.use(morgan("dev"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);

app.get("/500", errorControllers.get500);
app.use(errorControllers.get404);

app.use((error, req, res, next) => {
    res.status(500).sendFile(path.join(rootDir, "views", "500.html"));
})

app.listen(PORT, () => {
  console.log(
    `Server Started in ${process.env.NODE_ENV} at http://localhost:${PORT}`
      .yellow.bold
  );
});
