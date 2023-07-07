module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/Test/**/*.test.(ts|tsx)'],
    testEnvironment: 'node',
  };
  