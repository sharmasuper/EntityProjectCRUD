import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const TodoAdapter = createEntityAdapter()
 export const TodoSelectors = TodoAdapter.getSelectors((state)=>state.todos)


const TodoSlice = createSlice({
    name : "todos",
    initialState :TodoAdapter.getInitialState({
        deletedTodos :[]
    }),
    reducers : {
        addTodo : TodoAdapter.addOne ,
        addTodos : TodoAdapter.addMany ,
        // deleteTodo : TodoAdapter.removeOne,
        deleteTodo(state,action){
            state.deletedTodos.push(state.entities[action.payload])
         TodoAdapter.removeOne(state,action)
        }, 
        clearTodos : TodoAdapter.removeAll,
        updateTodo : TodoAdapter.updateOne,
         restoreTodo(state,action){
            TodoAdapter.addOne(state,action);
            state.deletedTodos = state.deletedTodos.filter(item=>item.id !== action.payload.id)
         }
    }
})

export default TodoSlice.reducer

export const {addTodo,addTodos,deleteTodo,clearTodos,updateTodo,restoreTodo} = TodoSlice.actions