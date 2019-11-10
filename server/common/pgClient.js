'use strict';
//This class is a NodeJS wrapper for the postgres client
//Reference api can be found at: https://github.com/vitaly-t/pg-promise

//To use this class add the snippet below to the api.js file.
//Add the env variables PG_DB_HOST, PG_DB_NAME, PG_DB_PORT, PG_DB_USERNAME and PG_DB_PASSWORD to your .env and .env.example files
//run the command 'npm install --save pg-promise'
//The pgClient.connection object will now have access to using any of the methods any, none, etc to run queries.
/* START
    //Create our postgres client
    const Pg = require('./common/mysqlClient');
    const pgConnectionConfig = {
        host: process.lb_server_env.database.host,
        database: process.lb_server_env.database.name,
        port: process.lb_server_env.database.port,
        user: process.lb_server_env.database.username,
        password: process.lb_server_env.database.password
    };
    const pgClient = new Pg(pgConnectionConfig);
END */

class pgClient {

    constructor( config ) {

        //Load our postgres client
        const pgInitOptions = {
            // global event notification;
            error: (error, e) => {
                if (e.cn) {
                    // A connection-related error;
                    //
                    // Connections are reported back with the password hashed,
                    // for safe errors logging, without exposing passwords.
                    console.log('CN:', e.cn);
                    console.log('EVENT:', (error.message || error));

                    //If connection has timed out or was refused restart the connection
                    //This can occur if our database server goes down
                    if (error.code === "ETIMEDOUT" || error.code === "ECONNREFUSED") {
                        pg.end();
                        this.connection = pg(config);
                    }
                }
            }
        };

        const pg = require( 'pg-promise' )(pgInitOptions);

        this.connection = pg(config);
    }
}

module.exports = pgClient;