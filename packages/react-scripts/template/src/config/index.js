const config = {
  development: {
    API_PREFIX: 'http://dev...',
    PEPPER_ID: 'pepper1',
  },
  production: {
    API_PREFIX: 'http://prod...',
    PEPPER_ID: 'pepper1',
  }
}

export default config[process.env.NODE_ENV];