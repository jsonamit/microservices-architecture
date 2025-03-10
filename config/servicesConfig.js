module.exports = [
    { name: "Auth Service", start: require("../services/auth-service/server"), port: process.env.AUTH_SERVER_PORT },
    { name: "Order Service", start: require("../services/order-service/server"), port: process.env.ORDER_SERVER_PORT },
];
  