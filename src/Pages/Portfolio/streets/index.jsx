import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageModel from "../imageModel";
import { useState } from "react";

export default function PortfolioStreets() {
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
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        sx={{ position: "absolute", top: "1rem", left: "1rem" }}
        onClick={() => {
          navigate("/portfolio");
        }}
      >
        Portfolio
      </Button>
      <Container maxWidth="xl" sx={{ bgcolor: "#F6F4D2", height: "100vh" }}>
        <Typography variant="h3" component={"h1"} align="center" p={2}>
          Street Photography
        </Typography>
        {/* <Typography
          align="center"
          sx={{
            p: 2,
            fontWeight: 300,
            fontFamily: "Nunito Sans",
            fontSize: "1.1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolore qui. Ab, vitae molestias mollitia perferendis adipisci dolor
          eos accusamus iure explicabo! Dolorum magnam repellat molestias
          cupiditate accusantium fugit. Iusto natus suscipit dolor quasi nisi
          ratione hic tempore quaerat! Libero nisi cupiditate, ex minus incidunt
          omnis consequatur porro nemo, a at, maxime rem repellendus modi sunt
          voluptatum vero harum ut. In facilis impedit veniam sunt officiis id
          dolor esse architecto a nam, voluptatem dolorem odio magnam optio
          deleniti eos rem magni beatae soluta? Ducimus officia quas provident
          quos voluptatum voluptates alias ut aspernatur reprehenderit earum
          hic, odit enim, illum magnam!
        </Typography> */}
        <Container maxWidth="xl">
          <ImageList
            sx={{ p: 4, height: "85vh" }}
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
                className="imageItem"
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
              >
                <img
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
          sx={{ display: "none" }}
          imageData={imageData}
          handleClose={handleClose}
          open={viewImage}
        />
      )}
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    rows: 1,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 3,
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
