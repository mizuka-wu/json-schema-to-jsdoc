module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/my-project/'
      : '/json-schema-to-jsdoc/'
}
