const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * CORS (Cross-Origin Resource Sharing) handling.
 */
module.exports = function (app) {
  const TARGET_DOMAIN = "https://run.mocky.io/";

  app.use(
    "/v3/be27",
    createProxyMiddleware({
      target: TARGET_DOMAIN,
      changeOrigin: true,
    })
  );

  app.use(
    "/v3/be28",
    createProxyMiddleware({
      target: TARGET_DOMAIN,
      changeOrigin: true,
    })
  );

  app.use(
    "/v3/be29",
    createProxyMiddleware({
      target: TARGET_DOMAIN,
      changeOrigin: true,
    })
  );

  app.use(
    "/v3/be30",
    createProxyMiddleware({
      target: TARGET_DOMAIN,
      changeOrigin: true,
    })
  );
};
