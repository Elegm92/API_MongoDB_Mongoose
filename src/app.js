require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDB = require("./config/db_mongo");

const providersRoutes = require("./routes/providers.routes");
const productsRoutes = require("./routes/products.routes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("funciona");
});

app.use("/api/providers", providersRoutes);
app.use("/api/products", productsRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "la pagina no existe",
  });
});

connectDB();

app.listen(PORT, () =>
  console.log(`El servidor esta escuchando en http://localhost:${PORT}`)
);