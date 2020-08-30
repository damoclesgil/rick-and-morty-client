module.exports = {
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       vue$: 'vue/dist/vue.esm-bundler.js'
  //     }
  //   }
  // }
};
