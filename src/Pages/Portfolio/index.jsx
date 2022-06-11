import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h3" component={"h1"} align="center" p={2}>
        Portfolio
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
          onClick={() => {
            navigate("/portfolio-wedding");
          }}
        >
          Wedding
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
          onClick={() => {
            navigate("/portfolio-streets");
          }}
        >
          Streets
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            navigate("/portfolio-creative");
          }}
        >
          Creative
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <ImageList sx={{ height: 600 }} cols={2} gap={10}>
          {itemData.map((item) => (
            <ImageListItem
              onClick={() => {
                console.log("img");
              }}
              key={item.img}
              className="imageItem"
            >
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Portfolio;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
