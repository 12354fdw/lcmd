/** @type {import('jest').Config} */
const config = {
	testEnvironment: 'node',
	roots: ['<rootDir>/test'],
	extensionsToTreatAsEsm: ['.ts'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', { useESM: true }],
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
};

export default config;