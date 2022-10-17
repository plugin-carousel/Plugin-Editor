# Project Rules Specifications

# Description

This is the Project Rules specifications, it will include project folder naming rule, class/id naming rule and code comments rule.

# Project Rules

## Project Structure Overview

```
ProjectSample/ .................... Project Folder
├─ package_backup/ ................ Package.json Backup Folder
├─ public/ ........................ Public Static Files Root Folder
│  ├─ favicon.ico ................. Project Favicon
│  ├─ icon.png .................... Project Icon
│  ├─ index.html .................. Project Production HTML File
├─ src/ ........................... Project Root Folder
│  ├─ global.d.ts ................. Typescript Third-party Package Declaration File
│  ├─ index.tsx ................... Project Root File
│  ├─ Assets/ ..................... Project Public Components Root Folder
│  │  └─ images ................... Project Images Root Folder
│  ├─ Components/ ................. Project Public Components Root Folder
│  │  ├─ index.ts ................. Unified Export Project Public Components File
│  │  └─ PublicComponentA/ ........ Project Public Component A Folder
│  │     ├─ index.tsx ............. Project Public Component A Entry File
│  │     └─ style.scss ............ Project Public Component A Style File
│  ├─ Config ...................... Project Components Config file
│  ├─ Constant/ ................... Project Resuable Style Root Folder
│  │  └─ 'name'.scss .............. Resuable Style File
│  ├─ Locales/ .................... Project Multilingual Configuration Folder
│  │  ├─ Translations ............. Resuable Style File
│  │  │  ├─ en .................... English Translations Folder
│  │  │  │  └─ translation.json ... English Translations file
│  │  │  └─ cn .................... Chinese Translations Folder
│  │  │     └─ translation.json ... Chinese Translations file
│  │  └─ i18n.ts .................. Multilingual Configuration file
│  ├─ PageLayouts/ ................ Project Page Layout Root Folder
│  │  ├─ index.ts ................. Unified Export Project Layouts File
│  │  └─ LayoutA/ ................. Project Layout A Folder
│  │     ├─ index.tsx ............. Project Public Layout A Entry File
│  │     └─ style.scss ............ Project Public Layout A Style File
│  ├─ Pages/ ...................... Project Pages Root Folder
│  │  ├─ index.ts ................. Unified Export Project Pages File
│  │  └─ PageA/ ................... Project Page A Folder
│  │     ├─ index.tsx ............. Project Page A Entry File
│  │     ├─ style.scss ............ Project Page A style
│  │     └─ Components/ ........... Project Page A Private Components Folder
│  │        ├─ index.ts ........... Unified Export Project A Private Components File
│  │        └─ PrivateComponentA/ . Project Page A Private Component A Folder
│  │           ├─ index.tsx ....... Project Page A Private Component A Entry File
│  │           └─ style.scss ...... Project Page A Private Component A Style File
│  ├─ Route/ ...................... Route Root Folder
│  │  └─ index.tsx ................ Route Management Entry File
│  └─ Store/ ...................... Store Root Folder
│     ├─ rootReducer.ts ........... Root Reducer To Combine All Module Reducer
│     ├─ rootSaga.ts .............. Root Saga
│     ├─ rootStore.ts ............. Root Store
│     └─ moduleA/ ................. ModuleA Folder
│        ├─ types.ts .............. ModuleA Action Types File
│        ├─ actions.ts ............ ModuleA Actions File
│        ├─ reducer.ts ............ ModuleA Reducer File
│        └─ sagas.ts .............. ModuleA Asynchronous Request Function Management Saga File
├─ datareachable.config.js ................. Webpack Root Folder
├─ .eslintignore .................. ESLint To Ignore Specific Files File
├─ .eslintrc.js ................... Typescript Syntax Detection Rules File
├─ .prettierrc.js ................. Code Formatting Style Rules File
├─ package.json ................... Project Configuration Information File
└─ tsconfig.json .................. Typescript Compilation Rules File


```

## Project Folder Naming Rule

All folder naming methods in the project use big camel case naming method.

### Public and Private Component and Layout Naming Rule

components or layout will be used in multiple components, such as page layouts or pages. The general naming convention will be the first name according to the ui of the component or layout, and then the second name will be based on its function, and so on, for example, there is a `button` will `fetch` `userData` from database. we can name it as `ButtonFetchUserData`, At the same time, you need to make sure that the component folder and component name are the same.

## CSS Class and ID Naming Rule

Generally, BEM naming convention will be used to name the project css class and Id. But because all the class and id names in the project have been hashed. We will use the following methods to name the class and id in the project

The `firstname` of the class will be the name of the current component, then we need to add the `element` and `modifiers` for the class/id, We will connect `firstname` and `element` with a single underscore, we will connect `modifiers` with others with double underscore. For example:

If we have a components and we want to change the header part of the component from active state to inactive state, we need to add one more class to this component when this component is at inactive state. So this class name will be `component_header__inactive`

## Code Comments Rule

### Top Level/File Comments

The top-level comment is used to tell readers who are not familiar with this code what is included in this file. The general content of the file, its author, dependencies and compatibility information should be provided.

```javascript
/**
 * @file LsOrRwPreview
 * @date 2020/06/25 13:11
 * @author Administrator
 * @lastModify Administrator 2020/06/25 14:11
 */
```

### Function Comments

`@param` tag provides various descriptions of the parameters of a function, including the parameter name, parameter data type, and description. @param {variable type} Variable name-variable description<br>
ex: <br>
@params {string | Number}<br>
@callback describes a callback function.<br>
@returns describes the return value of a function. The syntax is similar to @param.

```javascript
/**
 * Send a post Request
 * @param {string} url - request url
 * @param {string} method - request method
 * @param {Object} body - request payload
 * @callback successCallBack-requestSuccessCallBack - request success callback
 * @callback errorCallBack-requestErrorCallBack - request failure callback
 * @returns {Promise.<*>}
 */
const requestUrl = async (url, method, body, successCallBack, errorCallBack) => {
    reurn new Promise...
};
```

### Variable and Attribute Notes

@type is used to identify the type of value that an identifier may contain, or the type of value returned by a function.

```javascript
/**
 * variable description
 * @let
 * @type {number)}
 */
let foo = 1;
```

### Constant Comment

```javascript
/**
 * const description
 * @constant
 * @type {string}
 *
 */
const RED = "FF0000";
```

## Code Snippet Template

### Usage

Press command + shift + p, then search snippet in the search box. Copy and paste typescript react template to the typescriptreact.json file. Copy and paste scss template to the scss.json file.

### typescript react template

In order to make the structure of each file of the project more agreeable, please be sure to use the following snippet as the starting template for each of your tsx files

typescript.json snippet

```javascript
{
  // Place your snippets for typescript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  "Print to console": {
    "prefix": "log",
    "body": ["console.log('$1');", "$2"],
    "description": "Log output to console"
  },
  "common header part": {
    "prefix": "ch",
    "body": [
      "/**",
      "* @file $1",
      "* @date $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "* @author $2",
      "* @lastModify $2 $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "*/"
    ],
    "description": "project common header part"
  },
  "common body part": {
    "prefix": "cb",
    "body": ["/**", "* $1", "* @param {$2} $3", "*/"],
    "description": "project common header part"
  },
  "common jsx divider part": {
    "prefix": "cxd",
    "body": [
      "{/* <------------------------------------ **** $1 START **** ------------------------------------ */}",
      "{/* <------------------------------------ **** $1 END **** ------------------------------------ */}"
    ],
    "description": "jsx common divider part"
  },
  "common divider part": {
    "prefix": "cd",
    "body": [
      "/* <------------------------------------ **** $1 START **** ------------------------------------ */",
      "/* <------------------------------------ **** $1 END **** ------------------------------------ */"
    ],
    "description": " common divider part"
  },
  "common divider short part": {
    "prefix": "cds",
    "body": [
      "/* <--------------------------- * $1 START * --------------------------- */",
      "/* --------------------------- * $1 END * --------------------------- */"
    ],
    "description": " common divider part"
  },
  "common const": {
    "prefix": "cc",
    "body": ["/**", "* $1", "* @constant", "* @type {$2}", "*/"],
    "description": " const common"
  },
  "common let": {
    "prefix": "ct",
    "body": ["/**", "* $1", "* @let", "* @type {$2}", "*/"],
    "description": " const let"
  },
  "react jsx templete": {
    "prefix": "rt",
    "body": [
      "/**",
      "* @file $2",
      "* @date $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "* @author $3",
      "* @lastModify $3 $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "*/",
      "/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */",
      "/** This section will include all the necessary dependence for this tsx file */",
      "import React, { useState } from 'react';",
      "import { Row, Col } from 'antd';",
      "/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */",

      "/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */",
      "/** This section will include all the interface for this tsx file */",

      "/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */",

      "/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */",
      "const $1 = (): JSX.Element => {",
      "/* <------------------------------------ **** HOOKS START **** ------------------------------------ */",
      "/************* This section will include this component HOOK function *************/",

      "/* <------------------------------------ **** HOOKS END **** ------------------------------------ */",

      "/* <------------------------------------ **** PARAMETER START **** ------------------------------------ */",
      "/************* This section will include this component parameter *************/",

      "/* <------------------------------------ **** PARAMETER END **** ------------------------------------ */",

      "/* <------------------------------------ **** FUNCTION START **** ------------------------------------ */",
      "/************* This section will include this component general function *************/",

      "/* <------------------------------------ **** FUNCTION END **** ------------------------------------ */",
      "return (",
      "<Row>",
      "{ /* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}",
      "{ /** git the brief description for this section */}",
      "<Col> this is the section 1</Col>",
      "{ /* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}",

      "{ /* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}",
      "{ /** git the brief description for this section */}",
      "<Col> this is the section 2</Col>",
      "{ /* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}",
      "</Row>",
      ");",
      "};",
      "export default $1;",
      "/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */"
    ],
    "description": "react JSX templete"
  }
}

```

### SCSS template

In order to make sure all the project are using the same scss template, please using the following snippet in the scss.json file.

scss.json snippet

```javascript
{
  // Place your snippets for typescript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  "Print to console": {
    "prefix": "log",
    "body": ["console.log('$1');", "$2"],
    "description": "Log output to console"
  },
  "common header part": {
    "prefix": "ch",
    "body": [
      "/**",
      "* @file $1",
      "* @date $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "* @author $2",
      "* @lastModify $2 $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "*/"
    ],
    "description": "project common header part"
  },
  "common body part": {
    "prefix": "cb",
    "body": ["/**", "* $1", "* @param {$2} $3", "*/"],
    "description": "project common header part"
  },
  "common jsx divider part": {
    "prefix": "cxd",
    "body": [
      "{/* <------------------------------------ **** $1 START **** ------------------------------------ */}",
      "{/* <------------------------------------ **** $1 END **** ------------------------------------ */}"
    ],
    "description": "jsx common divider part"
  },
  "common divider part": {
    "prefix": "cd",
    "body": [
      "/* <------------------------------------ **** $1 START **** ------------------------------------ */",
      "/* <------------------------------------ **** $1 END **** ------------------------------------ */"
    ],
    "description": " common divider part"
  },
  "common divider short part": {
    "prefix": "cds",
    "body": [
      "/* <--------------------------- * $1 START * --------------------------- */",
      "/* --------------------------- * $1 END * --------------------------- */"
    ],
    "description": " common divider part"
  },
  "media queriy max": {
    "prefix": "mm",
    "body": ["@media screen and (max-width: $1) {", "}"],
    "description": " media screen less than style"
  },
  "media queriy min": {
    "prefix": "mi",
    "body": ["@media screen and (min-width: $1) {", "}"],
    "description": " media screen more than style"
  },
  "scss templete": {
    "prefix": "st",
    "body": [
      "/**",
      "* @file $2",
      "* @date $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "* @author $3",
      "* @lastModify $3 $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "*/",
      "/* <------------------------------------ **** CONSTANT IMPORT START **** ------------------------------------ */",
      "/** Import all the reference constant after this line */",
      "@import '../../Constant/breakPoint.scss';",
      "@import '../../Constant/font.scss';",
      "@import '../../Constant/color.scss';",
      "/* <------------------------------------ **** CONSTANT IMPORT END **** ------------------------------------ */",
      "/* <------------------------------------ **** SECTION1 MIXIN START **** ------------------------------------ */",
      "/** The demo mixin is ..........*/",
      "@mixin demo {}",
      "/* <------------------------------------ **** SECTION1 MIXIN END **** ------------------------------------ */",
      "/* <--------------------------- * SECTION1 * --------------------------- */",
      "/* <--------------------------- * SECTION1 * --------------------------- */"
    ],
    "description": " media screen more than style"
  }
}

```
