module.exports = {
  extends: [
    "eslint:recommended",
    "defaults/configurations/google",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier"
  ],
  plugins: ["babel", "react", "jest", "prettier", "jsx-a11y"],
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
    "babel/quotes": 1
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
