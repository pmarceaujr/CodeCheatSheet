const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Snippets extends Model { }

Snippets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        snippet_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'topics',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'snippets',
    }
);

module.exports = Snippets;
