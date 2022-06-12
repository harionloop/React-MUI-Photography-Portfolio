import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Typography, Chip } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        bottom: "0rem",

        bgcolor: "rgb(243,252,240,0.5)",
      }}
    >
      <Box
        p={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Chip
          icon={
            <>
              <Typography
                sx={{
                  fontWeight: "bold",
                  ml: 1,
                }}
                align="center"
              >
                Phone -->
              </Typography>
            </>
          }
          label={
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "0.2rem",
              }}
            >
              +91-9888888888
            </Typography>
          }
        />
        <Chip
          icon={
            <>
              <Typography
                sx={{
                  fontWeight: "bold",
                  ml: 1,
                }}
                align="center"
              >
                Email -->
              </Typography>
            </>
          }
          label={
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "0.2rem",
              }}
            >
              johndoe@email.com
            </Typography>
          }
        />
        <Chip
          icon={
            <>
              <Typography
                sx={{
                  fontWeight: "bold",
                  ml: 1,
                }}
                align="center"
              >
                Social Media -->
              </Typography>
            </>
          }
          label={
            <>
              <TwitterIcon
                sx={{ fontSize: "32px", cursor: "pointer", ml: 1 }}
              />
              <FacebookIcon
                sx={{ fontSize: "32px", cursor: "pointer", ml: 1 }}
              />
              <InstagramIcon
                sx={{ fontSize: "32px", cursor: "pointer", ml: 1 }}
              />
              <LinkedInIcon
                sx={{ fontSize: "32px", cursor: "pointer", ml: 1 }}
              />
            </>
          }
        />
      </Box>
    </Container>
  );
};

export default Footer;
