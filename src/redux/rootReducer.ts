import { combineReducers } from "redux";
import AuthSlice from "./AllSlices/authSlices/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
  };
export const rootReducer = combineReducers({ user:AuthSlice  });

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export default persistedReducer;
export type RootState = ReturnType<typeof rootReducer>;