import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import worksReducer from './Works'

const store = configureStore({
  reducer: {
    works: worksReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
