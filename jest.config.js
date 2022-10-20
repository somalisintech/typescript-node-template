/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  detectOpenHandles: true,
  forceExit: true,
  verbose: true,
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  }
};

module.exports = config;
