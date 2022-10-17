# REDUX RULES SPECIFICATIONS

# DESCRIPTION

This document is an introduction of the structure of redux which refers to three typescript files. There are
type.ts, action.ts and reducer.ts. The structure of comments and the usage of redux are also mentioned in this document. Each Reducer will be defined in folders separately with its own type.ts, action.ts and reducer.ts files. A rootReducer will be defined in the `Store` folder.

# Comments

Comments are necessary in all files.
Every interface need an introduction to describe its meaning and parameters.

## Top Level/File Comments

The top-level comment is used to tell readers who are not familiar with this code what is included in this file. The general content of the file, its author, dependencies and compatibility information should be provided.

```javascript
/**
 * @file type/actions/reducer
 * @date 2020/09/21
 * @author Administrator
 * @lastModify Administrator 2020/09/21
 */
```

## Comments of interface

The comment below shows how to describe an interface. First of all, An introduction of this interface is needed. Then meanings and types of each parameters should be shown in the comment.

```js
/**
 * This is an introduction of a interface.
 * @param {type} parameter the meaning of this parameter
 * /
```

# type.ts file

This file contains all interface of types, reducers and actions, constants and an union type of actions.

## Type interface

Interfaces may needed in other files need to be shown in this file with comments. This kind of interface mostly are parts of a state in reducer.ts file or types of payload in actions.ts file. So all these interfaces are named in the form of `xxxType`.
This demo shows a FolderListType which is a part of dashboard reducer.

```js
/**
 * This interface shows the structure of folders in the database.
 * @param {string} id the id of this folder, this should be unique
 * @param {string} name the name of this folder
 * @param {string} pid the id of its parent folder
 * @param {Array<FolderListType>} children all children folders included in this folder
 */
interface FolderListType {
  id: string;
  name: string;
  pid: string;
  children: Array<FolderListType>;
}
```

After defining all type interfaces, these interfaces should be exported together.

```js
export { FolderListType };
```

## Reducer interface

This kind of interface is used to describe the state and should be exported. It may constructed by several sliced interfaces. Each type.ts file can have only one of this kind of interface. So all these interfaces are named in the form of `xxxReducer`.
This demo shows a reducer of dashboard.

```js
/**
 * This is the structure of dashboard reducer, it contains the information of all folders
 * @param {FolderListType} folderList the structure of folders
 * @param {FolderDataType} folderData the data in each folders
 */
export interface DashboardReducer {
  folderList: FolderListType;
  folderData: FolderDataType;
}
```

## Constants

All constant should be defined in this file, the name of the each constant should be all in capital letters and each word should be connected by character `_`. The value of a constant is a string of its name. There is no comment needed but the meanings of each constant should be clearly shown in the name.
Here is an example:

```JS
const CREATE_NEW_FOLDER = 'CREATE_NEW_FOLDER'
```

After defining all the constants, these constants should be exported together.

```js
export { CREATE_NEW_FOLDER };
```

## Action interface

All actions interface should be defined in this file, each action interface should contains its type and payload, and name should be in the form of `xxxAction`. There are only two members in each interface -- type and payload. The type field is in the form of `type: typeof XXX_XXX` and payload shows the data it needs.

```js
/**
 * This action will create a new folder and will change the folder list
 * @param {FolderListType} payload.folderList new folder list
 */
interface CreateNewFolderAction {
  type: typeof CREATE_NEW_FOLDER;
  payload: {
    folderList: FolderListType,
  };
}
```

After defining all the actions, these constants should be combined together and export as one which will be named in the form of `xxxActionTypes`.

```js
export type DashboardActionTypes = CreateNewFolderAction | DeleteFolderAction;
```

# actions.ts file

This file contains all dispatch actions functions.
Firstly, add top level comment and then import type.ts file in the following way

```js
import * as types from "./types";
```

Then define each function in the form as below with comments. The return type should be as same as the one defined in type.ts file.

```js
/**
 * create an create new folder action
 * @param folderList
 */
const createNewFolderAction = (
  folderList: types.FolderListType
): types.DashboardActionTypes => ({
  type: types.CREATE_NEW_FOLDER,
  payload: {
    folderList,
  },
});
```

_The name of a function may as same as the name its corresponding action interface but should start with a lower case letter_

After defining all actions, these actions should be exported together.

```js
export { createNewFolderAction, deleteFolderAction };
```

# reducer.ts file

This file contains the initial state and return new state according to dispatch actions.
Firstly, add top level comment and then import type.ts file in the following way

```js
import * as types from "./types";
```

Define the initial state:

```js
const initialState: types.DashboardReducer={
  folderList: {
    id: 'f_0',
    name: 'Demo',
    pid: 'f_-1',
    children: [],
}
```

Then export an default function to manage the return state:

```js
export default (
  state = initState,
  action: types.DashboardActionTypes
): types.DashboardReducer => {
  switch (action.type) {
    case types.CREATE_NEW_FOLDER:
      return {
        ...state,
        folderList: action.payload.folderList,
      };
    default:
      return state;
  }
```

# Usage of reducer

## Define rootReducer

A project may have several reducers. Using combineReducers to declare all reducers in one file which named rootReducer.ts.

```js
import DashboardReducer from "./Dashboard/reducer";

const rootReducer = combineReducers({
  dashboardReducer: DashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
```

## Get state

Using `useSelector` to get state and `useDispatch` to dispatch actions.

```js
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import * as types from "../../Store/Dashboard/types";
import * as actions from "../../Store/Dashboard/actions";

const dashboardState = useSelector(
  (state: RootState) => state.dashboardReducer
);
const dispatch = useDispatch();
dispatch(actions.createNewFolderAction(folderList));
```
