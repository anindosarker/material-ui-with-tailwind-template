"use client";

import Link from "next/link";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Stack,
  FormLabel,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { signIn, signUp } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      fullWidth
      size="large"
      sx={{ mt: 2 }}
      type="submit"
      variant="contained"
      color="primary"
      disabled={pending}
    >
      Sign up
    </Button>
  );
}

export default function RegisterServerAction({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
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
        <Typography variant="h4">Register Account</Typography>
        <Typography color="text.secondary" variant="body2">
          Already have an account? &nbsp;
          <Link href="/auth/login" className="hover:underline text-blue-500">
            Login
          </Link>
        </Typography>
      </Stack>
      <form action={signUp}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormLabel>Email</FormLabel>
          <TextField
            name="email"
            placeholder="you@example.com"
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <FormLabel>Password</FormLabel>
          <OutlinedInput
            name="password"
            placeholder="••••••••"
            required
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
        </Stack>

        <SubmitButton />
      </form>
      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </div>
  );
}
