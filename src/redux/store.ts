import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { RootState, rootReducer } from './rootReducer' 

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;