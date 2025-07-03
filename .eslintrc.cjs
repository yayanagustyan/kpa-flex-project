module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
    mongo: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript',
    'plugin:security/recommended',
    'plugin:storybook/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.d.ts', '.ts', '.vue'],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    $: true,
    React: true,
    Vue: true,
    mobx: true,
    Timezone: true,
    timezone: true,
    PRICE_OF_2020: true,
    PRICE_OF_DQ: true,
    IS_SCOUTVIEW2_ENABLED: true,
    MOBILE_WIFI_DEBUG: true,
    libraryCustomerId: true,
    freeCustomerId: true,
    moment: true,
    AuthError: true,
    ReError: true,
    JQuery: true,
    _: true,
  },
  plugins: [
    'vue',
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: [
    'node_modules/', 'scripts/', 'spike/',
    '**/libs/**', '**/jquery/**', '**/lodash/**', '**/bootstrap/**',
    '**/*.min.js',
    '**/moment.js',
    '**/tablesorter.js',
    '**/*jquery*',
    '**/*.json',
    '**/*.less',
    '**/*.css',
    '**/*.rake',
    '**/*.ejs',
    '**/*.cssbundle',
    '**/*.jsbundle',
    '**/*.md',
    '**/*.sql',
    'modules/s3-proxy/',
  ],
  rules: {
    ...compatibilityRulesForProject(),
    ...optionalPreferences(),
    ...downgradeCommonErrorsForInitialMigration(),
    ...typescriptPreferences(),
    ...securityOverrides(),
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      'prefer-destructuring': 'off',
    },
  }],
};

function typescriptPreferences() {
  return {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': 'off',
    // use typescript indents
    '@typescript-eslint/indent': ['error', 2],
    indent: 'off',
    camelcase: 'off',
    'global-require': 'off',
    'no-explicit-any': 'off',
    'vue/no-mutating-props': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'lines-between-class-members': 'off',
    'no-unused-vars': 'off',
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
  };
}

function compatibilityRulesForProject() {
  return {
    // correctly lints our nested package "modules" directory
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    // allows using "console."
    'no-console': 'off',
    // prevents things like `customer._id` from being "wrong"
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['warn', { props: false }],
    'no-throw-literal': 'off',
    'consistent-return': 'warn',
    'no-new': 'warn',
    'no-empty': 'off',
    'object-curly-newline': ['error', {
      consistent: true,
    }],
    'prefer-rest-params': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-spread': 'warn',
    'new-cap': 'warn',
    'import/order': 'warn',
    'no-useless-escape': 'warn',
    'no-async-promise-executor': 'warn',
    'prefer-promise-reject-errors': 'off',
    'import/no-dynamic-require': 'off',
    'no-multi-str': 'off',
    'no-continue': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: false,
    }],
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'no-alert': 'off',
    'no-useless-return': 'off',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
    }],
    'import/no-cycle': ['warn', { maxDepth: 3 }],
  };
}

function optionalPreferences() {
  return {
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'max-len': ['warn', { code: 120, tabWidth: 2, ignoreStrings: true }],
    'vue/no-mutating-props': 'warn',
    'no-use-before-define': 'off',
    'vue/html-indent': 'warn',
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-closing-bracket-newline': ['warn', {
      singleline: 'never',
      multiline: 'always',
    }],
  };
}

function securityOverrides() {
  return {
    'security/detect-object-injection': 'off',
  };
}

function downgradeCommonErrorsForInitialMigration() {
  return {
    'no-await-in-loop': 'warn',
    'newline-per-chained-call': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-shadow': 'warn',
    'no-unused-vars': 'warn',
    'global-require': 'warn',
    'block-scoped-var': 'warn',
    'no-return-assign': 'warn',
    'no-sequences': 'warn',
    'no-unused-expressions': 'warn',
    'no-mixed-operators': 'warn',
    'no-cond-assign': 'warn',
    'no-plusplus': 'warn',
    eqeqeq: 'warn',
    camelcase: 'warn',
    'no-var': 'warn',
    'vars-on-top': 'warn',
    'no-undef': 'warn',
    'no-void': 'warn',
    'no-multi-assign': 'warn',
    radix: 'warn',
    'no-nested-ternary': 'warn',
    'no-restricted-globals': 'warn',
    'no-bitwise': 'warn',
    'class-methods-use-this': 'warn',
    'no-restricted-syntax': 'warn',
    'guard-for-in': 'warn',
    'array-callback-return': 'warn',
    'no-undef-init': 'warn',
    'no-redeclare': 'warn',
    'no-prototype-builtins': 'warn',
    'import/no-unresolved': 'warn',
    'no-extend-native': 'warn',
    'no-restricted-properties': 'warn',
    'brace-style': 'warn',
    'no-useless-constructor': 'off',
    'max-classes-per-file': 'off',
    'prefer-const': 'warn',
  };
}
