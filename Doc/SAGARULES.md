# SAGA RULES SPECIFICATIONS

# DESCRIPTION

This document is an introduction of the structure of saga which refers to three typescript files. There are
saga.ts The structure of comments and the usage of saga are also mentioned in this document. Each saga will be defined in folders separately with its own saga.ts files. A rootSaga will be defined in the `Store` folder.

# Comments

Comments are necessary in all files.
Every interface need an introduction to describe its meaning and parameters.

## Top Level/File Comments

The top-level comment is used to tell readers who are not familiar with this code what is included in this file. The general content of the file, its author, dependencies and compatibility information should be provided.

```javascript
/**
 * @file type/actions/saga
 * @date 2020/09/21
 * @author Administrator
 * @lastModify Administrator 2020/09/21
 */
```

## Comments of saga generation function

The comment below shows how to describe an saga generation function. First of all, An introduction of this saga is needed. Then meanings and types of each parameters should be shown in the comment.

```js
/**
 * This is an introduction of the saga generation function1.
 * @param {type} parameter the meaning of this parameter
 * */
function* handleDataFetch1(parameter) {
  yield put(demo);
}
/**
 * This is an introduction of the saga generation function2.
 * @param {type} parameter the meaning of this parameter
 * */
function* handleDataFetch2(parameter) {
  yield put(demo);
}
```

## Comments of saga watch generation function

Each saga generation function need a watching generation function to triger. Please write commonts for each watching generation function to descripe the purpose of them, All the types for the action will be get from the typs.ts file.

```js
import * as types from "./types";

/**
 * This is an introduction of the saga watching generation function 1.
 * */
function* watchAsyncTasks() {
  yield [
    takeLatest(types.dataFetch1, handleDataFetch1),
    takeLatest(types.dataFetch2, handleDataFetch2),
  ];
}

or;

/**
 * This is an introduction of the saga watching generation function 1.
 * */
function* watchAsyncTasks1() {
  yield takeLatest(types.dataFetch1, handleDataFetch1);
}
function* watchAsyncTasks2() {
  yield takeLatest(types.dataFetch2, handleDataFetch2);
}

or;

/**
 * This is an introduction of the saga watching generation function 1.
 * */
function* watchAsyncTasks() {
  yield takeLatest(types.dataFetch1, handleDataFetch1);
  yield takeLatest(types.dataFetch2, handleDataFetch2);
}
```

## Export your saga, prepare using in rootSaga.js

When you finish develop your saga.ts file, don't forget to export them

```js
const sagas = [fork(watchAsyncTasks), fork(watchAsyncTasks2)];
export default sagas;
```

## Import your saga in rootSaga.ts

After you success write all the saga.ts file, don't forget to import all the separate saga.ts into the rootSaga.js file.

```js
import { all } from "redux-saga/effects";
import exampleSagas1 from "/path";
import exampleSagas2 from "/path";

export default function* rootSaga(): Generator {
  try {
    // this is where the saga combine into the rootSaga
    yield all([...exampleSagas, ...exampleSagas2]);
  } catch (err) {
    // This is where error monitoring should go
    console.log("error caught in rootsaga::", err);
  }
}
```

## More official documentation

If you have any problem with using saga in the project, plase go to [saga official website](https://redux-saga.js.org/) to check the documentations.
