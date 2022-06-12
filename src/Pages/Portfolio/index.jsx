import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import ImageModel from "./imageModel";
import { useState } from "react";

const Portfolio = () => {
  const [viewImage, setViewImage] = useState(false);
  const [imageData, setImageData] = useState({});
  const handleOpen = () => setViewImage(true);
  const handleClose = () => setViewImage(false);
  const navigate = useNavigate();

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <>
      <Typography variant="h3" component={"h1"} align="center" p={2}>
        Portfolio
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
      <Container maxWidth="xl" sx={{ mt: 2, pl: 4, pr: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
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
        <Container maxWidth="xl">
          <ImageList
            sx={{ p: 4, height: 600 }}
            variant="quilted"
            cols={4}
            rowHeight={364}
            gap={20}
          >
            {itemData.map((item) => (
              <ImageListItem
                onClick={() => {
                  setImageData(item);
                  handleOpen();
                }}
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                style={{ border: "5px solid black" }}
              >
                <img
                  className="imageItem"
                  style={{ padding: "10px" }}
                  {...srcset(item.img, 364, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Container>
      {imageData && (
        <ImageModel
          imageData={imageData}
          handleClose={handleClose}
          open={viewImage}
        />
      )}
    </>
  );
};

export default Portfolio;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
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
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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
    cols: 2,
  },
];
