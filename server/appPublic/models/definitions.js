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

        this.User = this.sequelize.define('users', {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: Sequelize.JSON, allowNull: false},
            email: {type: Sequelize.STRING, allowNull: false},
            password_: {type: Sequelize.STRING, allowNull: false},
			details: Sequelize.JSON
        }, {});

		this.Party = this.sequelize.define('parties', {
            id: {type: Sequelize.INTEGER, primaryKey: true},
            name: {type: Sequelize.STRING, allowNull: false},
            host_id: {type: Sequelize.INTEGER, allowNull: false},
            public_: {type: Sequelize.BOOLEAN, allowNull: false},
            active: {type: Sequelize.BOOLEAN, allowNull: false},
            details: Sequelize.JSON,
        }, {});
		
		this.PartySong = this.sequelize.define('party_songs', {
            id: {type: Sequelize.INTEGER, primaryKey: true},
            party_id: {type: Sequelize.INTEGER, allowNull: false},
            source_id: {type: Sequelize.INTEGER, allowNull: false},
            order_: {type: Sequelize.INTEGER, allowNull: false},
            details: Sequelize.JSON,
        }, {});
		
		this.PartyGuest = this.sequelize.define('party_guests', {
            id: {type: Sequelize.INTEGER, primaryKey: true},
            party_id: {type: Sequelize.INTEGER, allowNull: false},
            type_: {type: Sequelize.INTEGER, allowNull: false},
            token: Sequelize.STRING
        }, {});
		
		this.PartyGuestUser = this.sequelize.define('party_guest_users', {
            id: {type: Sequelize.INTEGER, primaryKey: true},
            guest_id: {type: Sequelize.INTEGER, allowNull: false},
            user_id: {type: Sequelize.INTEGER, allowNull: false}
        }, {});
		
		// Party foreignKeys
		this.Party.belongsTo(this.User, {foreignKey: 'user_id'});
		this.PartySong.belongsTo(this.Party, {foreignKey: 'party_id'});
		this.PartyGuest.belongsTo(this.Party, {foreignKey: 'party_id'});
		this.PartyGuestUser.belongsTo(this.PartyGuest, {foreignKey: 'guest_id'});
		this.PartyGuestUser.belongsTo(this.User, {foreignKey: 'user_id'});
		
    }
}
module.exports = Definitions;