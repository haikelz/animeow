const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",

  // absolute import
  moduleNameMapper: {
    "^~ui/(.*)$": "src/components/ui/$1",
    "^~sections/(.*)$": "src/components/sections/$1",
    "^~(.*)$": "src/$1",
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
