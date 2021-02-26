
module.exports = ({config} ) => {
    // Add SVGR Loader to load svg
    // ========================================================
    // Remove svg rules from existing webpack rule
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
    const assetLoader = {
        loader: assetRule.loader,
        options: assetRule.options || assetRule.query,
    };
    config.module.rules.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack', assetLoader],
    });
    // END Add SVGR Loader to load svg
    return config;
}
