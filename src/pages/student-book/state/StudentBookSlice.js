import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  student: '',
  books: [],
}

const studentBookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addStudentBookAction: (state, action) => {
      state.student = action.payload.student;
      state.books.push(action.payload.book);
    },
  }
});

export const { addStudentBookAction } = studentBookSlice.actions
export default studentBookSlice.reducer;