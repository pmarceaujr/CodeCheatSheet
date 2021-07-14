const { Z_NO_FLUSH } = require('zlib');
const { Lookups } = require('../models');

const lookupData = [
    {
        type: "category",
        label: "VS-Code",
        value: "VS-Code",
    },
    {
        type: "category",
        label: "HTML",
        value: "HTML",
    },
    {
        type: "category",
        label: "CSS",
        value: "CSS",
    },
    {
        type: "category",
        label: "NODE",
        value: "NODE",
    },
    {
        type: "category",
        label: "REACT",
        value: "REACT",
    },
    {
        type: "category",
        label: "Python",
        value: "Python",
    },
    {
        type: "category",
        label: "PHP",
        value: "PHP",
    },
    {
        type: "category",
        label: "SQL",
        value: "SQL",
    },
    {
        type: "category",
        label: "iReport",
        value: "iReport",
    },
    {
        type: "category",
        label: "JavaScript",
        value: "JavaScript",
    },
    {
        type: "category",
        label: "Handlebars",
        value: "Handlebars",
    },
    {
        type: "category",
        label: "EJS",
        value: "EJS",
    },
    {
        type: "category",
        label: "jQuery",
        value: "jQuery",
    },
    {
        type: "category",
        label: "GIT",
        value: "GIT",
    },

];

const seedLookups = () => Lookups.bulkCreate(lookupData);

module.exports = seedLookups;