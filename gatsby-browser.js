/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = function() {
  window.fetch && fetch('//hello.myfonts.net/count/3b9538').catch(function() {});
};
