import { Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ColorChips from "../component/ColorChips";
import apiService from "../app/apiService";
import jobs from "../jobs.json";
function MorePage() {
  // const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const params = useParams();

  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  // useEffect(() => {
  //   if (params.id) {
  //     const getJob = async () => {
  //       // setLoading(true);
  //       try {
  //         const res = await apiService.get(`/${params.id}`);
  //         console.log("first", res);
  //         setJob(res.data);

  //         // setError("");
  //       } catch (error) {
  //         console.log(error);
  //         // setError(error.message);
  //       }
  //       // setLoading(false);
  //     };
  //     getJob();
  //   }
  // }, [params]);

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
      <Typography
        variant="h2"
        mt={3}
        justifyContent="center"
        textAlign="center"
      >
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
