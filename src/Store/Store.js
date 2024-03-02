import { configureStore  } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";


const Store = configureStore({
    reducer :{
        todos : TodoSlice
    }
})
export default Store