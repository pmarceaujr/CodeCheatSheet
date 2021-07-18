console.log("in API Index")
const router = require('express').Router();
const topicRoutes = require('./topicsRoutes');
const snippetsRoutes = require('./snippetsRoutes');
const userRoutes = require('./userRoutes');

router.use('/topics', topicRoutes);
router.use('/snippets', snippetsRoutes);
router.use('/users', userRoutes);

module.exports = router;