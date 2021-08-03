module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: [
        "packages/**/*.{ts,js,jsx}"
    ],
    coveragePathIgnorePatterns: [
        "jest.config.js",
        "/node_modules/",
        "/dist/",
    ],
    moduleNameMapper: {
        '^@acme-corp/(.*)$': '<rootDir>/packages/$1/'
    }
};
