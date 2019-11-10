const users = require('./users');
const videos = require('./videos');

module.exports = function(app, middlewares, handlers) {
	
	/**
     * Serves the API readme file.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     * 
     * @response {resource} html readme file.
     */
   
    app.get('/', (req, res) => {

        // res.sendFile(__dirname + '/readme.html');
        res.sendFile(__dirname + '/docs/index.html');

    });
	
    users(app, middlewares, handlers);
    videos(app, middlewares, handlers);
    // Other route groups could go here, in the future
};