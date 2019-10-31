module.exports = () => {
  return {
    files: [
      'package.json',
      '**/*.js',
      '!**/*.test.js',
      '!**/*.spec.js',
      '!node_modules/**/*',
    ],
    tests: ['**/*.test.js', '**/*.spec.js', '!node_modules/**/*'],

    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
  };
};
