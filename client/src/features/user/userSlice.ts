import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { loginUser } from './loginUser'
import { User } from './userType'


export interface UserState {
  value: User | null;
  status: 'idle' | 'loading' | 'failed'
}

const initialState: UserState = {
  value: null,
  status: 'idle',
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
  },
})


export const userSelector = (state: RootState) => state.user.value


export default userSlice.reducer