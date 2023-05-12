import {createSlice} from "@reduxjs/toolkit";

const studentInitialState = {
  name: '',
  age: 0
}

const studentSlice = createSlice({
  name: 'student',
  initialState: studentInitialState,
  reducers: {
    addAgeAction: (state, action) => {
      const { age } = state;
      return {
        ...state,
        age: age + 1,
      };
    },
    changeNameAction: (state, { payload }) => {
      return { ...state, name: payload.name };
    }
  }
})

export const {addAgeAction, changeNameAction} = studentSlice.actions
export default studentSlice.reducer