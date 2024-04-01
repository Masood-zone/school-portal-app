import { z } from "zod";

export const DATA = {
  indexNumber: {
    label: "Index Number",
    type: "text",
  },
  password: {
    label: "Password",
    type: "password",
  },
};

export const schema = z.object({
  indexNumber: z
    .string()
    .max(10, "Index Number should not be more than 10 numbers"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
