const Auth = require('./controllers/Auth');
const User = require('./controllers/Profile');
const Google = require('./controllers/Google');

module.exports = function(app) {

  app.get('/', function(req, res) {
      res.send('Hello! The API is at http://localhost:' + port + '/api');
  });

  app.post('/auth/signup', Auth.signup);
  app.post('/auth/login', Auth.login);

  app.post('/auth/google', Google.Auth);

  app.get('/api/profile', User.Profile);

}
