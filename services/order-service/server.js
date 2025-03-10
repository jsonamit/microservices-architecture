require("dotenv").config();
// require('./connection/mongo.connection');
const express = require("express");

const app = express();
app.use(express.json());

const expressRouter = express.Router();
const orderRoutes = require('./routes/index')(expressRouter);
app.use('/order',orderRoutes);

const startOrderService = () => {
    app.listen(process.env.ORDER_SERVER_PORT, () => console.log(`Order Service running on port ${process.env.ORDER_SERVER_PORT}`));
};

module.exports = startOrderService;
