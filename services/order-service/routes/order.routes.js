const controller = require('../controllers/order.controller');

module.exports = (app) => { 
    app.get('/saveOrder',controller.saveOrder);
}