var path = require("path");
const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
/*
 * 首先，react-app-rewired是react社區開源的一個修改CRA配置的工具，
 * 例如擴展Create React App的Webpack配置，
 * 而customize-cra提供了一組用於自定義利用react-app-rewired核心功能的Create React App
 * v2配置, 可以通過config-overrides.js文件來對webpack配置進行擴展
 * https://juejin.cn/post/6844903779712630798
 */
module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css",
      }),
      // add an alias for "our" imports
      addWebpackAlias({
        "@iso/assets": path.resolve(__dirname, "src/assets"),
        "@iso/components": path.resolve(__dirname, "src/components"),
        "@iso/config": path.resolve(__dirname, "src/config"),
        "@iso/containers": path.resolve(__dirname, "src/containers"),
        "@iso/redux": path.resolve(__dirname, "src/redux"),
        "@iso/lib": path.resolve(__dirname, "src/library"),
        "@iso/ui": path.resolve(__dirname, "src/UI"),
      })
    )(config, env)
  );
};
