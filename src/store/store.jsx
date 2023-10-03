// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
// import searchReducer from '../reducers/searchSlice'

const store = configureStore({
  reducer: rootReducer,
  // ...other store configurations
});

export default store;
