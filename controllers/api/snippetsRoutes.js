const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Snippets } = require('../../models');

console.log("In company Routes")

//Add a new comment to the selected post 
router.post('/newSnippet', withAuth, async (req, res) => {
    try {
        const snippetData = await Snippets.create(
            {
                topic_id: req.session.topic_id,
                snippet_text: req.body.snippet,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/topics/topics/' + req.session.topic_id);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

//Get All HTML Posts for the filter listing page 
router.get('/delete/:id', withAuth, async (req, res) => {
    const snippetsDelData = await Snippets.destroy({
        where: {
            id: req.params.id,
        },
        order: [['created_at', 'DESC',]],
    });
    res.redirect('/api/topics/topics/' + req.session.topic_id);
})

module.exports = router;