import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "../pages/student/state/StudentSlice"

export function StoreInit() {
  return configureStore({
    reducer: {
      studentReducer
    }
  })
}