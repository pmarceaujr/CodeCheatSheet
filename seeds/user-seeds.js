const { Z_NO_FLUSH } = require('zlib');
const { Users } = require('../models');

const userData = [
    {
        username: "tmctester",
        firstName: "Tester",
        lastName: "McTester",
        phone: "603-555-8899",
        address: "123 Main St",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        email: "tmctester@gmail.com",
        password: "Password"
    },


];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;