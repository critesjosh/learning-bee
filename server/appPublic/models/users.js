'use strict';
const Sequelize = require('sequelize');

/**
 * CloudDj user model function definitions.
 *
 * @author: Arsham Eslami (arshameslami@gmail.com)
 * @copyright 2018 Caliber Communications
 */
class Users {

    constructor(helpers, sequelize, definitions) {

        this.helpers = helpers;
        this.sequelize = sequelize;
        this.definitions = definitions;
		
    };

	login(email, password) {
		return new Promise((resolve, reject) => {
			
			const userSearchObject = {
				attributes: ['id', 'name', 'details'],
				where: {
					email: email,
					password_: password
				}
			}
			
			this.definitions.User.findOne(userSearchObject).then(response => {
				
				resolve(response);
				
			}).catch(error => {
				
				reject(error);
				
			})
		});
	}
	
    /**
     * Defines how the joined model will be structured based on the associations declared and then returns the cleaned up array of data.
     * This data returned is the response object in the route file
     * @returns {Promise} for a user
     */
    getAll() {

        return new Promise((resolve, reject) => {

            /**
             *  Structures the data. The User is the first model included and nested inside is the Office model,
             *  the Role model, and inside of that the Department model.
             * @type {{include: *[], order: *[]}} the models included in the promise and what the data is sorted by
             */

            const userModelSearchObject = {
                include: [
                    {
                        model: this.definitions.UserRole,
                        include: [
                            {
                                model: this.definitions.UserDepartment
                            }
                        ]
                    },
                    {
                        model: this.definitions.Office
                    }
                ],
                order: [
                    ['id']
                ]
            };

            /**
             * Main User model finds all users in the database. In the parameters, the object defining what other models
             * are apart of the main User model is passed through, so the model's dataValue is properly structured.
             */

            this.definitions.User.findAll(userModelSearchObject).then(users => {

                /**
                 * A new constant resObj is declared where only specific attributes are mapped from the model.
                 */

                const resObj = users.map(user => {

                    // In this object it can changed what the final variables names will be called and the order they appear in when the data is requested
                    return Object.assign(
                        {},
                        // * User model
                        {
                            id: user.id,
                            name: user.name,
                            email_address: user.email_address,
                            active: user.active,
                            // * UserRole model
                            userRole: user.ref_user_role = Object.assign(
                                {},
                                {
                                    id: user.ref_user_role.id,
                                    department_id: user.ref_user_role.department_id,
                                    name: user.ref_user_role.name,
                                    // * UserDepartment model
                                    userDepartment: user.ref_user_role.ref_user_department = Object.assign(
                                        {},
                                        {
                                            id: user.ref_user_role.ref_user_department.id,
                                            name: user.ref_user_role.ref_user_department.name,
                                        }
                                    )
                                }
                            ),
                            // * Office Model
                            office: user.office.name
                        }
                    );
                });

                // * Promise object that will now be returned
                resolve(resObj);

            }).catch(error => {

                console.error(error);
                reject(error);

            });

        });
    }
}

module.exports = Users;