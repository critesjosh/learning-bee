'use strict';
const Sequelize = require('sequelize');

/**
 * CloudDj user model function definitions.
 *
 * @author: Arsham Eslami (arshameslami@gmail.com)
 * @copyright 2019 Learning Bee
 */
class Videos {

    constructor(helpers, sequelize, definitions) {

        this.helpers = helpers;
        this.sequelize = sequelize;
        this.definitions = definitions;
		
    };
	
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

            const videoModelSearchObject = {
                include: [
                    {
                        model: this.definitions.Category
                    },
                    {
                        model: this.definitions.Test,
                        as: 'tests',
                        include: [
                            {
                                model: this.definitions.Question,
                                as: 'questions',
                                include: [
                                    {
                                        model: this.definitions.Response,
                                        as: 'responses'
                                    }
                                ]
                            }
                        ]
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

            this.definitions.Video.findAll(videoModelSearchObject).then(videos => {

                /**
                 * A new constant resObj is declared where only specific attributes are mapped from the model.
                 */

                const resObj = videos.map(video => {

                    // In this object it can changed what the final variables names will be called and the order they appear in when the data is requested
                    return Object.assign(
                        {},
                        {
                            id: video.id,
                            category: video.category = Object.assign(
                                {},
                                {
                                    id: video.category.id,
                                    name: video.category.name_,
                                }
                            ),
                            name: video.name_,
                            description: video.description_,
                            thumbnailUrl: video.thumbnail_url,
                            length: video.length,
                            youtubeId: video.youtube_id,
                            bounty: video.bounty,
                            tests: video.tests.map(test => {
                                    return {
                                        id: test.id,
                                        name: test.name_,
                                        bounty: test.bounty,
                                        questions: test.questions.map(question => {
                                            return {
                                                id: question.id,
                                                name: question.name_,
                                                text: question.text,
                                                responses: question.responses.map(response => {
                                                    return {
                                                        id: response.id,
                                                        name: response.text,
                                                        correct: response.correct
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
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

module.exports = Videos;