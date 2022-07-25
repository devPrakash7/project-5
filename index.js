const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const mongoose = require("mongoose");


app.use(express.json());
app.use(require("./routes/routes"));



mongoose
  .connect("mongodb+srv://mepsbisht:india1124@cluster0.wl58p.mongodb.net/Group39?retryWrites=true&w=majority", {

    useNewUrlParser: true,

  })

  .then(() => {
    console.log("connection sucessfully");
  })

  .catch((err) => {

    console.log("no connection");
  });


  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
