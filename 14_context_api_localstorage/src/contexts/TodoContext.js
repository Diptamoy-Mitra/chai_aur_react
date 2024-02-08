import { createContext, useContext } from "react";



export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,

    }
  ],
  addTodo: (todo) => { },
  updateTodo: (id, todo) => { },
  deleteTodo: (id) => { },
  toggleComplete: (id) => {},
})


export const useTodo = () => {
  return useContext(TodoContext)  //jiske bare mai baat karunga wo pass karenge

}

export const Todoprovider = TodoContext.Provider;
