"use client";

import {
  AppBar,
  Box,
  Button,
  Chip,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { AccountCircle, Menu } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes/routes";
import Link from "next/link";
import toast from "react-hot-toast";

const drawerWidth = 300;

function DrawerContent() {
  const theme = useTheme();
  const pathName = usePathname();
  const router = useRouter();
  const logOut = async () => {
    toast("logout");
  };

  const isActiveLink = (itemLink: string) => {
    return (
      pathName === itemLink ||
      (itemLink !== "/dashboard" && pathName.startsWith(itemLink))
    );
  };

  return (
    <Box className="flex flex-col gap-6 h-screen">
      <Link href={"/"}>
        <Typography variant="h5" pl={4} py={4} fontWeight={600}>
          App Title.
        </Typography>
      </Link>
      {ROUTES.map((group) => (
        <div key={group.group} className="flex flex-col">
          <Typography
            variant="body2"
            fontWeight={600}
            pl={4}
            textTransform={"uppercase"}
            className=""
          >
            {group.group}
          </Typography>
          <List dense component="nav">
            {group.items.map((item) => (
              <Link key={item.text} href={item.link}>
                <ListItem>
                  <ListItemButton
                    selected={isActiveLink(item.link)}
                    sx={{
                      borderRadius: 1,
                      paddingX: 2,
                      paddingY: 1.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <item.icon
                      sx={{
                        height: 20,
                        width: 20,
                        color: isActiveLink(item.link)
                          ? theme.palette.primary.main
                          : undefined,
                      }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      color={
                        isActiveLink(item.link)
                          ? theme.palette.primary.main
                          : undefined
                      }
                    >
                      {item.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      ))}

      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ margin: 4, marginTop: "auto" }}
        onClick={logOut}
      >
        LOGOUT
      </Button>
    </Box>
  );
}

export default function AdminLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: { email: string };
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundImage: "none",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            // maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <IconButton
            color="primary"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Link href={"/"}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              App Title.
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />

          <Link href={"/profile"}>
            <Tooltip title="View your profile">
              <Chip
                label={user?.email ? user.email.split("@")[0] : "Profile"}
                icon={<AccountCircle />}
                variant="filled"
              />
            </Tooltip>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //   border: "none",
            },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box
          p={3}
          sx={{
            width: "100%",
            // maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
