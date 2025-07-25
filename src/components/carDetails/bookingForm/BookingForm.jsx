import { useState } from "react";
import { Box, Input, Typography } from "@mui/material";
import dayjs from "dayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "../../button/Button.jsx";
import styles from "./BookingForm.styles.js";

const BookingForm = ({ sendBookingData }) => {
  const [date, setDate] = useState([dayjs(new Date()), null]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const bookingData = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: {
        startDate: date[0]?.format("DD-MM-YYYY"),
        endDate: date[1]?.format("DD-MM-YYYY") || null
      },
      comment: formData.get("comment")
    };

    console.log("Booking data:", bookingData);
    sendBookingData();
    e.target.reset();
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formHeader}>
        <Typography variant="h3" sx={styles.formHeaderTitle}>
          Book your car now
        </Typography>
        <Typography sx={styles.formHeaderDescription}>
          Stay connected! We are always ready to help you.
        </Typography>
      </Box>
      <Box>
        <form style={styles.form} onSubmit={handleSubmit}>
          <Input
            sx={styles.formInput}
            name="name"
            placeholder="Name*"
            autoComplete="off"
            disableUnderline
            required
          />
          <Input
            sx={styles.formInput}
            name="email"
            type="email"
            pattern="^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$"
            placeholder="Email*"
            autoComplete="off"
            disableUnderline
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              sx={styles.datePicker}
              name="date"
              minDate={dayjs(new Date())}
            />
          </LocalizationProvider>

          <Input
            sx={styles.formInput}
            multiline
            rows={3}
            name="comment"
            placeholder="Comment"
            autoComplete="off"
            disableUnderline
          />
          <Button style={styles.formButton} type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BookingForm;
