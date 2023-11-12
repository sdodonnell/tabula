const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const config = {
  moduleDirectories: ['node_modules', '<rootDir>/', 'app'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts']
};

module.exports = createJestConfig(config);
