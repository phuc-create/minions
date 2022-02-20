module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'indent'           : 'off',
		'space-unary-ops'  : 2,
		'react/prop-types': 'off',
		'template-curly-spacing':'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'func-names': 'off',
		'no-console': 'off',
		// "line-break":[
		// 	'',''
		// ]
	}
}
