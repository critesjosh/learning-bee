'use strict';

module.exports = function(app, middlewares, handlers) {
	
	//=========\\
    // GENERAL \\
    //=========\\

    app.get('/courses', (req, res) => {

        let responseObject = {};
		
        handlers.course.getAll().then(handlerResponse => {

            responseObject = handlerResponse;
            responseObject.success = true;

            global.publicLoggerSystem.info("GET /courses fetched with response:");
            global.publicLoggerSystem.info(responseObject);

            return responseObject;

        }).catch(error => {

            global.publicLoggerSystem.error("GET /courses failed with error:");
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