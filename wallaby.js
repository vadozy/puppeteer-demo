module.exports = wallaby => {
  return {
    files: [
      'package.json',
      '**/*.js',
      '!**/*.test.js',
      '!**/*.spec.js',
      '!node_modules/**/*',
      '!./*.js',
    ],
    tests: ['**/*.test.js', '**/*.spec.js', '!node_modules/**/*'],

    // runMode: 'onsave',

    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
