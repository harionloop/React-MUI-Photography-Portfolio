import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function PortfolioStreets() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ bgcolor: "#FCFFFD" }}>
          <Typography variant="h3" component={"h1"} align="center" p={2}>
            Street Photography
          </Typography>
          <Typography
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
            ratione hic tempore quaerat! Libero nisi cupiditate, ex minus
            incidunt omnis consequatur porro nemo, a at, maxime rem repellendus
            modi sunt voluptatum vero harum ut. In facilis impedit veniam sunt
            officiis id dolor esse architecto a nam, voluptatem dolorem odio
            magnam optio deleniti eos rem magni beatae soluta? Ducimus officia
            quas provident quos voluptatum voluptates alias ut aspernatur
            reprehenderit earum hic, odit enim, illum magnam!
          </Typography>
        </Container>
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
      </Box>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <ImageList sx={{ height: 600 }} cols={2} gap={10}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="imageItem">
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
}

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
