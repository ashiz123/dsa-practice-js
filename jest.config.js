export default {
  transform: {
    '^.+\\.js$': 'babel-jest', // Use babel-jest to transform your JavaScript files
  },
  testEnvironment: 'node', // Ensure the test environment is node.js
};