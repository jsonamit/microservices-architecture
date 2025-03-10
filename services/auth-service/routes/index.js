
module.exports = (app) => {
    require('./auth.routes')(app);

    return app;
}