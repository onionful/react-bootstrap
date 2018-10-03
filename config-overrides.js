const { compose, injectBabelPlugin } = require('react-app-rewired');
const rewireESLint = require('react-app-rewire-eslint');
const rewireYAML = require('react-app-rewire-yaml');
const rewireLess = require('react-app-rewire-less');

module.exports = compose(
  rewireYAML,
  rewireESLint,
  config => injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config),
  rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      '@primary-color': '#9BC4CB',
      '@menu-bg': 'transparent',
      '@menu-dark-bg': 'transparent',
      '@menu-dark-item-active-bg': 'transparent',
    },
  }),
);
