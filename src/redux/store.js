import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import contactsReducer from "./contacts/contactsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  // middleware: [],
  devTools: true,
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
});



const persistedStore = persistStore(store);

export { store, persistedStore };
