import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    student: null,
    searching: false,
    error: false
};

const markSlice = createSlice({
    name: "mark",
    initialState,
    reducers: {
        studentSearchStart: ( state) =>{
            state.searching = true
          },
          studentSearchSuccess: ( state, action) =>{
            state.searching = false
            state.error = false
            state.student = action.payload
          },
          studentSearchFailure: ( state, action) =>{
            state.searching = false
            state.error = action.payload
          }
    }
})

export const { studentSearchStart, studentSearchSuccess, studentSearchFailure } = markSlice.actions
export default markSlice.reducer
