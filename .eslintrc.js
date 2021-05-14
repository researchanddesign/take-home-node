/**
 * Borrowed from https://github.com/angular-eslint/angular-eslint/blob/2d28fc7/packages/integration-tests/fixtures/angular-cli-workspace/.eslintrc.js
 */
module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	overrides: [
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				project: './tsconfig.json'
			},
			plugins: ['@typescript-eslint', '@angular-eslint', 'import', 'no-null', 'prefer-arrow'],
			rules: {
				'@typescript-eslint/array-type': 'off',
				'arrow-parens': 'off',
				'@angular-eslint/contextual-lifecycle': 'error',
				'@angular-eslint/component-class-suffix': 'error',
				'@angular-eslint/directive-class-suffix': 'error',
				'@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
				'@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
				'no-restricted-imports': [
					'error',
					{
						paths: [
							{
								name: 'rxjs/Rx',
								message: "Please import directly from 'rxjs' instead"
							}
						]
					}
				],
				'@typescript-eslint/interface-name-prefix': 'off',
				'max-classes-per-file': 'off',
				'max-len': 'off',
				'@typescript-eslint/explicit-member-accessibility': 'off',
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: ['static-field', 'instance-field', 'static-method', 'instance-method']
					}
				],
				'no-multiple-empty-lines': 'off',
				'no-restricted-syntax': [
					'error',
					{
						selector:
							'CallExpression[callee.object.name="console"][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]',
						message: 'Unexpected property on console object was called'
					}
				],
				'no-empty': 'off',
				'no-fallthrough': 'error',
				'@typescript-eslint/no-var-requires': 'off',
				'quote-props': ['error', 'as-needed'],
				'sort-keys': 'off',
				quotes: [
					'error',
					'single',
					{
						avoidEscape: true
					}
				],
				'comma-dangle': 'off',
				'@angular-eslint/no-conflicting-lifecycle': 'error',
				'@angular-eslint/no-host-metadata-property': 'error',
				'@angular-eslint/no-input-rename': 'error',
				'@angular-eslint/no-inputs-metadata-property': 'error',
				'@angular-eslint/no-output-native': 'error',
				'@angular-eslint/no-output-on-prefix': 'error',
				'@angular-eslint/no-output-rename': 'error',
				'@angular-eslint/no-outputs-metadata-property': 'error',
				'@angular-eslint/use-lifecycle-interface': 'warn',
				'@angular-eslint/use-pipe-transform-interface': 'error',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-inferrable-types': 'off',
				'@typescript-eslint/no-parameter-properties': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/no-non-null-assertion': ['off'],
				'@typescript-eslint/explicit-function-return-type': ['off'],
				'arrow-body-style': 'error',
				'arrow-parens': 'off',
				camelcase: 'error',
				'comma-dangle': 'off',
				complexity: 'off',
				'constructor-super': 'error',
				curly: 'error',
				'dot-notation': 'error',
				'eol-last': 'error',
				eqeqeq: ['error', 'smart'],
				'guard-for-in': 'error',
				'id-blacklist': ['error', 'any', 'Number', 'number', 'String', 'string', 'Boolean', 'boolean', 'Undefined'],
				'id-match': 'error',
				'import/order': 'error',
				'max-classes-per-file': ['error', 1],
				'max-len': 'off',
				'new-parens': 'error',
				'no-bitwise': 'error',
				'no-caller': 'error',
				'no-cond-assign': 'error',
				'no-console': 'error',
				'no-debugger': 'error',
				'no-empty': 'error',
				'no-eval': 'error',
				'no-fallthrough': 'off',
				'no-invalid-this': 'off',
				'no-multiple-empty-lines': 'error',
				'no-new-wrappers': 'error',
				'no-null/no-null': 'error',
				'no-return-await': 'error',
				'no-shadow': [
					'error',
					{
						hoist: 'all'
					}
				],
				'no-throw-literal': 'error',
				'no-trailing-spaces': 'error',
				'no-undef-init': 'error',
				'no-underscore-dangle': 'off',
				'no-unsafe-finally': 'error',
				'no-unused-expressions': 'error',
				'no-unused-labels': 'error',
				'no-var': 'error',
				'object-shorthand': 'error',
				'one-var': ['error', 'never'],
				'prefer-arrow/prefer-arrow-functions': 'error',
				'prefer-const': 'error',
				'quote-props': ['error', 'as-needed'],
				radix: 'error',
				'space-before-function-paren': [
					'error',
					{
						anonymous: 'never',
						asyncArrow: 'always',
						named: 'never'
					}
				],
				'spaced-comment': 'error',
				'use-isnan': 'error',
				'valid-typeof': 'off',
			}
		},
		{
			files: ['*.component.html'],
			parser: '@angular-eslint/template-parser',
			plugins: ['@angular-eslint/template'],
			rules: {
				'@angular-eslint/template/banana-in-a-box': 'error',
				'@angular-eslint/template/no-negated-async': 'error'
			}
		},
		{
			files: ['*.component.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module'
			},
			plugins: ['@angular-eslint/template'],
			processor: '@angular-eslint/template/extract-inline-html'
		}
	]
};
