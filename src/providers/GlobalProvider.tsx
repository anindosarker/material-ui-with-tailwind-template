"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import ModalProvider from "mui-modal-provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 2000,
          },
        }}
      />
      <NextTopLoader
        color={"#9700FC"}
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #9700FC,0 0 5px #9700FC"
      />
      <ModalProvider>{children}</ModalProvider>
    </LocalizationProvider>
  );
}
