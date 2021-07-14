const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Topics extends Model { }

Topics.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'topics',
    }
);

module.exports = Topics;