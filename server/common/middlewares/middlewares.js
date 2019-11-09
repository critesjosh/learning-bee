class Middlewares {
    
    constructor(helpers) {
        
        this.helpers = helpers;
    }

    //===========\\
    //MIDDLEWARES\\
    //===========\\
    
    /**
     * Creates and binds a timestamp to the request
     * 
     * @return {Object} response
     */
    requestTimestamp() {
        return (req, res, next) => {        
            req.requestTimestamp = this.helpers.createTimestamp();
            next();
        };
    };
};

module.exports = Middlewares;