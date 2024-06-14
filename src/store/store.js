/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from '@reduxjs/toolkit'
import userDetail from '../features/userDetailSlice'
export const store = configureStore({
  reducer: {
    app: userDetail
  },
})