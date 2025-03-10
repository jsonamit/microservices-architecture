require("dotenv").config();
// require('./connection/mongo.connection');
const bodyParser = require('body-parser')
const express = require("express");

const app = express();
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const expressRouter = express.Router();
const authRoutes = require('./routes/index')(expressRouter);
app.use("/auth",authRoutes);

const startAuthService = () => {
    app.listen(process.env.AUTH_SERVER_PORT, () => console.log(`Auth Service running on port ${process.env.AUTH_SERVER_PORT}`));
};

module.exports = startAuthService;
