const Users = require('./users');
const Snippets = require('./snippets');
const Topics = require('./topics');
const Lookups = require('./lookups');


Topics.hasMany(Snippets, {
    foreignKey: 'topic_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Topics, {
    foreignKey: 'user_id',
});

Users.hasMany(Snippets, {
    foreignKey: 'user_id',
});

Snippets.belongsTo(Topics, {
    foreignKey: 'topic_id',
    onDelete: 'CASCADE'
});

Topics.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Snippets.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
module.exports = { Users, Snippets, Topics, Lookups };