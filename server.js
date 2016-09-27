const express = require('express');
const app = express();
const connectDatabase = require('./db/database');
const routes = require('./routes/');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');

app.set('view engine', 'pug');

// Middleware
require('./passport-config')(passport)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new RedisStore(),
  secret: 'timssupersecretkey'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  if (req.session.email) {
    app.locals.email = req.session.email
  }
  next()
});

// Routes
app.use(routes);

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
});

connectDatabase
  .then(() => {
    app.listen(8080, () => {
      console.log("Server listening on port 8080...");
    })
  })
  .catch((err) => {
    console.log(err);
  })
