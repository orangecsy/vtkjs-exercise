
const path = require('path');  
const webpack = require('webpack');  
const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.v2.rules;  
  
const entry = path.join(__dirname, './src/index.js');  
const sourcePath = path.join(__dirname, './src');  
const outputPath = path.join(__dirname, './dist');  
  
module.exports = {  
    mode: 'development',  
    entry,  
    output: {  
        path: outputPath,  
        filename: 'app.js'  
    },  
    module: {  
        rules: [  
            { test: entry, loader: 'expose-loader?app' },  
            { test: /\.html$/, loader: 'html-loader' },  
        ].concat(vtkRules)  
    },  
    resolve: {  
        modules: [  
            path.resolve(__dirname, 'node_modules'),  
            sourcePath  
        ]  
    }  
};