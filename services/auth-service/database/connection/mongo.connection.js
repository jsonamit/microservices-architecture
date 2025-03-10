require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Auth Service DB Connected"))
  .catch(err => console.error("Auth Service DB Connection Failed:", err));