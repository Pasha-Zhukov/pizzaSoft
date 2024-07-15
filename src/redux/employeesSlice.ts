import { createSlice } from "@reduxjs/toolkit";
import data from "../data/employees.json";

const employeesSlice = createSlice({
  name: "employees",
  initialState: data,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { id, updatedEmployee } = action.payload;
      const index = state.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedEmployee };
      }
    },
  },
});

export const { addEmployee, updateEmployee } = employeesSlice.actions;

export default employeesSlice;
