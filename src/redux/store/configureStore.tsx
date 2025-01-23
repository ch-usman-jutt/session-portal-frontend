"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { baseApi } from "../baseApi";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (gDM) => gDM().concat([baseApi.middleware]),
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
