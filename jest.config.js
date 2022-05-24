module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testRegex: ['/*.test.ts$', '/*.test.tsx$'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'test-coverage',
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    'src/hooks/**/*.ts(x)?',
    'src/screens/**/*.ts(x)?',
    'src/utils/**/*.ts(x)?',
    '!src/**/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
};
