'use strict';

class Helpers {
    
    constructor() {}
    
    /**
     * Used to keep track of failed promises in concurrent calls
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     * 
     * @param {promise} promise
     * 	Request promise tp track
     *
     * @return {promise} response will now always "resolve"
     */

    reflect(promise) {
        return promise.then(
                v => { return {value:v, resolved: true };},
                e => { return {value:e, resolved: false };}
        );
    };
    
    /**
     * Create a universal timestamp for our archived file names.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     * 
     * @return {object}
     *  Object with keys object and string, which hold the date used 
     *  to create the timestamp.
     */
    
    createTimestamp() {
        
        let date =  new Date();
        let dateString = "" + date.getUTCFullYear() +
            this.pad(date.getUTCMonth() + 1) +
            this.pad(date.getUTCDate()) +
            this.pad(date.getUTCHours()) +
            this.pad(date.getUTCMinutes()) +
            this.pad(date.getUTCSeconds()) +
            (date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5);
        
        return {object: date, string: dateString};
        
    };
    
    /**
     * Prepend a 0 if the number is only one character. This is so that we maintain
     * The same string length for months, days, minutes and seconds.
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     * 
     * @param {string} number
     * 	Number to pad.
     *
     * @return {string} Padded string with length two.
     */
    
    pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    };
	
	/*
     * Deep copy a javascript object
     *
     * @author: Arsham Eslami (arshameslami@gmail.com)
     * @copyright 2019 Learning Bee
     *
     * @param {Mixed} obj
     * 	Object to clone.
     *
     * @return {Mixed} The clone of the object.
     */

    clone(obj) {
        let copy;

        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (let i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    };
};

module.exports = Helpers;