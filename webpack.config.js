// eslint-disable-next-line no-undef
module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            },
        ],
    },
};
