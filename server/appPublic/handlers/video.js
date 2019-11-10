'use strict';

class Video {

    constructor(helpers, models, errors) {
		
        this.helpers = helpers;
        this.models = models;
        this.errors = errors;

    };

    getAll() {
        return new Promise((resolve, reject) => {
            this.models.videos.getAll().then(response => {
                resolve({
                    data: response,
                    code: 200,
                    message: "Request successful"
                });
            }).catch(reject)
        });
    }
};

module.exports = Video;