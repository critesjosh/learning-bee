'use strict';

module.exports = function(app, middlewares, handlers) {
	
	//=========\\
    // GENERAL \\
    //=========\\

    /**
     * Login route. Should return a persistent token for client to store.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2018 Caliber Communications
     *
     * @request body:{String} email
     * 	User email address to attempt to login with.
	 * @request body:{String} password
     * 	User password to attempt to login with.
     *
     * @response {String} message
     *	Short message on what happened during the request.
	 * @response {Boolean} success
     *	If the request was fully processed.
	 * @response {Object} user
     *	User object found with supplied login credentials.
     */

    app.post('/login', (req, res) => {

        let responseObject = {};
		
		const 
			email = req.body.email,
			password = req.body.password

        handlers.user.login(email, password).then(handlerResponse => {

            responseObject = handlerResponse;
            responseObject.success = true;

            global.publicLoggerSystem.info("POST /login fetched with response:");
            global.publicLoggerSystem.info(responseObject);

            return responseObject;

        }).catch(error => {

            global.publicLoggerSystem.error("POST /login failed with error:");
            global.publicLoggerSystem.error(error.logableError || error.message);

            responseObject.success = false;
            responseObject.message = error.message;
            responseObject.code = error.code;

            return responseObject;

        }).then(processedResponseObject => {

            res.status(processedResponseObject.code).send(processedResponseObject);
        });

    });
};