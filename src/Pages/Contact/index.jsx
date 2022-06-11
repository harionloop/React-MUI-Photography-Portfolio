import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xl">
      <Box>
        <Typography variant="h3" component={"h1"} align="center">
          All it takes is a "Hello!" to get in touch &#128516;
        </Typography>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate("/learn-me");
          }}
        >
          Connect on Social Media
        </Button>
      </Box>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            height: "50px",
            width: "50px",
          }}
        >
          <ConnectWithoutContactIcon sx={{ fontSize: "35px" }} />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Let's get in touch!
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2} maxWidth={600}>
            <Grid item xs={12} sm={6}>
              <TextField name="firstName" fullWidth label="First Name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" name="lastName" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={18}>
              <TextField
                fullWidth
                name="message"
                label="Your Message"
                inputProps={{
                  style: {
                    height: "180px",
                  },
                }}
                margin="dense"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Start the conversation &#128516;
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
