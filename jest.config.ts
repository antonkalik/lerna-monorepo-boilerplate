import type { Config } from "jest";

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/stories/assets/js/",
  ],
  setupFilesAfterEnv: ["<rootDir>/test.setup.ts"],
  testMatch: ["<rootDir>/packages/*/src/**/*.test.{ts,tsx,js,jsx}"],
  transform: {
    "^.+\\.[t|j]sx?$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!@storybook|react-dnd|react-dnd-html5-backend|dnd-core|@react-dnd)", // 'node_modules/(?!module1|module2|etc)'
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/stories.{js,jsx,ts,tsx}",
    "!src/stories/assets/js/**",
    "!src/types/**",
  ],
  coverageReporters: ["clover", "text"],
};

export default config;
