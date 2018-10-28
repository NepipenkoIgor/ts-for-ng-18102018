module.exports = (config) => {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "*.ts"}
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        //browsers: ["Chrome"],
        browsers: ["ChromeHeadless"],
        singleRun: "true",
        logLevel: config.LOG_DEBUG,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000,
        flags: [
            "--disable-web-security",
            "--disable-gpu",
            "--no-sandbox"
        ],
        karmaTypescriptConfig: [{
            tsconfigPath: "./tsconfig.json"
        }],
        reporters: ["dots", "karma-typescript"]
    });
};