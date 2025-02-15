// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import pluginReact from 'eslint-plugin-react';
// import daStyle from 'eslint-config-dicodingacademy';


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   daStyle,
//   {
//     rules: {
//       'quotes': ['error', 'single'], // Bisa ganti "double" jika ingin kutip ganda
//       'react/jsx-filename-extension': ['warn', { 'extensions': ['.jsx', '.tsx'] }],
//       'import/extensions': 'off',
//       'no-console': 'warn', // Aturan tambahan, bisa diubah sesuai kebutuhan
//     }
//   }
// ];

import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'quotes': ['error', 'single'], 
      'react/jsx-filename-extension': ['warn', { 'extensions': ['.jsx', '.tsx'] }],
      'import/extensions': 'off',
      'no-console': 'warn',
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  daStyle
];
