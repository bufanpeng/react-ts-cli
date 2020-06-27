import path from "path";
export default {
    extraResolveExtensions: ["ts", "tsx", "js", "jsx"],
    alias: {
        "@": path.resolve(__dirname, "./src/")
    },
    proxy: {
        "/api": {
            target: "http://baidu.com",
            changeOrigin: true,
            secure: false
        }
    },
    extraBabelPlugins: [
        [
            "import",
            {
                libraryName: "自己的组件",
                style: true
            }
        ]
    ],

    entry: {
        index: "./src/index.js",
        vendor: [
            "moment",
            "mockjs",
            "axios",
            "babel-polyfill",
            "react",
            "react-dom"
        ]
    },
    env: {
        development: {
            extraBabelPlugins: ["dva-hmr"],
            publicPath: "/"
        },
        production: {
            publicPath: "/"
        }
    },
    outputPath: "dist",
    hash: true,
    commons: [
        {
            names: ["vendor", "index"],
            minChunks: Infinity,
            chunks: ["index"]
        },
        {
            name: "common",
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, "./node_modules")
                    ) === 0
                );
            },
            chunks: ["index"]
        }
    ],
    html: {
        template: "public/index.ejs",
        title: "myProduct",
        inject: true,
        hash: true,
        chunksSortMode: "manual",
        chunks: ["vendor", "common", "index"],
        minify:
            process.env.NODE_ENV === "development"
                ? false
                : {
                      // 是否对大小写敏感，默认false
                      caseSensitive: false,
                      // 是否移除注释 默认false
                      removeComments: true,
                      // 是否删除空属性，默认false
                      removeEmptyAttributes: false,
                      // 是否去除空格，默认false
                      collapseWhitespace: false
                  }
    }
};
