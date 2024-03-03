import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
export const TodoAdapter = createEntityAdapter()

export const TodoSelector = TodoAdapter.getSelectors((state)=>state.Todos)

    

  const TodoSlice = createSlice({
    name : "adapter",
    initialState : TodoAdapter.getInitialState({
        deleteTodos : []
    }),
    reducers : {
        addTodo : TodoAdapter.addOne,
        addTodos : TodoAdapter.addMany,
       deleteTodo : TodoAdapter.removeOne,
     
        clearTodos : TodoAdapter.removeAll,
        updateTodo : TodoAdapter.updateOne,
        DeleteShow : (state,action) =>{
            state.deleteTodos.push(state.entities[action.payload])
              console.log("action.payload",action.payload)
               
              console.log("state",state.entities[action.payload])
            TodoAdapter.removeOne(state,action)    
        },
        Restore : (state,action) =>{
            TodoAdapter.addOne(state,action);
            state.deleteTodos = state.deleteTodos.filter(item=>item.id !== action.payload.id)
        }
            
    }
})

export default TodoSlice.reducer   
export const {addTodo ,addTodos,deleteTodo,clearTodos,updateTodo, DeleteShow,Restore} = TodoSlice.actions


