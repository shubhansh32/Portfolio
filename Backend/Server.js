const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./Config/db");

dotenv.config();

connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./Routes/contactRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});