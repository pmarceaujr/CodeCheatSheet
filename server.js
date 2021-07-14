const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});
const routes = require('./controllers');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || '3030';
const app = express();

const sess = {
    secret: 'SuperSecretSquirrel',
    cookie: { maxAge: 1000 * 60 * 60 * 24 },  //24 hours
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); //can use hbs for handlebars

//add public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});