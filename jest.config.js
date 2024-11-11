module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'], // Local onde ficam os testes
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};