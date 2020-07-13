// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  roots: ["<rootDir>/__tests__/"]
};