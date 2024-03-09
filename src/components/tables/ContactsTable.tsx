"use client";

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { columns } from "./contactTableColumns";
import { Button } from "@mui/material";
import ExampleModal from "../modals/ExampleModal";

type TableProps = {
  data?: Contact[];
};

export default function ContactsTable({ data }: TableProps) {
  const table = useMaterialReactTable({
    columns: columns,
    data: data || [],
    enableColumnOrdering: true,
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <>
        {/* <Button onClick={() => console.log(row.original)}>
          Generate Opener
        </Button> */}
        <ExampleModal />
      </>
    ),
  });

  return <MaterialReactTable table={table} />;
}
