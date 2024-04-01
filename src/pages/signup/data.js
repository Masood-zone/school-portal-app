import { z } from "zod";

export const DATA = {
  fullname: {
    label: "Full Name",
    type: "text",
  },
  indexNumber: {
    label: "Index Number",
    type: "text",
  },
  password: {
    label: "Password",
    type: "password",
  },
  confirmpassword: {
    label: "Confirm Password",
    type: "password",
  },
};

export const schema = z
  .object({
    fullname: z.string().min(3, "Full name should have at least 3 characters"),
    indexNumber: z
      .string()
      .max(10, "Index Number should not be more than 10 numbers"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmpassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
