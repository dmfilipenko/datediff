module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'test/*.js',
      'src/*.js'
    ],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    port: 9876,
    runnerPort: 9100,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 5000,
    singleRun: true,
    reportSlowerThan: 500
  });

};
