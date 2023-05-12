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
      return Object.assign({}, state, {
        age: state.age + 1
      })
    },
    changeNameAction: (state, action) => {
      return Object.assign({}, state, {
        name: action.payload.name
      })
    }
  }
})

export const {addAgeAction, changeNameAction} = studentSlice.actions
export default studentSlice.reducer