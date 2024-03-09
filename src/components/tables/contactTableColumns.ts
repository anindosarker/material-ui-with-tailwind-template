import { MRT_ColumnDef } from "material-react-table";

export const columns: MRT_ColumnDef<Contact>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "contact_email",
    header: "Contact Email",
  },
  {
    accessorKey: "birth_date",
    header: "Birth Date",
  },
  {
    accessorKey: "company_name",
    header: "Company Name",
  },
  {
    accessorKey: "company_website",
    header: "Company Website",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "created_by",
    header: "Created By",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "interests",
    header: "Interests",
  },
  {
    accessorKey: "job_title",
    header: "Job Title",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "metadata",
    header: "Metadata",
  },
  {
    accessorKey: "opener",
    header: "Opener",
  },
  {
    accessorKey: "person_linkedin_url",
    header: "LinkedIn URL",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "problem",
    header: "Problem",
  },
  {
    accessorKey: "reviews",
    header: "Reviews",
  },
  {
    accessorKey: "solution",
    header: "Solution",
  },
];
