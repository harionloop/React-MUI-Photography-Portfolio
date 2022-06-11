import { Box, Button, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h2"
        component={"h1"}
        align="center"
        sx={{ fontWeight: 500, letterSpacing: "0.1em", mt: 2 }}
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
      <Container className="home-container-back">
        <div className="home-container-front">
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
              sx={{ mr: 2, width: "120px", height: "60px" }}
              variant="contained"
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Portfolio
            </Button>
            <Button
              variant="contained"
              sx={{ mr: 2, width: "120px", height: "60px" }}
              onClick={() => {
                navigate("/learn-me");
              }}
            >
              Learn Me
            </Button>
            <Button
              variant="contained"
              sx={{ width: "120px", height: "60px" }}
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
        </div>
      </Container>
    </>
  );
};

export default Home;
