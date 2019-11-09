'use strict';

class Something {

    constructor(helpers, errors) {
		
        this.helpers = helpers;
        this.errors = errors;

    };

    /**
     * Dummy function that will just resolve with two copies of the data given.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     *
     * @param {Object} someData
     *  Some dummy data.
     *
     * @returns {Promise}
     *  Resolves with simple code initial object reference and cloned object.
     */

    doSomething(someData) {
        return new Promise((resolve, reject) => {

			resolve({
				code: 200,
				message: "Object cloned successfully",
				object1: someData,
				object2: this.helpers.clone(someData)
			});

        });
    };

    

};

module.exports = Something;