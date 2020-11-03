const mongoose = require("mongoose");

const connectionURI = "mongodb://127.0.0.1:27017/Interview_prep";

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});