import { combineReducers } from "redux";
import AuthSlice from "./AllSlices/authSlices/AuthSlice";

export const rootReducer = combineReducers({ user:AuthSlice  });
export type RootState = ReturnType<typeof rootReducer>;