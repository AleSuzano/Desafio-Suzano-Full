const nextJest = require('next/jest');

const createJestConfig = nextJest({

  // Caminho da raiz do seu app Next.js

  dir: './',

});

const customJestConfig = {

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {

    // Gerencia o alias @/ do TypeScript

    '^@/(.*)$': '<rootDir>/$1',

  },

};

 

module.exports = createJestConfig(customJestConfig);

