const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comments extends Model { }

Comments.init(
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
                model: 'posts',
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
