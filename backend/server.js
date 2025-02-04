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
const app = express();
// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Carga los certificados
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

app.use(
  "/",
  authRoutes,
  profileRoutes,
  newsRoutes,
  transparencyRoutes,
  tourismRoutes,
  sevacRoutes,
  planningRoutes,
  resourcesRoutes
);

connectDB();

https.createServer(options, app).listen(9000, () => {
  console.log("Servidor HTTPS ejecutándose en el puerto 9000");
});
