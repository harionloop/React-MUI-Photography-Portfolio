import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const LearnMe = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="xl" sx={{ height: "100vh", bgcolor: "#f8d3cb" }}>
        <Box>
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
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </Button>
        </Box>

        <Typography variant="h4" component={"h1"} align="center" p={2}>
          Thanks for paying attention to my portfolio.
        </Typography>

        <Container
          sx={{
            display: "flex",
            mt: 4,
            p: 4,
            bgcolor: "#fbe6e2",
          }}
        >
          <Box
            component={"img"}
            src="https://source.unsplash.com/random/400x400"
            alt=""
            p={2}
            sx={{ boxShadow: "0px 0px 10px #000", borderRadius: "10px" }}
          />

          <Box component={"div"}>
            <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
              A brief of my jurney!
            </Typography>

            <Typography
              align="left"
              sx={{
                fontFamily: "Nanito Sans",
                p: 2,
                ml: 2,
                fontWeight: 200,
                fontSize: "1.1rem",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              maiores dolorem molestias quibusdam fuga rem reiciendis
              repellendus mollitia nam quia atque quam, placeat dolorum
              consectetur, aliquam obcaecati laborum porro delectus et iste sint
              ipsa. Eum eius officiis ut consequatur. Et asperiores consequatur
              maiores possimus animi laudantium eius labore assumenda cum
              aliquam hic consequuntur molestiae earum, ab perferendis, quae
              ipsa, mollitia placeat. Autem numquam nostrum quibusdam corrupti
              ut est non a, quo nulla. Natus, illum ratione. Odio porro
              reiciendis tempora neque eaque eos, quasi blanditiis perferendis
              nostrum ut itaque voluptate ab rerum voluptatibus architecto
              maxime iusto est dolorem placeat. Necessitatibus velit, ipsam
              architecto eius dolores culpa veritatis, quibusdam assumenda
              provident voluptates quisquam odio, labore repudiandae! Neque
              impedit sequi officia ab sed doloremque tenetur natus officiis
              nihil illo illum velit consectetur laudantium autem necessitatibus
              recusandae vel facilis nemo, cum quod dolor. Quam odit, nisi animi
              assumenda itaque sed tempore id repudiandae eos delectus corporis
              neque consequuntur cumque voluptas iste porro, ipsum tempora?
              Reiciendis nisi suscipit repellat recusandae quas. Hic adipisci
              iusto accusamus dolor possimus totam obcaecati voluptatem
              aspernatur, magnam veniam facilis facere tempore voluptatum
              corporis labore in incidunt assumenda molestias at provident. Quo
              iste voluptates fugiat dolore aliquam qui saepe error aut?
            </Typography>
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default LearnMe;
