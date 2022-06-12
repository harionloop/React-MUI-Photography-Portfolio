import { Box, Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${require("../../assets/images/home-bg.jpg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            component={"h1"}
            align="center"
            sx={{ fontWeight: 500, letterSpacing: "0.1em" }}
          >
            Arun Sharma
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 200,
              fontFamily: "Nunito Sans",
              fontSize: "1.1rem",
              letterSpacing: "0.2em",
            }}
          >
            - the photographer -
          </Typography>
        </Container>
        <Container
          maxWidth={400}
          sx={{
            backgroundColor: "rgba(255,255,255,0.3)",
            height: "75vh",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            mt: 2,
          }}
          s
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ p: 4, fontWeight: 500, fontFamily: "Nanito Sans" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            aliquid quod voluptatem est quam quas soluta consequuntur dolorem,
            molestias provident recusandae facere facilis beatae! Hic excepturi
            vitae nesciunt placeat? Libero!
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2, p: 2 }}>
            <Button
              size="large"
              sx={{ mr: 2 }}
              variant="contained"
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Portfolio
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={{ mr: 2 }}
              onClick={() => {
                navigate("/learn-me");
              }}
            >
              Learn Me
            </Button>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Button>
          </Box>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontFamily: "Lora", p: 4 }}
          >
            “What i like about photographs is that they capture a moment that’s
            gone forever, impossible to reproduce.” ― Karl Lagerfeld
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Home;
