const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      createProxyMiddleware("/api",{
        target: 'http://104.248.26.143:8080', // The target server that you want to proxy to
        changeOrigin: true, // Needed for virtual hosted sites
          pathRewrite: {
              '^/api' : '/'
          }
      })
  );
};