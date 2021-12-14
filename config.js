const expressDomain = 'http://localhost';
const expressPort = '3000';
const expressDomainAndPort = `${expressDomain}:${expressPort}`;

module.exports = {
    browserSync: {
        proxy: expressDomainAndPort
    },
    express: {
        domain: expressDomain,
        port: expressPort
    },
    html: {
        outDir: './dist',
        htmlMinifyOptions : {
            includeAutoGeneratedTags: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
            collapseWhitespace: true
        }
    },
    css: {
        outDir: './dist',
    },
    js : {
        outDir: './dist/js/pages'
    }
}