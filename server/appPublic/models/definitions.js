'use strict';
const Sequelize = require('sequelize');

class Definitions {

    /**
     * All models are defined in the constructor.
     * Each model definition and its attributes represent a table and its columns, respectively.
     * @param helpers
     * @param sequelize
     */
    constructor(helpers, sequelize) {

        this.helpers = helpers;
        this.sequelize = sequelize;

        this.Category = this.sequelize.define('categorys', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name_: {type: Sequelize.STRING, allowNull: false}
        }, {});

        this.Course = this.sequelize.define('courses', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name_: {type: Sequelize.STRING, allowNull: false},
            description_: {type: Sequelize.STRING, allowNull: false},
            thumbnail_url: {type: Sequelize.STRING, allowNull: false},
            bonus_bounty: {type: Sequelize.INTEGER, allowNull: false},
            total_bounty: {type: Sequelize.INTEGER, allowNull: false},
            category_id: {type: Sequelize.INTEGER, allowNull: false}
        }, {});

        this.Course.belongsTo(this.Category, {foreignKey: 'category_id'});

        this.Video = this.sequelize.define('videos', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name_: {type: Sequelize.STRING, allowNull: false},
            description_: {type: Sequelize.STRING, allowNull: false},
            thumbnail_url: {type: Sequelize.STRING, allowNull: false},
            youtube_id: {type: Sequelize.STRING, allowNull: false},
            length: {type: Sequelize.INTEGER, allowNull: false},
            bounty: {type: Sequelize.INTEGER, allowNull: false},
            course_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Video.belongsTo(this.Course, {foreignKey: 'course_id'});
        this.Video.belongsTo(this.Category, {foreignKey: 'category_id'});
        
        this.Test = this.sequelize.define('tests', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name_: {type: Sequelize.STRING, allowNull: false},
            bounty: {type: Sequelize.INTEGER, allowNull: false},
            video_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Video.hasMany(this.Test, {as: 'tests',foreignKey: 'video_id'})

        // this.Test.belongsTo(this.Video, {foreignKey: 'video_id'});

        this.Question = this.sequelize.define('questions', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name_: {type: Sequelize.STRING, allowNull: false},
            text: {type: Sequelize.STRING, allowNull: false},
            test_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Test.hasMany(this.Question, {as: 'questions',foreignKey: 'test_id'})
        // this.Question.belongsTo(this.Test, {foreignKey: 'test_id'});

        this.Response = this.sequelize.define('responses', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            text: {type: Sequelize.STRING, allowNull: false},
            correct: {type: Sequelize.BOOLEAN, allowNull: false},
            question_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Question.hasMany(this.Response, {as: 'responses',foreignKey: 'question_id'})
        // this.Response.belongsTo(this.Question, {foreignKey: 'question_id'});

        this.User = this.sequelize.define('users', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            torus_address: {type: Sequelize.STRING, allowNull: false}
        }, {});

        // this.UserVideoEvent = this.sequelize.define('user_video_events', {
        //     id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        //     user_id: {type: Sequelize.INTEGER, allowNull: false},
        //     video_id: {type: Sequelize.INTEGER, allowNull: false},
        //     event_type: {type: Sequelize.STRING, allowNull: false},
        // }, {
        //     timestamps: true,  // I do want timestamps here
        // });

        // this.User.hasMany(this.UserVideoEvent, {as: 'userVideoEvents',foreignKey: 'user_id'})
        // // this.Video.hasMany(this.UserVideoEvent, {as: 'userVideoEvents',foreignKey: 'video_id'})
        // // this.UserVideoEvent.belongsTo(this.User, {foreignKey: 'user_id'});
        // this.UserVideoEvent.hasOne(this.Video, {foreignKey: 'video_id'});

        // this.UserTestEvent = this.sequelize.define('user_test_events', {
        //     id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        //     user_id: {type: Sequelize.INTEGER, allowNull: false},
        //     test_id: {type: Sequelize.INTEGER, allowNull: false},
        //     passed: {type: Sequelize.BOOLEAN, allowNull: false},
        // }, {
        //     timestamps: true,  // I do want timestamps here
        // });

        // this.User.hasMany(this.UserTestEvent, {as: 'userTestEvents',foreignKey: 'user_id'})
        // this.UserTestEvent.hasOne(this.Test);
        // // this.UserTestEvent.belongsTo(this.Test, {foreignKey: 'test_id'});

        // this.UserTestEventResponse = this.sequelize.define('user_test_event_responses', {
        //     id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        //     user_test_event_id: {type: Sequelize.INTEGER, allowNull: false},
        //     response_id: {type: Sequelize.INTEGER, allowNull: false},
        // }, {});

        // this.UserTestEvent.hasMany(this.UserTestEventResponse, {foreignKey: 'user_test_event_id'});
        // // this.UserTestEventResponse.belongsTo(this.UserTestEvent, {foreignKey: 'user_test_event_id'});
        // this.UserTestEventResponse.hasOne(this.Response);
        // // this.UserTestEventResponse.belongsTo(this.Response, {foreignKey: 'response_id'});

    }
}
module.exports = Definitions;