"use client";

import SectionCardLayout from "@/components/layout/cards/SectionCardLayout";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import ContactsTable from "@/components/tables/ContactsTable";
import { ChevronRight, FormatListBulleted } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null);

  if (!notes) return <CardSkeleton />;

  return (
    <>
      <SectionCardLayout
        title="Contacts"
        subtitle="View and manage your contacts."
        avatarElementLeft={<FormatListBulleted />}
        actionElementRight={
          <Link href="/dashboard/contacts/new">
            <Button variant="contained" endIcon={<ChevronRight />}>
              Add new contact
            </Button>
          </Link>
        }
      >
        <ContactsTable data={notes} />
      </SectionCardLayout>

      {/* <pre>{JSON.stringify(notes, null, 2)}</pre> */}
    </>
  );
}
