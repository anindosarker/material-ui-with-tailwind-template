import SummarizeIcon from "@mui/icons-material/Summarize";
import {
  AccountCircle,
  Campaign,
  Contacts,
  List,
  Mail,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

export const LINKS = [
  { text: "Home", href: "/dashboard", icon: SummarizeIcon },
  { text: "Contacts", href: "/dashboard/contacts", icon: Contacts },
  { text: "Openers", href: "/dashboard/openers", icon: Mail },
  { text: "Campaigns", href: "/dashboard/campaigns", icon: Campaign },
  { text: "Templates", href: "/dashboard/templates", icon: List },
  { text: "Test", href: "/test", icon: AccountCircle },
  { text: "Login", href: "/auth/login", icon: AccountCircle },
  { text: "Register", href: "/auth/register", icon: AccountCircle },
];

export const PLACEHOLDER_LINKS = [{ text: "Logout", icon: LogoutIcon }];

export const ROUTES = [
  {
    group: "Dashboard",
    items: [
      {
        link: "/dashboard",
        text: "Dashboard",
        icon: SummarizeIcon,
      },
      { link: "/dashboard/contacts", text: "Contacts", icon: Contacts },
      { link: "/dashboard/openers", text: "Openers", icon: Mail },
      { link: "/dashboard/campaigns", text: "Campaigns", icon: Campaign },
      { link: "/dashboard/templates", text: "Templates", icon: List },
      { link: "/auth/login", text: "Login", icon: AccountCircle },
      { link: "/auth/register", text: "Register", icon: AccountCircle },
      { link: "/test", text: "Test", icon: AccountCircle },
    ],
  },
];
