'use strict';

module.exports = function(app, middlewares, handlers) {
	
	//=========\\
    // GENERAL \\
    //=========\\

    app.post('/pay', (req, res) => {

        let responseObject = {};
		
		const 
			address = req.body.address,
			amount = req.body.amount

        handlers.user.pay(address, amount).then(handlerResponse => {

            responseObject = handlerResponse;
            responseObject.success = true;

            global.publicLoggerSystem.info("POST /pay fetched with response:");
            global.publicLoggerSystem.info(responseObject);

            return responseObject;

        }).catch(error => {

            global.publicLoggerSystem.error("POST /pay failed with error:");
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