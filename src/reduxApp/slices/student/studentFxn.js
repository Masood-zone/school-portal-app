import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  studentLogin,
  registerStudent,
  updateStudent,
  removeStudent,
} from "../../api/student";

export const register = createAsyncThunk(
  "student/register-student",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerStudent(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const loginStudent = createAsyncThunk(
  "student/student-login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await studentLogin(payload);
      const students = response.data;
      const student = students.find(
        (student) =>
          student.password === payload.password &&
          student.indexNumber === payload.indexNumber
      );
      console.log("This is the student: ", student);
      if (!student) {
        console.log("Not found!");
        return rejectWithValue("Invalid login credentials");
      } else {
        localStorage.setItem("student", JSON.stringify(student));
        return student;
      }
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStudentInfo = createAsyncThunk(
  "student/update-student",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateStudent(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "student/remove-student",
  async (id) => await removeStudent(id)
);
