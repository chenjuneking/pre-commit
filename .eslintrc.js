module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [ // 缩进
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [ // 引号
      "error",
      "single"
    ],
    "semi": [ // 分号
      "error",
      "never"
    ]
  }
};
