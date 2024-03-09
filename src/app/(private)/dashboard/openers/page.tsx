import { secondary } from "@/components/getLPTheme";
import SectionCardLayout from "@/components/layout/cards/SectionCardLayout";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import ExampleTable from "@/components/tables/ExampleTable";
import { ChevronRight, Folder, FormatListBulleted } from "@mui/icons-material";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Skeleton,
} from "@mui/material";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <CardSkeleton />
      <SectionCardLayout
        title="Openers"
        subtitle="Openers"
        avatarElementLeft={<FormatListBulleted />}
        actionElementRight={
          <Link href="/dashboard/contacts/new">
            <Button variant="contained" endIcon={<ChevronRight />}>
              Add new contact
            </Button>
          </Link>
        }
      >
        <ExampleTable />
      </SectionCardLayout>

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>
        <List dense={true}>
          {[1, 2, 3].map((a, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <Folder />
                </Avatar>
              </ListItemAvatar>
              <Link href="/dashboard/contacts/new">
                <ListItemText
                  primary={`Campaign ${a}`}
                  secondary={secondary ? "Secondary text" : null}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  );
}
