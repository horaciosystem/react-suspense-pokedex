module.exports = {
  extends: ["standard", "plugin:jest/recommended", "prettier", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "jest", "prettier", "jsx-a11y"],
  env: {
    "jest/globals": true
  },
  rules: {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-no-undef": "error",
    "react/react-in-jsx-scope": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}
