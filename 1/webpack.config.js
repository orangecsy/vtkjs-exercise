
const path = require('path');  
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.v2.rules;  

const entry = path.join(__dirname, './src/index.js');
const sourcePath = path.join(__dirname, './src'); // 也可用path.resolve(__dirname,'dist')
const outputPath = path.join(__dirname, './dist');

module.exports = {
    mode: 'development',
    // 入口文件的配置项
    entry,
    // 控制台报错信息
    devtool: 'inline-source-map',
    // 出口文件的配置项
    output:{
        // 输出的路径
        path: outputPath,
        // 输出的文件名称
        filename: 'bundle.js'
    },
    // 模块：例如解读CSS,图片如何转换，压缩
    module: {
        rules: [
            { test: entry, loader: 'expose-loader?app' },
            { test: /\.html$/, loader: 'html-loader' },
        ].concat(vtkRules)
    },
    // 插件，用于生产模版和各项功能
    plugins:[],
    // 配置webpack开发服务功能
    devServer:{},
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    }
}