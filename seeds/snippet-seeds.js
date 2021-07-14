const { Z_NO_FLUSH } = require('zlib');
const { Snippets } = require('../models');

const snippetData = [
    {
        comment_text: "Wicked cool post on HTML tags!  I love it looking forward to more!!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Totally cool post on CSS stuff!  I love it looking forward to more!!",
        user_id: 1,
        post_id: 4,
    },
    {
        comment_text: "Amazing post on NODE!  I love it looking forward to more!!",
        user_id: 1,
        post_id: 7,
    },
    {
        comment_text: "AWESOMELY cool post on REACT!  I love it looking forward to more!!",
        user_id: 1,
        post_id: 10,
    },

];

const seedSnippets = () => Snippets.bulkCreate(snippetData);

module.exports = seedSnippets;