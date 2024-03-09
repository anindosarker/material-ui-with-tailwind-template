import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/utils/theme/ThemeRegistry";
import GlobalProvider from "@/providers/GlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App | Salesmagic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <GlobalProvider>{children}</GlobalProvider>
        </body>
      </ThemeRegistry>
    </html>
  );
}
