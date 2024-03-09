"use client";

import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  FormLabel,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import toast from "react-hot-toast";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:\n", data);
    toast(JSON.stringify(data, null, 2));
  };
  return (
    <>
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-gray-600 bg-opacity-15 flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h4">Login</Typography>
        <Typography color="text.secondary" variant="body2">
          Don&apos;t have an account? &nbsp;
          <Link href="/auth/register" className="hover:underline text-blue-500">
            Register
          </Link>
        </Typography>
      </Stack>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <Box>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    {...field}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                </>
              )}
            />
          </Box>

          <Box>
            <FormControl variant="standard" fullWidth margin="normal">
              <FormLabel>Password</FormLabel>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
            </FormControl>
          </Box>
        </Stack>

        <Button
          fullWidth
          size="large"
          sx={{ mt: 2 }}
          type="submit"
          variant="contained"
        >
          Log in
        </Button>
      </form>
    </>
  );
}
