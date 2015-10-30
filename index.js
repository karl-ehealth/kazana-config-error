module.exports = {
  name: 'config-error-example',
  version: 'local',
  routes: [{
    method: 'GET',
    path: '/',
    config: {
      auth: false
    },
    handler: function(req, reply) {
      reply('If this app starts on port 8000, its working, if 5000 its not working')
    }
  }]
}
