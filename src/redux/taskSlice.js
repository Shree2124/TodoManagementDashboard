import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, completed: false });
    },
    editTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    markTaskCompleted: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = true;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, markTaskCompleted, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
