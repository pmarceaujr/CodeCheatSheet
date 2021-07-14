const seedSnippets = require('./snippet-seeds');
const seedTopics = require('./topic-seeds');
const seedUsers = require('./user-seeds');
const seedLookups = require('./lookup-seeds');
console.log('\n----- HERE -----\n');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- Users  DATA SEEDED -----\n');

    await seedLookups();
    console.log('\n----- Lookups DATA SEEDED -----\n');

    await seedTopics();
    console.log('\n----- Topics DATA SEEDED -----\n');

    await seedSnippets();
    console.log('\n----- Snippets DATA SEEDED -----\n');

    process.exit(0);
};

seedAll();