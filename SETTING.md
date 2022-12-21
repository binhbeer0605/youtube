# Bắt đầu với Create React App

Dự án này đã được khỏi tạo với [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app ${name-project}}`

## 1. Cài đặt [customize-cra](https://www.npmjs.com/package/customize-cra) & [react-app-rewired](https://github.com/timarney/react-app-rewired/) để tùy chỉnh cấu hình Webpack

### 1.1 Install

`npm`

```
npm i customize-cra react-app-rewired -D
```

`yarn`

```
yarn add customize-cra react-app-rewired -D
```

### 1.2 Tạo file `config-overrides.js` tại thư mục gốc (root directory)

```javascript
/* config-overrides.js */

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
};
```

### 1.3 'Flip' các lệnh gọi hiện có từ `react-scripts` trong phần `npm` scripts các mục start, build và test trong thư mục `package.json`

```diff
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

Note: **Không** 'Flip' lệnh gọi `eject` script
Lệnh này chỉ được chạy một lần cho một dự án, sau đó bạn được trao toàn quyền kiểm soát cấu hình webpack khiến `react-app-rewired` không còn cần thiết nữa
Không có tùy chọn cấu hình nào để tua lại tập lệnh `eject`

## 2. Cài đặt [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

### 2.1 Install

`npm`

```
npm install babel-plugin-module-resolver -D
```

`yarn`

```
yarn add babel-plugin-module-resolver -D
```

### 2.2 Tạo file `.babelrc` tại thư mục gốc (root directory)

```json
{
    "plugins": [
        [
            "module-resolver",
            {
                "alias": {
                    "@": "./src"
                }
            }
        ]
    ]
}
```

### 2.3 Editors autocompletion. Tạo file `jsconfig.json` tại thư mục gốc (root directory)

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["src/*"]
        }
    }
}
```

### 2.4 Tùy chỉnh file `config-overrides.js`

File `.babelrc` là file cấu hình cho thư viện babel. Nhưng với công cụ create-react-app thì không tự động load file vào cấu hình webpack. Chúng ta phải tùy chỉnh cấu hình webpack thì nó sẽ tự động load file `.babelrc`

```javascript
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
```

## 3. Cài đặt và cấu hình [Prettier](https://prettier.io/) (format code theo tiêu chuẩn)

### 3.1 Install extension Prettier - Code formatter

### 3.2 Tạo file `.prettierrc` tạo thư mục gốc (root directory)

```json
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "all",
    "useTabs": false,
    "vueIndentScriptAndStyle": false
}
```

### 3.3 Tạo `.vscode/settings.json` tại thư mục gốc (root directory)

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "json.schemas": [
        {
            "$schema": "https://json.schemastore.org/jsconfig"
        }
    ]
}
```

Mỗi khi lưu file (Ctrl+S) thì sẽ lấy cấu hình `.prettier`

## 4. Cấu hình sử dụng CSS/SASS

-   [Reset CSS](https://www.npmjs.com/package/normalize.css?activeTab=versions)
    `npm install normalize.css`
-   SASS
    `npm install sass -D`

## 5. Cấu hình Router và xây dựng cơ chế tải layout

### 5.1 Cài đặt [`react-router-dom`](https://reactrouter.com/en/main)

`npm`

```
npm install react-router-dom
```

`yarn`

```
yarn add react-router-dom
```
