import { defineConfig } from 'tsdown/config';

const config = defineConfig([
	{
		entry: 'src/index.ts',
		format: ['esm'],
		target: 'node12',
		nodeProtocol: true,
		dts: true,
		exports: true,
		fixedExtension: true,
	},
	{
		entry: 'src/index.ts',
		format: ['cjs'],
		target: 'node12',
		nodeProtocol: "strip",
		dts: false,
		exports: true,
		fixedExtension: true,
		shims: true,
		alias: {
			"crypto": "./src/crypto-polyfill.ts",
		},
	},
]);

export default config;
