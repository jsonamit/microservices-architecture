require("dotenv").config();
const servicesConfig = require("./config/servicesConfig");
const {middleware} = require('./middleware/middleware');


const express = require("express");
const app = express();

app.use(middleware);

console.log("Starting all microservices...");

const startService = (service) => {
  try {
    service.start();
  } catch (error) {
    console.error(`Failed to start ${service.name}:`, error);
  }
};

// Start each service
servicesConfig.forEach(startService);

// Graceful shutdown handling
process.on("SIGINT", () => {
  console.log("\nShutting down all microservices...");
  process.exit();
});
