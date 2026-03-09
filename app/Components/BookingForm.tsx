"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import { useState } from "react";
import {
    TextField,
    Select,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    ThemeProvider,
} from "@mui/material";

import theme from "@/theme"; // adjust path as needed

export default function BookingForm() {
    type FormData = {
        from: string;
        to: string;
        pickupDate: Dayjs | null;
        pickupTime: Dayjs | null;
        passengers: string;
        luggage: string;
    };
    type Errors = Partial<{
        from: string;
        to: string;
        pickupDate: string;
        pickupTime: string;
        passengers: string;
        luggage: string;
    }>;
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

    const [formData, setFormData] = useState<FormData>({
        from: "",
        to: "",
        pickupDate: null,
        pickupTime: null,
        passengers: "1",
        luggage: "1",
    });

const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // mark this field as touched
        setTouched((prev) => ({ ...prev, [name]: true }));

        // remove error if user typed
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors: any = {};
        if (!formData.from) newErrors.from = "Pickup location is required";
        if (!formData.to) newErrors.to = "Dropoff location is required";
        if (!formData.pickupDate) newErrors.pickupDate = "Pickup date is required";
        if (!formData.pickupTime) newErrors.pickupTime = "Pickup time is required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const fieldOrder: (keyof FormData)[] = [
            "from",
            "to",
            "pickupDate",
            "pickupTime",
        ];

        for (let field of fieldOrder) {
            if (!formData[field]) {
                setErrors({ [field]: `${field === "from" ? "Pickup location" : field === "to" ? "Dropoff location" : field === "pickupDate" ? "Pickup date" : "Pickup time"} is required` });
                return; // stop at first empty field
            }
        }

        // All required fields are filled
        setErrors({});
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);

        console.log(formData);
    };

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-125 mx-auto border border-white/4 text-white rounded-2xl p-4 py-7 sm:p-6 md:p-8 flex flex-col gap-5 shadow-xl"
                >
                    <TextField
                        label="Pickup Location"
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        error={!!errors.from}
                        helperText={errors.from}
                        fullWidth
                    />

                    <TextField
                        label="Dropoff Location"
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        error={!!errors.to}
                        helperText={errors.to}
                        fullWidth
                    />

                    <DatePicker
                        label="Pickup Date"
                        value={formData.pickupDate}
                        onChange={(newValue) => {
                            setFormData((prev) => ({ ...prev, pickupDate: newValue }));
                            setTouched((prev) => ({ ...prev, pickupDate: true }));
                            setErrors((prev) => ({ ...prev, pickupDate: "" }));
                        }}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                error: !!errors.pickupDate,
                                helperText: errors.pickupDate,
                            },
                        }}
                    />

                    <TimePicker
                        label="Pickup Time"
                        value={formData.pickupTime}
                        onChange={(newValue) => {
                            setFormData((prev) => ({ ...prev, pickupTime: newValue }));
                            setTouched((prev) => ({ ...prev, pickupTime: true }));
                            setErrors((prev) => ({ ...prev, pickupTime: "" }));
                        }}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                error: !!errors.pickupTime,
                                helperText: errors.pickupTime,
                            },
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Passengers</InputLabel>
                        <Select
                            name="passengers"
                            value={formData.passengers}
                            label="Passengers"
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num} {num === 1 ? "Passenger" : "Passengers"}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Luggage</InputLabel>
                        <Select
                            name="luggage"
                            value={formData.luggage}
                            label="Luggage"
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 12, 16].map((num) => (
                                <MenuItem key={num} value={num}>
                                    {num} {num === 1 ? "bag" : "bags"}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 2,
                            borderRadius: "12px",
                            py: 1.5,
                            fontWeight: 700,
                        }}
                    >
                        {submitted ? "Booked! Check your inbox" : "Book Your Ride"}
                    </Button>
                </form>
            </LocalizationProvider>
        </ThemeProvider>
    );
}