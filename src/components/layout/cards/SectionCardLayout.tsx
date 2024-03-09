import {
    Card,
    CardContent,
    CardHeader
} from "@mui/material";
import React from "react";

type SectionCardLayoutProps = {
  title: string;
  subtitle: string;
  avatarElementLeft: React.ReactNode;
  actionElementRight: React.ReactNode;
  children: React.ReactNode;
};

export default function SectionCardLayout({
  title,
  subtitle,
  avatarElementLeft,
  actionElementRight,
  children,
}: SectionCardLayoutProps) {
  return (
    <Card sx={{}}>
      <CardHeader
        avatar={avatarElementLeft}
        action={actionElementRight}
        title={title}
        subheader={subtitle}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
