const httpProxyMiddleware = require('http-proxy-middleware');

module.exports = {
  lintOnSave: false,
  devServer: {
    after(app) {
      const wsProxy = httpProxyMiddleware.createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
        ws: true
      });
      app.use('/api', wsProxy);
    }
  },
}
