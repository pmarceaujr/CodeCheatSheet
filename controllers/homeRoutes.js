const router = require('express').Router();
//const passport = require('passport');
const { Comments, Users, Posts } = require('../models');

console.log("In home Routes")
//Get the signup page loaded, if logged in, then display the homepage, otherwise, reload the signup page
router.get('/', async (req, res) => {
    try {
        // if (req.session.loggedIn) {
        res.redirect('/api/topics/');
        //   return;
        // }
        // res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the signup page loaded, if logged in, then display the homepage, otherwise, reload the signup page
router.get('/signup', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the login page loaded, if logged in, then display the homepage, otherwise, reload the login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get the logout page loaded and destroy the session
router.get('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy();
        }
        res.render('logout')
    } catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the HTML category to the api/post route, this will display only HTML posts in the home page
router.get('/find', async (req, res) => {
    console.log("tst")
    console.log(req.query.category)
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/topics/' + req.query.category);
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});
/*
//The route to pass the CSS category to the api/post route, this will display only CSS posts in the home page
router.get('/CSS', async (req, res) => {
    console.log(req)
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/topics/CSS');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the NODE category to the api/post route, this will display only NODE posts in the home page
router.get('/NODE', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/topics/NODE');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the REACT category to the api/post route, this will display only REACT posts in the home page
router.get('/REACT', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/topics/REACT');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});*/

//The route to load the add new post form, which allows the user to enter new post data
router.get('/newTopic', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('newTopic', { loggedIN: req.session.loggedIn });
            return;
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to load the add new comment form, which allows the user to enter new comment data
router.get('/newSnippet', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('newSnippet', { loggedIN: req.session.loggedIn });
            return;
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router