module.exports = {
  name: 'error-example',
  version: 'local',
  routes: [{
    method: 'GET',
    path: '/error',
    config: {
      auth: false
    },
    handler: function(req, reply) {
      // Example: trigger an error
      // by referencing an undefined function
      using();
      // This is just an example, pretty much anything throwing
      // an error here will give the same stack trace
    }
  }, {
    method: 'GET',
    path: '/ok',
    config: {
      auth: false
    },
    handler: function(req, reply) {
      reply('Hey, its ok, go to /error to throw error')
    }
  }]
}
