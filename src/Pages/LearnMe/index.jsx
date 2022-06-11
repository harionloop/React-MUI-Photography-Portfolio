import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import Instagram from "@mui/icons-material/Instagram";

const LearnMe = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </Button>
      </Box>
      <Container
        sx={{
          display: "flex",
          mt: 4,
          bgcolor: "#FFEEF2",
        }}
      >
        <Box
          component={"img"}
          src="https://source.unsplash.com/random/400x400"
          alt=""
          p={2}
        />

        <Box component={"div"}>
          <Typography
            variant="h5"
            align="center"
            sx={{ p: 2, fontWeight: "bold" }}
          >
            A brief introduction to my self.
          </Typography>
          <Typography align="center" sx={{ fontFamily: "Lora", p: 1 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
            maiores dolorem molestias quibusdam fuga rem reiciendis repellendus
            mollitia nam quia atque quam, placeat dolorum consectetur, aliquam
            obcaecati laborum porro delectus et iste sint ipsa. Eum eius
            officiis ut consequatur. Et asperiores consequatur maiores possimus
            animi laudantium eius labore assumenda cum aliquam hic consequuntur
            molestiae earum, ab perferendis, quae ipsa, mollitia placeat. Autem
            numquam nostrum quibusdam corrupti ut est non a, quo nulla. Natus,
            illum ratione. Odio porro reiciendis tempora neque eaque eos, quasi
            blanditiis perferendis nostrum ut itaque voluptate ab rerum
            voluptatibus architecto maxime iusto est dolorem placeat.
            Necessitatibus velit, ipsam architecto eius dolores culpa veritatis,
            quibusdam assumenda provident voluptates quisquam odio, labore
            repudiandae! Neque impedit sequi officia ab sed doloremque tenetur
            natus officiis nihil illo illum velit consectetur laudantium autem
            necessitatibus recusandae vel facilis nemo, cum quod dolor. Quam
            odit, nisi animi assumenda itaque sed tempore id repudiandae eos
            delectus corporis neque consequuntur cumque voluptas iste porro,
            ipsum tempora? Reiciendis nisi suscipit repellat recusandae quas.
            Hic adipisci iusto accusamus dolor possimus totam obcaecati
            voluptatem aspernatur, magnam veniam facilis facere tempore
            voluptatum corporis labore in incidunt assumenda molestias at
            provident. Quo iste voluptates fugiat dolore aliquam qui saepe error
            aut?
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ bgcolor: "lightgray", mt: 2 }}>
        <Typography variant="h5" align="center" p={1}>
          All Social Media Handles
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
          }}
        >
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "55px", cursor: "pointer", mr: 1 }} />
        </Box>
      </Container>
    </>
  );
};

export default LearnMe;
