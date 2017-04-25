const Auth = require('./controllers/Auth');

module.exports = function(app) {

  app.get('/', function(req, res) {
      res.send('Hello! The API is at http://localhost:' + port + '/api');
  });

  app.get('/api', function(req, res) {
    res.status(200).send({ message: 'ok' });
  });

  // app.get('/api/signup', function(req, res) {
  //   res.status(405).send({ message: 'GET request is not allowed'})
  // });
  app.post('/api/signup', Auth.signup);
  app.post('/api/login', Auth.login);

  // app.get('/api/login', function(req, res) {
  //   res.status(405).send({ error: 'GET request is not allowed'})
  // });
  // app.post('/api/login', requireLogin, Authentication.login);
  //
  // app.get('/api/forgot', Authentication.forgot);
  // app.post('/api/forgot', Authentication.forgot);
  //
  // app.get('/api/reset', Authentication.reset);
  // app.post('/api/reset', Authentication.reset);


}
