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
            name: {type: Sequelize.STRING, allowNull: false}
        }, {});

        this.Course = this.sequelize.define('courses', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: Sequelize.STRING, allowNull: false},
            description: {type: Sequelize.STRING, allowNull: false},
            thumbnail_url: {type: Sequelize.STRING, allowNull: false},
            bonus_bounty: {type: Sequelize.INTEGER, allowNull: false},
            total_bounty: {type: Sequelize.INTEGER, allowNull: false},
            category_id: {type: Sequelize.INTEGER, allowNull: false}
        }, {});

        this.Category.belongsTo(this.Course, {foreignKey: 'category_id'});

        this.Video = this.sequelize.define('videos', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: Sequelize.STRING, allowNull: false},
            description: {type: Sequelize.STRING, allowNull: false},
            thumbnail_url: {type: Sequelize.STRING, allowNull: false},
            url: {type: Sequelize.STRING, allowNull: false},
            length: {type: Sequelize.INTEGER, allowNull: false},
            bounty: {type: Sequelize.INTEGER, allowNull: false},
            course_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Course.belongsTo(this.Video, {foreignKey: 'course_id'});
        
        this.Test = this.sequelize.define('tests', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: Sequelize.STRING, allowNull: false},
            bounty: {type: Sequelize.INTEGER, allowNull: false},
            video_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Video.belongsTo(this.Test, {foreignKey: 'video_id'});

        this.Question = this.sequelize.define('questions', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: Sequelize.STRING, allowNull: false},
            text: {type: Sequelize.STRING, allowNull: false},
            test_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Test.belongsTo(this.Question, {foreignKey: 'test_id'});

        this.Response = this.sequelize.define('responses', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            text: {type: Sequelize.STRING, allowNull: false},
            correct: {type: Sequelize.BOOLEAN, allowNull: false},
            question_id: {type: Sequelize.INTEGER, allowNull: false},
        })

        this.Question.belongsTo(this.Response, {foreignKey: 'question_id'});

        this.User = this.sequelize.define('users', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            torus_address: {type: Sequelize.STRING, allowNull: false}
        }, {});
        		
    }
}
module.exports = Definitions;