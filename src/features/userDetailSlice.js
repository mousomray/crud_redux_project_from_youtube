import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // createSlice make state slice and createAsyncThunk handle asynconomous function 
import axios from "axios";
import { toast } from "react-toastify"; // For Toast Message

// First Step Async Thunks Area Start 

// Call Api for create user
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  try {
    const apiurl = "https://641dd63d945125fff3d75742.mockapi.io/crud"
    const response = await axios.post(apiurl, data);
    console.log("Fetching Create user data", response);
    toast.success("User Created Successfully")
    return response.data;
  } catch (error) {
    console.log("Error Fetching Create user data", error);
    toast.error("User is not created")
    return rejectWithValue(error.response.data);
  }
});

// Call Api for Read User
export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
  try {
    const apiurl = "https://641dd63d945125fff3d75742.mockapi.io/crud"
    const response = await axios.get(apiurl);
    console.log("Fetching Read user data", response);
    return response.data;
  } catch (error) {
    console.log("Error Fetching Read user data", error);
    return rejectWithValue(error.response.data);
  }
});

// Call Api for Details User
export const detailsuser = createAsyncThunk("detailsuser", async (id, { rejectWithValue }) => {
  try {
    const apiurl = `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`
    const response = await axios.get(apiurl);
    console.log("Fetching Details user data", response);
    return response.data;
  } catch (error) {
    console.log("Error Fetching Details user data", error);
    return rejectWithValue(error.response.data);
  }
});

// Call Api for Delete User
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
  try {
    const apiurl = `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`
    const response = await axios.delete(apiurl);
    console.log("Fetching delete data", response);
    toast.success("User Deleted Successfully")
    return response.data
  } catch (error) {
    console.log("Error Fetching delete data", error);
    toast.error("User is not deleted")
    return rejectWithValue(error.response.data);
  }
});

// Call Api for Update User
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
  try {
    const apiurl = `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`
    const response = await axios.put(apiurl, data);
    console.log("Fetching update data", response);
    toast.success("User Updated Successfully")
    return response.data;
  } catch (error) {
    console.log("Error Fetching update data", error);
    toast.error("User is not updated")
    return rejectWithValue(error.response.data);
  }
});
// Async Thunks Area Done

// createSlice area start
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    getData: [],
  },


  extraReducers: (builder) => {
    builder
      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Show User
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Show User
      .addCase(detailsuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailsuser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(detailsuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.meta.arg; // accessing the id passed in the action payload
        state.users = state.users.filter((user) => user.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default userDetailSlice.reducer;
