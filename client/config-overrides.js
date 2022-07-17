const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
  addBundleVisualizer,
  setWebpackOptimizationSplitChunks,
} = require('customize-cra')

const { DuplicatesPlugin } = require('inspectpack/plugin')

const deps = {
  system: [
    'history',
    'json',
    'axios',
    'scheduler',
    'regenerator-runtime',
    'lodash',
    'immer',
    'immutable',
    '@babel',
    'buffer',
    'testing-library',
    'stream',
    'browserify',
    'hash',
    'crypto',
    'aes',
    'asn',
    'des',
    'bowser',
    'diff-match-patch',
    'url',
  ],
  vendors: [
    'easy-peasy',
    'vendor',
    'redux',
    'formik',
    'yup',
    'notistack',
    'constate',
  ],
  ui: ['css','jss','material'],
  react: ['react'],
}

const group = (name, priority) => ({
  test: new RegExp(deps[name].join('|')),
  chunks: 'initial',
  enforce: true,
  name,
  priority,
})

const chunks = {
  chunks: 'async',
  minSize: 5000,
  minChunks: 10,
  maxAsyncRequests: 10,
  maxInitialRequests: 10,
  name: false,
  cacheGroups: {
    system: group('system', -1),
    vendors: group('vendors', -5),
    react: group('react', -15),
    ui: group('ui', -20),
    default: {
      minChunks: 10,
      priority: -30,
      reuseExistingChunk: true,
    },
  },
}

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '~': './src',
      },
    },
  ]),
  process.env.ANALYZE && addBundleVisualizer(),
  process.env.ANALYZE &&
    addWebpackPlugin(
      new DuplicatesPlugin({
        verbose: true,
        emitErrors: false,
        emitHandler: undefined,
        ignoredPackages: ['@babel/runtime', 'isarray', 'react-is'],
      })
    ),
  setWebpackOptimizationSplitChunks(chunks) // chunks
)
