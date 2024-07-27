# Redux Toolkit implementation

## Installation
1. Install the following npm packages `@reduxjs/toolkit` and `react-redux` 

## Setup the global redux store:
1. To add global store, create `store.js` file and configure store with the help of `configureStore` function which take reducer configuration.
2. Import reducers and add them to store configuration.

```
import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
    }
});
```

3. Import the Provider and store in top-level level `index.js` file
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
4. Now pass the store object with the help of Context API feature and wrap the `<App />` with `<Provider store={store}>`.
5. Now store will be available to the application as the global state,
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
## Create slices from redux store object
1. Create `slices` from splitting the redux state object in to multiple slices of state.
2. Slice is collections of reducers logics and actions for single feature of this application.
```
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        name
                    }
                }
            }
        }
    }
})
export default usersSlice.reducer;
```

## Create selector
1. Create and export `Selector` in the slice file. So that way if the shape of state every changes then we don't need to change each components.
```
export const selectAllUsers = (state) => state.users;
```