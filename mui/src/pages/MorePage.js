import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ColorChips from "../component/ColorChips";
import jobs from "../jobs.json";
function MorePage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  if (!job)
    return (
      <Container>
        <Typography variant="h2" mt={3}>
          Can't find this job!
        </Typography>
      </Container>
    );
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" mt={3} justifyContent="center">
        {job.title}
      </Typography>
      <Grid container spacing={2} mt={0.5} justifyContent="center">
        {job.skills.map((skill) => (
          <Grid key={skill} item>
            <Typography variant="body2" color="text.secondary">
              <ColorChips skill={skill}></ColorChips>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography gutterBottom variant="h5" component="div" mt={5}>
        {job.description}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Work place: {job.city}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Salary: {job.salaryLow} - {job.salaryHigh}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        Required Experiences:{" "}
        {job.yrsXPExpected === 1
          ? `${job.yrsXPExpected} year`
          : `${job.yrsXPExpected} years`}
      </Typography>
    </Container>
  );
}

export default MorePage;
