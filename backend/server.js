const express = require("express");
const dotenv = require("dotenv");
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
