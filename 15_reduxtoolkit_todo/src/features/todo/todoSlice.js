import { createSlice, nanoid } from "@reduxjs/toolkit";

// reducer which is just functionalities this is reducer

//starting stores structure
const initialState = {
  todos: [],


}

// function sayHello(){
//   console.log("Hello")
// }


//state gives access the values or situations of a state and chage the states //current state
//actions recieves values(objects) for call methods //datapass jo ho raha hai
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo) //update states 
      {console.log(state.todos)}
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload) //no match wala gayeb ho jayega
    },

    // Added update todo functionality so the user can also update the todos.
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );
    }
  }
})

//for individually access functionalities
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

