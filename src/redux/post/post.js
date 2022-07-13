import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    posts:[],
    error:''
}

export const getPosts=createAsyncThunk('post/getposts',(query)=>{
    return axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=story`,{
        "access-control-allow-origin" : "*"
    }
    ).then((res)=>res.data.hits.map((item)=>item))
})

export const postslice=createSlice({
       name:"post",
       initialState,
       extraReducers:(builder) =>{
         builder.addCase(getPosts.pending,(state)=>{
             state.loading=true;
         })
         builder.addCase(getPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
            state.loading=false;
        })
         builder.addCase(getPosts.rejected,(state)=>{
            state.loading=false;
            state.error="404 error not found"
        })
       }
})

