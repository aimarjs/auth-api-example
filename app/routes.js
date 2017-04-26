const Auth = require('./controllers/Auth');

module.exports = function(app) {

  app.get('/', function(req, res) {
      res.send('Hello! The API is at http://localhost:' + port + '/api');
  });

  app.post('/auth/signup', Auth.signup);
  app.post('/auth/login', Auth.login);

}
