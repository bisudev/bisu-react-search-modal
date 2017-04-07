module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BisuReactSearchModal',
      externals: {
        react: 'React'
      }
    }
  }
}
