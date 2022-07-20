import * as React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

export default function ClickableLinkChips() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{ spacing: 2, padding: 2, display: "flex", justifyContent: "center" }}
    >
      <Button
        onClick={() => navigate(`/page/${1}`)}
        variant="contained"
        color="error"
        size="small"
      >
        1
      </Button>
      <Button
        onClick={() => navigate(`/page/${2}`)}
        variant="contained"
        color="error"
        size="small"
      >
        2
      </Button>
    </Container>
  );
}
