import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  initialValues,
  bookingSchema,
  initialDateRange
} from "./bookingForm.config.js";
import Button from "../button/Button.jsx";
import { DateRange } from "react-date-range";
import { formatDate } from "../../utils/formatDateForm.js";
import styles from "./BookingForm.module.css";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookingForm = ({ onSubmit }) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
    setDateRange(initialDateRange);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Book your car now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={bookingSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={styles.field}>
              <Field name="name" placeholder="Name*" className={styles.input} />
              <ErrorMessage
                name="name"
                component="p"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <Field
                name="email"
                placeholder="Email*"
                type="email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="p"
                className={styles.error}
              />
            </div>
            <div className={styles.field}>
              <p
                onClick={() => setIsDateOpen(!isDateOpen)}
                className={styles.input}
              >
                {values.date.endDate === ""
                  ? "Booking date"
                  : `${values.date.startDate} - ${values.date.endDate}`}
              </p>
              {isDateOpen && (
                <DateRange
                  className={styles.dateRange}
                  name="date"
                  editableDateInputs={true}
                  onChange={(item) => {
                    const { startDate, endDate } = item.selection;

                    setDateRange([item.selection]);
                    setFieldValue("date", {
                      startDate: formatDate(startDate),
                      endDate: formatDate(endDate)
                    });

                    if (startDate && endDate) {
                      setIsDateOpen(false);
                    }
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                />
              )}
              <ErrorMessage
                name="date"
                component="p"
                className={styles.error}
              />
            </div>

            <Field
              name="comment"
              placeholder="Comment"
              as="textarea"
              rows={3}
              className={styles.input}
            />

            <Button className={styles.button} type="submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default BookingForm;
