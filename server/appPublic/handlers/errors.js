'use strict';

class Errors {

    constructor() {};

    /**
     * Parse general errors.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     *
     * @param {error} error
     * 	Express error response to parse.
     *
     * @return {object} 
	 *	Standardized error object, with keys message, logableError, and code.
     */

    general(error) {

        //Check if error is created by our API
        //If so no further processing is required just return it
        if (error.logableError !== undefined) return error;

        let errorReturn = {
            code: 400,
            message: null,
            logableError: null
        };

        //Set of conditions to identify different types of bugs
        if (error.code === 21614) {

            errorReturn.message = error.message + " More info link: " + error.moreInfo;
            errorReturn.logableError = errorReturn.message;
            errorReturn.code = 403;

        } else if (error.code === 21212 || error.code === 21211) {

            errorReturn.message = "Some custom useful error message.";
            errorReturn.logableError = "In this case we want to log something different.";
            errorReturn.code = 406;

        } else {

            //Sample undocumented error handler

            console.error(error);
			errorReturn.message = "Undocumented error. Check error logs for full error message.";
			errorReturn.logableError = errorReturn.message;

        }

        return errorReturn;

    };

};

module.exports = Errors;