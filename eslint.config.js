import { defineConfig } from "eslint/config";
import eslintConfigESLint from "eslint-config-eslint";

export default defineConfig([eslintConfigESLint]);

/*

<--- USE THIS IN CASE YOU WANNA TEST STUFF  AND ALSO INSTALL eslint-plugin-jest (--save-dev of course) --->
<--- ALSO MAKE SURE TO FOLLOW THE STEPS MENTIONED IN "USING BABEL" IN THE JEST GETTING STARTED DOCS --->

import pluginJest from "eslint-plugin-jest";

export default defineConfig([
	eslintConfigESLint,
	{
		files: ["./src/*.test.js"],
		plugins: { jest: pluginJest },
		languageOptions: {
			globals: pluginJest.environments.globals.globals,
		},
		rules: {
			"jest/no-disabled-tests": "warn",
			"jest/no-focused-tests": "error",
			"jest/no-identical-title": "error",
			"jest/prefer-to-have-length": "warn",
			"jest/valid-expect": "error",
		},
	},
]);

*/
