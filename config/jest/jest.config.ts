import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  rootDir: "../../",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  modulePaths: [
    "<rootDir>src"
  ],
  testMatch: [
    "<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"
  ],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
  },
};

export default config;
