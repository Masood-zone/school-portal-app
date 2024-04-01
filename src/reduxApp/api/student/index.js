import axios from "axios";
import "../root";

export const registerStudent = async (data) =>
  await axios.post(`/students/`, data);

// This is a test function gets the students on the json-server and then checks to see if the information entered and the password match the information in the json-server.
export const studentLogin = async (data) => await axios.get(`/students/`, data);

export const updateStudent = async (data) =>
  await axios.patch(`/admin/${data.id}`, data);

export const removeStudent = async (id) => axios.delete(`/students/${id}`);
