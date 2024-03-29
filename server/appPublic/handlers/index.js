class Handlers {

    constructor(helpers, models) {

        //Core
        this.helpers = helpers;
        this.models = models;

        //extra controllers
        this.errors = new (require('./errors.js'))();
		this.user = new (require('./user.js'))(this.helpers, this.models, this.errors);
		this.video = new (require('./video.js'))(this.helpers, this.models, this.errors);
		this.course = new (require('./course.js'))(this.helpers, this.models, this.errors);

    }
}

module.exports = Handlers;