require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Order Service DB Connected"))
  .catch(err => console.error("Order Service DB Connection Failed:", err));