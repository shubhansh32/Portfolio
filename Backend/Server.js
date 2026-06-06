const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./Config/db");

dotenv.config();

connectDb();

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api", require("./Routes/contactRoutes"));
app.use("/image",require("./Routes/imageRoutes"));

const PORT = process.env.PORT || 5050;
console.log("MY SERVER FILE IS RUNNING");

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/hello", (req, res) => {
  res.send("HELLO WORKING");
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});