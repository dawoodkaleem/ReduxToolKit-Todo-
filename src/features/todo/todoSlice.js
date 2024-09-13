import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

export const todoSclice = createSlice({
  name: " todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload, "checking value");
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      console.log(action.payload.id);
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
  },
});
export const { updateTodo, addTodo, removeTodo } = todoSclice.actions;

export default todoSclice.reducer;
