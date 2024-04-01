import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import studentReducer from "../slices/student/studentSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedStudentReducer = persistReducer(persistConfig, studentReducer);

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    student: persistedStudentReducer,
  },
});

export const persistor = persistStore(store);

export default store;
