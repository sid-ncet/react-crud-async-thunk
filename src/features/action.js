/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
//create a data
export const createUser = createAsyncThunk("createUser1", async (data) => {
  console.log("data", data);
  const response = await fetch(
    "https://6628b63654afcabd0736a5ed.mockapi.io/crud",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});
//read the data
export const showUser = createAsyncThunk("showUser", async () => {
  const response = await fetch(
    "https://6628b63654afcabd0736a5ed.mockapi.io/crud"
  );
  try {
    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    return error;
  }
});
//delete the data
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const response = await fetch(
    `https://6628b63654afcabd0736a5ed.mockapi.io/crud/${id}`,
    {
      method: "DELETE",
    }
  );
  try {
    const result = await response.json();
    console.log("deleteResult", result);
    return result;
  } catch (error) {
    return error;
  }
});
//update data
export const updateUser= createAsyncThunk("updateUser", async({userId,userData})=> {
  const response= await fetch(`https://6628b63654afcabd0736a5ed.mockapi.io/crud/${userId}`,
  {
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }
)
try{
  const result= await response.json();
  console.log('updateUser', result)
  return result;
}
catch(error){
  return error;
}
})