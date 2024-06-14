/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, showUser, updateUser } from "./action";
export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle pending, fulfilled, and rejected actions for createUser
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
     //show all user data
    // Handle pending, fulfilled, and rejected actions for showUser
    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //delete all user data 
    builder.addCase(deleteUser.pending,(state)=>{
      state.loading= true;
    })
    builder.addCase(deleteUser.fulfilled,(state, action)=>{
      state.loading= false;
      state.users= state.users.filter((user)=> user.id!==action.payload.id)
    })
    builder.addCase(deleteUser.rejected,(state,action)=>{
      state.loading=false;
      state.error= action.payload
    })
    //update all user data
    builder.addCase(updateUser.pending,(state)=>{
      state.loading= true;
    })
    builder.addCase(updateUser.fulfilled,(state, action)=>{
      state.loading= false;                                      
      console.log('updateAction', action.payload)
      const updateNewUser=action.payload;
      state.users=state.users.map((data)=>data.id===updateNewUser.id? updateNewUser:data)
    })
  },
});

export default userDetailSlice.reducer;
