"use client";

import { Typography, TextField, Button, Box, Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { DatePicker } from "@mui/x-date-pickers";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  birth_date: z.string().optional(),
  campaign_id: z.string().optional(),
  company_name: z.string().optional(),
  company_website: z.string().optional(),
  contact_email: z.string().email(),
  description: z.string().optional(),
  first_name: z.string().min(1, "First name is required"),
  industry: z.string().optional(),
  interests: z.string().optional(),
  job_title: z.string().optional(),
  last_name: z.string().min(1, "Last name is required"),
  location: z.string().optional(),
  person_linkedin_url: z.string().optional(),
  phone: z.string().optional(),
  problem: z.string().optional(),
  reviews: z.string().optional(),
  selected_opener: z.string().optional(),
  solution: z.string().optional(),
  user_id: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

export default function AddContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      contact_email: "",
      birth_date: "",
      phone: "",
      person_linkedin_url: "",
      location: "",
      company_name: "",
      company_website: "",
      industry: "",
      interests: "",
      job_title: "",
      description: "",
      problem: "",
      solution: "",
      reviews: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (values: FormSchema) => {
    console.log("🚀 ~ onSubmit ~ values:\n", values);
    toast(JSON.stringify(values, null, 2));
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          <strong>Welcome to our Contact Email Addition Service.</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          This service allows you to add individual contact email details along
          with relevant information. The data you provide here will be securely
          stored and can be utilized later for lead generation purposes, helping
          you to grow your business. Please ensure the information you provide
          is accurate to ensure optimal results when using these leads.
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>

      {/* Form with react hook form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  error={!!errors.first_name}
                  helperText={
                    errors.first_name ? errors.first_name.message : null
                  }
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  error={!!errors.last_name}
                  helperText={
                    errors.last_name ? errors.last_name.message : null
                  }
                />
              )}
            />

            <Controller
              name="contact_email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Contact Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  error={!!errors.contact_email}
                  helperText={
                    errors.contact_email ? errors.contact_email.message : null
                  }
                />
              )}
            />
            <Controller
              name="birth_date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Box
                  sx={{
                    pt: 2,
                    pb: 1.2,
                  }}
                >
                  <DatePicker
                    slotProps={{
                      textField: {
                        fullWidth: true,
                      },
                    }}
                    label="Birth Date"
                    value={value ? new Date(value) : null}
                    onChange={(date) => onChange(date?.toISOString() || null)}
                  />
                </Box>
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="person_linkedin_url"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="LinkedIn URL"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />

            <Controller
              name="problem"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Problem"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />

            <Controller
              name="solution"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Solution"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="company_name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Company Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="company_website"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Company Website"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="industry"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Industry"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="interests"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Interests"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="job_title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="location"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Location"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="reviews"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Reviews"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: 2,
          }}
          disabled={Object.keys(errors).length > 0}
        >
          Add Contact
        </Button>
      </form>
    </Box>
  );
}
