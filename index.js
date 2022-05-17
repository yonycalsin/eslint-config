module.exports = {
  configs: {
    react: {
      plugins: ["simple-import-sort"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Side effect imports.
              ["^\\u0000"],
              // Packages. `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal modules.
              ["^~/?\\w"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.css$"],
            ],
          },
        ],
        "simple-import-sort/exports": "error"
      },
    },
    node: {
      plugins: ["simple-import-sort"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Side effect imports.
              ["^\\u0000"],
              // Packages. related packages come first.
              ["^lodash", "^@?\\w"],
              // Internal modules.
              ["^~/?\\w"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
            ]
          }
        ],
        "simple-import-sort/exports": "error"
      }
    },
  },
};
