import * as Yup from "yup";

export const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .max(16, "Name must be at most 16 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .max(128, "Email must be at most 128 characters")
    .required("Email is required"),
  date: Yup.object().shape({
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().required("End date is required")
  }),
  comment: Yup.string().max(1000, "Comment must be at most 1000 characters")
});

export const initialValues = {
  name: "",
  email: "",
  date: {
    startDate: "",
    endDate: ""
  },
  comment: ""
};

export const initialDateRange = [
  {
    startDate: new Date(),
    endDate: null,
    key: "selection"
  }
];
