module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
  ],
};
