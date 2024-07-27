import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserRedux from "./userRedux"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Config for redux-persist
const persistConfig = {
  key: "alpha96",
  version: 1,
  storage,
};

// Combine reducers (ensure UserRedux is properly defined and imported)
const rootReducer = combineReducers({ user: UserRedux });

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
