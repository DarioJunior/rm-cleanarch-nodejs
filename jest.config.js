const config = {
  roots: ['<rootDir>/src/'],
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-node',
  // testEnvironment: 'node',
  // A map from regular expressions to paths to transformers
  transform: {
    // REGEX = Any files that ends with .ts run ts-jest
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
