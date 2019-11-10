'use strict';

module.exports = function(app, middlewares, handlers) {
	
	//=========\\
    // GENERAL \\
    //=========\\

    app.get('/videos', (req, res) => {

        let responseObject = {};
		
        handlers.video.getAll().then(handlerResponse => {

            responseObject = handlerResponse;
            responseObject.success = true;

            global.publicLoggerSystem.info("GET /videos fetched with response:");
            global.publicLoggerSystem.info(responseObject);

            return responseObject;

        }).catch(error => {

            global.publicLoggerSystem.error("GET /videos failed with error:");
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