import { Grid } from "@mui/material";
import React from "react";
import jobs from "../jobs.json";
import JobCard from "../component/JobCard";

function NextPage() {
  return (
    <div>
      <Grid container spacing={2} mt={2}>
        {jobs.slice(6, 14).map((job) => (
          <Grid key={job.id} item xs={12} md={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NextPage;
