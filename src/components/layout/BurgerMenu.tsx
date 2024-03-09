"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Helper } from "@/utils/helper/common";
import {
  IconButton,
  SwipeableDrawer,
  Box,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import toast from "react-hot-toast";
import { LINKS, PLACEHOLDER_LINKS } from "@/utils/routes/routes";

export default function BurgerMenu() {
  const params = usePathname();
  const router = useRouter();
  const [state, setState] = React.useState(false);
  return (
    <>
      <IconButton
        onClick={() => setState(true)}
        sx={{
          color: "primary.main",
          fontSize: "24px",
          display: { xs: "flex", sm: "flex", md: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
      <div>
        <>
          <SwipeableDrawer
            anchor={"left"}
            open={state}
            onClose={() => setState(false)}
            onOpen={() => setState(true)}
            sx={{
              width: 250,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 250,
                boxSizing: "border-box",
              },
            }}
          >
            <Box
              sx={{ width: 250 }}
              height={"100%"}
              onClick={() => setState(false)}
              onKeyDown={() => setState(false)}
              bgcolor={"background.sidebar"}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  cursor: "pointer",
                  color: "text.sidebar",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Toolbar
                sx={{
                  py: 5,
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
                  <Box
                    alignItems={"center"}
                    justifyItems={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    px={2}
                    py={1}
                    borderRadius={2}
                  >
                    {/* <Image src="/logo1.png" height={40} width={40} alt="logo" /> */}
                    <Typography fontWeight={700}>SalesMagic</Typography>
                  </Box>
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
                        color: isActive ? "text.active" : "text.sidebar",
                        borderRadius: 20,
                      }}
                    >
                      <ListItemButton
                        component={Link}
                        href={href}
                        sx={{
                          bgcolor: isActive
                            ? "background.active"
                            : "transparent",
                          borderRadius: 20,
                          mx: 1,
                        }}
                      >
                        <ListItemIcon>
                          <Icon
                            sx={{
                              color: "text.sidebar",
                              fontSize: "20px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{
                            fontSize: "8px",
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
                    onClick={() => toast("This is a placeholder")}
                    sx={{
                      color: "error.light",
                    }}
                  >
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
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </>
      </div>
    </>
  );
}
