/* @flow */
const hasuraConfig = require('../hasuraconfig');

const host = hasuraConfig.appHost;
const port = hasuraConfig.port[process.env.NODE_ENV || 'development'];
const dataUrl = process.env.DATA_API_URL || 'http://localhost:8080';
const proxyFor = process.env.PROXY_FOR;
const proxyEnabled = process.env.PROXY_ENABLED === 'true';
const proxyPort = parseInt(process.env.PROXY_API_PORT);
const basicAuth = process.env.CONSOLE_BASIC_AUTH_ENABLED === 'true';
const basicAuthUser = process.env.CONSOLE_USERNAME;
const basicAuthPassword = process.env.CONSOLE_PASSWORD;


const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host,
    port,
    dataUrl,
    proxyEnabled,
    proxyPort,
    proxyFor,
    basicAuth,
    basicAuthUser,
    basicAuthPassword
  },
  environment
);
