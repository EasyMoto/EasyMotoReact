//Aoagar este ficheiro após término do desenvolvimento. deverá ser configurado co CORS corretamente para a APP ter acesso
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://easymoto.azurewebsites.net',
      changeOrigin: true,
    })
  );
};
