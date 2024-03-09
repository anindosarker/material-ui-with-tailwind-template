"use client";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Helper } from "@/utils/helper/common";
// import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { LINKS, PLACEHOLDER_LINKS } from "@/utils/routes/routes";

export const DRAWER_WIDTH = 260;

export default function Sidebar() {
  const router = useRouter();
  const params = usePathname();

  return (
    <Drawer
      sx={{
        display: { xs: "none", sm: "none", md: "none", lg: "flex" },
        color: "text.sidebar",
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          zIndex: 200,
          px: 1,
          backgroundColor: "background.sidebar",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          py: 3,
        }}
      >
        <Box
          alignItems={"center"}
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"center"}
          gap={1}
          width={"100%"}
        >
          <Image src="/favicon.ico" height={80} width={80} alt="logo" />
          <Typography fontWeight={700}>App Title.</Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {LINKS.map(({ text, href, icon: Icon }) => {
          const isActive = Helper.url.isActive(params as string, href);
          return (
            <ListItem
              key={href}
              disablePadding
              sx={{
                color: isActive ? "primary.main" : "",
                fontWeight: isActive ? 800 : 600,
              }}
            >
              <ListItemButton
                component={Link}
                href={href}
                sx={{
                  fontWeight: isActive ? 800 : 600,
                  borderRadius: 20,
                }}
              >
                <ListItemIcon>
                  <Icon
                    sx={{
                      color: isActive ? "primary.main" : "",
                      fontSize: "20px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    fontSize: "8px",
                    fontWeight: isActive ? 800 : 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ mt: "auto" }} />
      <List>
        {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => toast("sign out")}
            sx={{
              color: "error.light",
            }}
          >
            <Tooltip title={`${text}`} key={text}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon
                    sx={{
                      color: "error.light",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
