const users = require('./users');

module.exports = function(app, middlewares, handlers) {
	
	/**
     * Serves the API readme file.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2018 Caliber Communications
     * 
     * @response {resource} html readme file.
     */
   
    app.get('/', (req, res) => {

        res.sendFile(__dirname + '/readme.html');

    });
	
    users(app, middlewares, handlers);
    // Other route groups could go here, in the future
};