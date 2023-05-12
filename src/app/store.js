import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "../pages/student/state/StudentSlice"
import bookReducer from "../pages/student-book/state/StudentBookSlice"

export function StoreInit() {
  return configureStore({
    reducer: {
      studentReducer,
      bookReducer,
    }
  })
}