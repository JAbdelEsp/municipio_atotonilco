const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const https = require("https");
const fs = require("fs");
dotenv.config();
const cors = require("cors");
const connectDB = require("./db/db");
const port = process.env.PORT || 9000;
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const newsRoutes = require("./routes/newsRoutes");
const transparencyRoutes = require("./routes/transparencyRoutes");
const tourismRoutes = require("./routes/tourismRoutes");
const sevacRoutes = require("./routes/sevacRoutes");
const planningRoutes = require("./routes/planningRoutes");
const resourcesRoutes = require("./routes/resourcesRoutes");
const proceduresRoutes = require("./routes/proceduresRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const comptrallorRoutes = require("./routes/contraloriaRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const app = express();
// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Carga los certificados
app.use(
  "/",
  authRoutes,
  profileRoutes,
  newsRoutes,
  transparencyRoutes,
  tourismRoutes,
  sevacRoutes,
  planningRoutes,
  resourcesRoutes,
  proceduresRoutes,
  subscribeRoutes,
  comptrallorRoutes,
  bannerRoutes
);

connectDB();

app.listen(9000, "127.0.0.1", () => {
  console.log("Server running on port 9000");
});
