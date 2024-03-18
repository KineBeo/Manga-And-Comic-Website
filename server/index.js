const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// use express.json() to get data into json format
app.use(express.json());
// PORT
const PORT = process.env.PORT || 5000;

// import routes
const itemRoute = require("./routes/item");
// Connect with mongodb
// Create database on mongodb website and get the connection string

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.use('/', itemRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
