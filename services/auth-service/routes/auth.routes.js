
const controller = require('../controllers/auth.controller');

module.exports = (app) => { 
    app.get('/login',controller.login);
    app.get('/signup',controller.signup);
}