// Basic Store Setup ....
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {},
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
