'use strict';

class Something {

    constructor(helpers, models, errors) {
		
        this.helpers = helpers;
        this.models = models;
        this.errors = errors;

    };

    /**
     * Dummy function that will just resolve with two copies of the data given.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2018 Caliber Communications
     *
     * @param {Object} someData
     *  Some dummy data.
     *
     * @returns {Promise}
     *  Resolves with simple code initial object reference and cloned object.
     */

    login(email, password) {
        return new Promise((resolve, reject) => {

			this.models.users.login(email, password).then(response => {
				
				if (response === null) {
					reject({
						code: 403,
						message: "Incorrect login credentials"
					});
				} else {
					
					//TO DO: Make token generation properly
					response.token = "da8g21qd1pdh10d";
					
					resolve({
						user: response,
						code: 200,
						message: "Login successful"
					});
				}
				
			}).catch(error => {
				
				reject(error);
			})
        });
    };
};

module.exports = Something;