module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "standard",
    "plugin:jest/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors"
  ],
  plugins: ["react", "jest", "prettier", "jsx-a11y"],
  rules: {
    "require-jsdoc": [
      2,
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false
        }
      }
    ],
    "react/prop-types": 0,
    "babel/new-cap": 1,
    "babel/no-invalid-this": 0,
    "babel/quotes": 1,
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2
  },
  globals: {
    fetch: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  }
}
