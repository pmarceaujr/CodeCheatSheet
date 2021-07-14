const { Z_NO_FLUSH } = require('zlib');
const { Topics } = require('../models');

const topicsData = [
    {
        category: "HTML",
        subject: "HTML TAGS",
        body: "Tags surround each separate element on the page: like the headings, paragraphs, bulleted list, etc. A tag has an opening bracket: < and a closing bracket: > There’s also an opening tag <tag> and a closing </tag> Content goes in between the tags Tags literally surround each piece of content on the page, otherwise the browser will have no idea what to do with it",
        user_id: 1,
    },

];

const seedTopics = () => Topics.bulkCreate(topicsData);

module.exports = seedTopics;