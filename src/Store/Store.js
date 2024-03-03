import { configureStore  } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
const Store = configureStore({
    reducer :{
        Todos :TodoSlice
    }
})
export default Store  