module.exports = (config) => {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "!(*.d).ts"}
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        browsers: ["Chrome"],
        // browsers: ["ChromeHeadless"],
        singleRun:"true",
        logLevel: config.LOG_DEBUG,
        karmaTypescriptConfig: [{
            tsconfigPath: './tsconfig.json'
        }],
        reporters: ["dots", "karma-typescript"]

    });
}
