// let path = require('path')
module.exports={
    publicPath:'/',
    outputDir:'dist',
    lintOnSave:false,
    assetsDir:'assets',

    devServer:{
        open:false,
        host:'localhost',
        proxy:'http://localhost:3001',
        hot: true,
        overlay: {
            warnings: false,
            errors: false
        },

    }

};