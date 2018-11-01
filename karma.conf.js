module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            {pattern: 'lesson/Elenchuk/*.ts'}
        ],
        preprocessors: {
            '**/*.ts': 'karma-typescript'
        },
        reporters: ['progress', 'karma-typescript'],
        browsers: ['Chrome'],
        singleRun: false,
        karmaTypescriptConfig: {
            tsconfig: 'lesson/Elenchuk/tsconfig.json',
            reporters: {
                'html': 'coverage',
                'text-summary': ''
            }
        }
    })
}