import { configureStore } from "@reduxjs/toolkit";
import { postslice } from "./post/post";

const store=configureStore({
    reducer:{
        post:postslice.reducer
    }
})

export default store;