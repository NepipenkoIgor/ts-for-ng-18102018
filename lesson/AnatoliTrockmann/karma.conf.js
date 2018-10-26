module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    singleRun: false,
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.test.json",
      reports: {
        "html": "coverage",
        "text-summary": "",
      }
    }
  })
}