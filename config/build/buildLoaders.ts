import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    // const stylesLoader = {
    //       test: /\.s[ac]ss$/i,
    //     use: [
    //         isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    //         {
    //             loader: "css-loader",
    //             options: {
    //                 modules: {
    //                     auto: (resPath: string) =>  Boolean(resPath.includes('.module.')),
    //                     localIdentName: isDev ?
    //                         '[path][name]__[local]--[hash:base64:5]'
    //                         : '[hash:base64:8]'
    //                 },
    //             },
    //         },
    //         "sass-loader",
    //     ],
    // }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
