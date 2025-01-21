const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const cors = require("cors");
const connectDB = require("./db/db");
const port = process.env.PORT || 9000;
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const newsRoutes = require("./routes/newsRoutes");
const transparencyRoutes = require("./routes/transparencyRoutes");
const tourismRoutes = require("./routes/tourismRoutes");
const app = express();
// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/",
  authRoutes,
  profileRoutes,
  newsRoutes,
  transparencyRoutes,
  tourismRoutes
);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
