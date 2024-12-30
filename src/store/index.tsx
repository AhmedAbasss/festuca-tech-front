 import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';  
const rootReducer = combineReducers({
    themeConfig: themeConfigSlice
});

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware() 
    ,
  });

export type IRootState = ReturnType<typeof rootReducer>;
