import {createSlice} from "@reduxjs/toolkit";

const studentInitialState = {
  name: '',
  age: 0
}

const studentSlice = createSlice({
  name: 'student',
  initialState: studentInitialState,
  reducers: {
    addAgeAction: state => {
      state.age += 1;
    },
    changeNameAction: (state, action) => {
      state.name = action.payload.name;
    }
  }
})

export const {addAgeAction, changeNameAction} = studentSlice.actions
export default studentSlice.reducer