console.log("in API post routes")
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Topics, Snippets, Users, Lookups } = require('../../models');


//Get All HTML Posts for the filter listing page 
router.put('/updateTopic/:id', withAuth, async (req, res) => {
    try {
        const topicData = await Topics.update(
            {
                subject: req.body.subjectUpdate,
                body: req.body.topicbodyUpdate,
                category: req.body.categoryUpdate,
                // user_id: req.session.user_id,
            },
            {
                where: { id: req.params.id, },
            })
        res.redirect(303, '/api/topics/topics');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});


//Get All HTML Posts for the filter listing page 
router.get('/topics', withAuth, async (req, res) => {
    const topicsData = await Topics.findAll({
        where: {
            user_id: req.session.user_id,
        },
        order: [['created_at', 'DESC',]],
    });
    // Serialize data so the template can read it
    const topics = topicsData.map((topics) => topics.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('dashboard', { topics, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.get('/delete/:id', withAuth, async (req, res) => {
    const topicsDelData = await Topics.destroy({
        where: {
            id: req.params.id,
        },
        order: [['created_at', 'DESC',]],
    });
    res.redirect('/api/topics/topics');
})

//Get All HTML Posts for the filter listing page 
router.get('/newTopic', withAuth, async (req, res) => {
    const LookupData = await Lookups.findAll({
        where: {
            type: 'category',
        },
        order: [['created_at', 'DESC',]],
    });
    // Serialize data so the template can read it
    const lookups = LookupData.map((lookups) => lookups.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('newTopic', { lookups, userId: req.session.user_id, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.post('/newTopic', withAuth, async (req, res) => {
    try {
        const topicData = await Topics.create(//req.body
            {
                subject: req.body.subject,
                body: req.body.topicbody,
                category: req.body.category,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/topics/topics');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/topics/:id', withAuth, async (req, res) => {
    const topicData = await Topics.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
        order: [['created_at', 'DESC',]],
        include: [
            {
                model: Snippets,
                attributes: [
                    'id',
                    'snippet_text',
                    'createdAt',
                    'user_id',
                    'topic_id'],
                include: [
                    {
                        model: Users,
                        attributes: [
                            'id',
                            'username',
                        ],
                    }],
            },
            {
                model: Users,
                attributes: [
                    'id',
                    'username',
                ],
            },
        ], order: [[Snippets, 'createdAt', 'DESC']],
    });
    req.session.topic_id = req.params.id;
    // Serialize data so the template can read it

    const topics = topicData.get({ plain: true });
    if (req.session.loggedIn) {
        res.render('topiclists', { topics, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.get('/:category', withAuth, async (req, res) => {
    const topicsData = await Topics.findAll({
        where: {
            category: req.params.category,
        },
        order: [["created_at", "desc"]],
        include: [{
            model: Snippets,
            attributes: [
                'id',
                'snippet_text',
                'user_id',
                'topic_id',
                'created_at',
            ],
        },
        {
            model: Users,
            attributes: [
                'id',
                'username',
            ],
        },
        ],
    });
    // Serialize data so the template can read it
    const topics = topicsData.map((topics) => topics.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('homepage', { topics, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
})


//Get All HTML Posts for the filter listing page 
router.get('/editTopics/:id', withAuth, async (req, res) => {
    const editTopicData = await Topics.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
    });
    // Serialize data so the template can read it
    const editTopic = editTopicData.get({ plain: true });
    console.log(editTopic)
    if (req.session.loggedIn) {
        res.render('editTopic', { editTopic, userId: req.session.user_id, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.post('/newTopic', withAuth, async (req, res) => {
    try {
        const topicData = await Topics.create(//req.body
            {
                subject: req.body.subject,
                body: req.body.topicbody,
                category: req.body.category,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/topics/topics');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});


//Get All posts for the home page listing order by date created desc (Newest at the top)
router.get('/', async (req, res) => {
    console.log("here")
    console.log(req.query)
    const topicsData = await Topics.findAll({
        order: [['created_at', 'DESC',]],
        include: [
            {
                model: Snippets,
                attributes: [
                    'id',
                    'snippet_text',
                    'user_id',
                    'topic_id',
                ],
            },
            {
                model: Users,
                attributes: [
                    'id',
                    'username',
                ],
            },
        ],
    });
    // Serialize data so the template can read it
    const topics = await topicsData.map((topic) => topic.get({ plain: true }));
    res.render('homepage', { topics, userId: req.session.user_id, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
})

module.exports = router;

