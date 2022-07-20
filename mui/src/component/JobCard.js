import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ColorChips from "./ColorChips";
import { useNavigate } from "react-router-dom";
export default function JobCard(job) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} mt={0.5} justifyContent="center">
          <Typography gutterBottom variant="h5" component="div">
            {job.job.title}
          </Typography>
        </Grid>
        <hr />
        <Grid container spacing={2} mt={0.5} justifyContent="center">
          {job.job.skills.slice(0, 4).map((skill) => (
            <Grid key={skill} item>
              <Typography variant="body2" color="text.secondary">
                <ColorChips skill={skill}></ColorChips>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <br />
        <Typography gutterBottom variant="h5" component="div">
          {job.job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} mt={0.5} justifyContent="center">
          <Button
            onClick={() => navigate(`/more/${job.job.id}`)}
            variant="contained"
            color="error"
            size="small"
          >
            More Details
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
