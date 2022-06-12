import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

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
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${require("../../assets/images/contact.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "rgba(255,255,255,0.7)",
          height: "100vh",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        }}
      >
        <Box>
          <Typography variant="h3" component={"h4"} align="center" p={2}>
            All it takes is a "Hello!" to start conversation &#128516;
          </Typography>
          <Button
            startIcon={<HomeIcon />}
            variant="contained"
            sx={{ position: "absolute", top: "1rem", left: "1rem" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Go Home
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
          <Typography component="h1" variant="h5">
            Let's get in touch!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} maxWidth={600}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  label="First Name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="Phone Number"
                  name="phone"
                />
              </Grid>
              <Grid item xs={18}>
                <TextField
                  fullWidth
                  variant="standard"
                  name="message"
                  label="Your Message"
                  inputProps={{
                    style: {
                      height: "180px",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Start the conversation &#128516;
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
