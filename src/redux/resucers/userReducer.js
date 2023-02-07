
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users:[],
    loading:false,
    error:null,
    userDetails:null
}
// export const fetchUser = createAsyncThunk(
//     "user/fetch",  
//     async () => {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//         return response.data
//       }
// )
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUsers :(state, action)=>{
            state.users = action.payload
        },
        getDetails:(state,action)=>{
            state.userDetails = action.payload
        }

    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchUser.pending,(state,action)=>{
    //         state.loading = true
    //     })
    //     builder.addCase(fetchUser.fulfilled,(state,action)=>{
    //         console.log("ac===",action);
    //         state.users = action.payload
    //         state.loading= false
    //     })
    //     builder.addCase(fetchUser.rejected,(state,action)=>{
    //         state.error = action.payload
    //         state.loading= false
    //     })
    // }
    
})

export default userSlice.reducer

export const {getUsers,getDetails}= userSlice.actions