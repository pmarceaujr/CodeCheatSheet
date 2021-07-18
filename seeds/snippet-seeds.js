const { Z_NO_FLUSH } = require('zlib');
const { Snippets } = require('../models');

const snippetData = [
    {
        snippet_text: "Wicked cool post on HTML tags!  I love it looking forward to more!!",
        user_id: 1,
        topic_id: 1,
    },
    {
        snippet_text: "Totally cool post on CSS stuff!  I love it looking forward to more!!",
        user_id: 1,
        topic_id: 1,
    },
    {
        snippet_text: "Amazing post on NODE!  I love it looking forward to more!!",
        user_id: 1,
        topic_id: 1,
    },
    {
        snippet_text: "AWESOMELY cool post on REACT!  I love it looking forward to more!!",
        user_id: 1,
        topic_id: 1,
    },

];

const seedSnippets = () => Snippets.bulkCreate(snippetData);

module.exports = seedSnippets;