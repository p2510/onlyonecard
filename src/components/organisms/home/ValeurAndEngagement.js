import { Box, Grid, Typography, Container, Button } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInUp,
} from "../../atoms/animate";
import unicef_icon from "../../../assets/images/unicef_icon.svg";
import { VALEURANDENGAGEMENTDATA } from "./Home.constant";
import { MHidden } from "../../atoms/@material-extend";
import { PATH_PAGE } from "../../../configues/routes/paths";

export default function ValeurAndEngagement() {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: { md: 0, xs: -70 },
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: { md: "38px", xs: "24px" },
            fontWeight: "bold",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            mb: { md: "144px", xs: 4 },
            mt: {
              md: "121px",
              xs: "620px",
            },
          }}
        >
          Des <span style={{ color: "#C4E3D5" }}>valeurs</span> et des
          <spanstyle style={{ color: "#C4E3D5" }}>engagements</spanstyle>
          <spn style={{ color: "#FAAA42" }}>.</spn>
        </Typography>
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: "109px",
            xs: 8,
          },
        }}
      >
        {VALEURANDENGAGEMENTDATA.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: { md: "2rem", xs: 0 },
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: "57px",
                  height: "52px",
                }}
              />
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  mt: "30px",
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          mb: 20,
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={7.7}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "27px",
                mb: "62px",
              }}
            >
              <br />
              Nous nous mobilisons sur 8 des 17 objectifs de Développement
              <br /> Durable pour un monde meilleur.
              <br /> <br />
              En effet, nous pensons que la finance responsable est l’avenir.
              <br /> <br />
              C’est pourquoi nous agissons avec notre compte courant écologique,
              <br />
              afin de faire fructifier toutes vos bonnes actions.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 12,
                ml: { md: -10, xs: 0 },
              }}
            >
              <Button
                sx={{
                  borderRadius: 50,
                  bgcolor: "#2A7267",
                  "&:hover": { bgcolor: "#10403B" },
                  boxShadow: "none",
                  fontSize: "18px",
                  padding: "7px 38px 10px 38px",
                }}
                variant="contained"
                href={PATH_PAGE.NotreMission}
              >
                La mission d'OnlyOne
              </Button>
            </Box>
          </MotionInView>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={4}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={unicef_icon}
                sx={{
                  borderRadius: 2,
                  width: "300px",
                  height: "249px",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </Container>
  );
}
