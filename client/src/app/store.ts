import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import imagesSlice from '../features/images/imagesSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    images: imagesSlice
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
