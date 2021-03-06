var path = require("path");
var vueTemplate = require("vue-loader/lib/plugin");

module.exports ={
    entry: "./index.js",
    mode: "development",
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "saida.js"
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader:[
                    "vue-loader"
                ]
            }
        ]
    },
    plugins:[
        new vueTemplate()
    ]
}
