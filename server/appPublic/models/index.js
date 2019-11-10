'use strict';
const Sequelize = require('sequelize');

class Models {

    constructor(helpers) {

        //Connection to database for Sequelize to use. Uses info in .env file
        this.helpers = helpers;
        this.sequelize = new Sequelize(process.lb_server_env.database.name, process.lb_server_env.database.username, process.lb_server_env.database.password, {
            dialect: 'postgres',
            host: process.lb_server_env.database.host,
            port: process.lb_server_env.database.port,
            operatorsAliases: false,
            define: {
                timestamps: false  // I don't want timestamp fields by default
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            logging: false   // Removes every SQL query being displayed as a log when they are executed in models
        });

        /**
         * TODO: When service is not ready yet do not allow model calls. This will limit our on server startup jobs.
         */
        this.sequelize.authenticate().then(() => {

            // All database table definitions exported by this file
            this.definitions = new (require('./definitions'))(this.helpers, this.sequelize);

            /** 
			 * Model classes: using the table definitions these files declare the relationships between models and
			 * structure how the data is displayed.
			 */
            this.users = new (require('./users.js'))(this.helpers, this.sequelize, this.definitions);
            this.videos = new (require('./videos.js'))(this.helpers, this.sequelize, this.definitions);

            return this.sequelize.sync();

        }).then(() => {

            console.log("Models ready");

        }).catch(error => {

            console.error("Sequelize error:");
            console.error(error);
            process.exit(1);

        });
    }

}

module.exports = Models;