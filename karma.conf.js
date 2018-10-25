module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "./lesson/GolovinKonstantin/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    singleRun: false,
    karmaTypescriptConfig: {
      tsconfig: "./lesson/GolovinKonstantin/tsconfig.json",
      reports: {
        "html": "coverage",
        "text-summary": "",
      }
    }
  })
}