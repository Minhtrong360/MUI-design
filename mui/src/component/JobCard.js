import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "../App.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ColorChips from "./ColorChips";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function JobCard(job) {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Card>
      <CardContent className="text ellipsis">
        <Grid
          container
          spacing={2}
          mt={0.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            justifyContent="center"
            textAlign="center"
          >
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          position="relative"
          display="inline-block"
          wordWrap="break-word"
          overflow="hidden"
          height="90px"
          lineHeight="30px"
          textAlign="justify"
          fontSize="1rem"
        >
          {job.job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} mt={0.5} mb={0.5} justifyContent="center">
          <Button
            onClick={() => {
              user?.username
                ? navigate(`/more/${job.job.id}`)
                : navigate(`/login`);
            }}
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
