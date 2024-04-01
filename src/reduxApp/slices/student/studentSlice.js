import { createSlice } from "@reduxjs/toolkit";
import { register, loginStudent, updateStudentInfo } from "./studentFxn";

const student = JSON.parse(localStorage.getItem("student"));

const initialState = {
  student: student || null,
  studentDetails: [],
  loading: false,
  success: false,
  error: null,
  isAuthenticated: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetData: (state) => {
      state.loading = false;
      state.success = false;
      state.student = null;
      state.studentDetails = [];
      state.isAuthenticated = false;
      localStorage.removeItem("student");
    },
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.student = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.loading = false;
        state.studentDetails = [];
        state.error = action.error.message;
      })
      .addCase(updateStudentInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStudentInfo.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateStudentInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, resetData } = studentSlice.actions;
export default studentSlice.reducer;
