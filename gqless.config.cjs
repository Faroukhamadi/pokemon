/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
	react: false,
	scalarTypes: { DateTime: 'string' },
	introspection: { endpoint: 'https://graphql-pokemon2.vercel.app', headers: {} },
	destination: './src/gqless/index.ts',
	subscriptions: false,
	javascriptOutput: false
};

module.exports = config;
