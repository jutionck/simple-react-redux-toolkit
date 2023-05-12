import {configureStore} from "@reduxjs/toolkit";
import StudentReducer from "../pages/student/state/StudentSlice"

export function StoreInit() {
  return configureStore({
    reducer: {
      studentReducer: StudentReducer,
    }
  })
}