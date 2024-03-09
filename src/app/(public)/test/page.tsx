"use client";
import ExampleTable from "@/components/tables/ExampleTable";
import { Grid } from "@mui/material";

export default function page() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="border bg-red-500">xs=8</div>
        </Grid>
        <Grid item xs={2}>
          <div className="border bg-red-500">xs=4</div>
        </Grid>
        <Grid item xs={10}>
          <div className="border bg-red-500">xs=4</div>
        </Grid>
      </Grid>
      <ExampleTable />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="border bg-red-500">xs=8</div>
        </Grid>
        <Grid item xs={2}>
          <div className="border bg-red-500">xs=4</div>
        </Grid>
        <Grid item xs={10}>
          <div className="border bg-red-500">xs=4</div>
        </Grid>
      </Grid>
    </div>
  );
}
