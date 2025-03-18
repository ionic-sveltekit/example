import eslint from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	{
		plugins: {
      '@stylistic': stylistic
    },
		rules: {
			"svelte/first-attribute-linebreak": [
				"error",
				{
					"multiline": "below", // or "beside"
					"singleline": "beside" // "below"
				},
			],
			"svelte/max-attributes-per-line": [
				"error",
				{
					"multiline": 1,
					"singleline": 1
				},
			],
			"svelte/html-closing-bracket-new-line": [
				"error",
				{
					"singleline": "never", // ["never", "always"]
					"multiline": "always", // ["never", "always"]
					"selfClosingTag": {
						"singleline": "never", // ["never", "always"]
						"multiline": "always" // ["never", "always"]
					},
				},
			],
			"svelte/mustache-spacing": [
				"error",
				{
					"textExpressions": "always", // or "always"
					"attributesAndProps": "always", // or "always"
					"directiveExpressions": "always", // or "always"
					"tags": {
						"openingBrace": "never", // or "always"
						"closingBrace": "always" // or "always" or "always-after-expression"
					}
				}
			],
			"svelte/no-spaces-around-equal-signs-in-attribute": "error",
			"svelte/prefer-class-directive": [
				"error",
				{
					"prefer": "empty" // or "always"
				}
			],
			"svelte/sort-attributes": [
				"error",
				{
					"order": [
						// `this` property.
						"this",
						// `bind:this` directive.
						"bind:this",
						// `id` attribute.
						"id",
						// `name` attribute.
						"name",
						// `slot` attribute.
						"slot",
						// `--style-props` (Alphabetical order within the same group.)
						{ "match": "/^--/u", "sort": "alphabetical" },
						// `style` attribute, and `style:` directives.
						["style", "/^style:/u"],
						// `class` attribute.
						"class",
						// `class:` directives. (Alphabetical order within the same group.)
						{ "match": "/^class:/u", "sort": "alphabetical" },
						// other attributes. (Alphabetical order within the same group.)
						{
							"match": ["!/:/u", "!/^(?:this|id|name|style|class)$/u", "!/^--/u"],
							"sort": "alphabetical"
						},
						// `bind:` directives (other then `bind:this`), and `on:` directives.
						["/^bind:/u", "!bind:this", "/^on:/u"],
						// `use:` directives. (Alphabetical order within the same group.)
						{ "match": "/^use:/u", "sort": "alphabetical" },
						// `transition:` directive.
						{ "match": "/^transition:/u", "sort": "alphabetical" },
						// `in:` directive.
						{ "match": "/^in:/u", "sort": "alphabetical" },
						// `out:` directive.
						{ "match": "/^out:/u", "sort": "alphabetical" },
						// `animate:` directive.
						{ "match": "/^animate:/u", "sort": "alphabetical" },
						// `let:` directives. (Alphabetical order within the same group.)
						{ "match": "/^let:/u", "sort": "alphabetical" }
					]
				}
			],"svelte/spaced-html-comment": [
				"error",
				"always" // or "never"
			],
			"no-trailing-spaces": "off", // Don't need ESLint's no-trailing-spaces rule, so turn it off.
			"svelte/no-trailing-spaces": [
				"error",
				{
					"skipBlankLines": false,
					"ignoreComments": false
				}
			],
			'@stylistic/js/max-len': [
				"error",
				{
					"code": 120,
					"comments": 150,
					"ignoreComments": true,
					"ignoreTrailingComments": true,
					"ignoreUrls": true,
					"ignoreStrings": true,
					"ignoreTemplateLiterals": true,
					"ignoreRegExpLiterals": true,
				}
			],
		},
	}
);
