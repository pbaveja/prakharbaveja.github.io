const { addDecoratorsLegacy, disableEsLint, override, fixBabelImports, addLessLoader } = require('customize-cra');
const customTheme =  require('./src/styles/customTheme.js');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
  	javascriptEnabled: true,
	modifyVars: customTheme,
  }),
  addDecoratorsLegacy(),
  disableEsLint()
);