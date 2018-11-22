module.exports = {
  baseUrl: 'rainbow-nash/',
  pages: {
    index: {
      entry: './src/main.js',
      template: './index.html'
    },
  },
  css: {
    loaderOptions: {
        // postcss: {
        //     plugins: [
        //         require('postcss-pxtorem')({
        //             rootValue: 32, 
        //             prop_white_list: []
        //         }),
        //     ]
        // }
    }
  }
}
