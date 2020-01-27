const withCss = require('@zeit/next-css');

module.exports = withCss({
  publicRuntimeConfig: {
    APP_NAME: 'SEOBLOG',
    API_DEVELOPMENT:'http://localhost:8000/api',
    PRODUCTION: false
  }
})
