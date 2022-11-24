
const { defineConfig } = require('cypress')
const getenv = require('getenv')

module.exports = defineConfig({
  e2e: {
    baseUrl: getenv.string('BASE_URL')
  }
})


