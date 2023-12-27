import { combineReducers } from "redux";
import AuthSlice from "./AllSlices/authSlices/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import EmployeeSlice from "./AllSlices/EmployeeSlice";


const persistConfig = {
    key: "root",
    storage,
  };
export const rootReducer = combineReducers({ user:AuthSlice,employee:EmployeeSlice  });

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export default persistedReducer;
export type RootState = ReturnType<typeof rootReducer>;