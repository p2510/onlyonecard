import { Box, Grid, Typography, Container, Button } from "@mui/material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInLeft,
  varFadeInUp,
} from "../../components/animate";
import unicef_icon from "../../assets/images/unicef_icon.png";
import { VALEURANDENGAGEMENTDATA } from "./LandingSecondSection.constant";
import { MHidden } from "src/components/@material-extend";

export default function ValeurAndEngagement() {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            justifyContent: "center",
            fontSize: "2.7rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 6,
            mt: {
              md: 19,
            },
          }}
        >
          Des valeurs et des engagements.
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
            md: 4,
            xs: 8,
          },
          top: {
            xs: -70,
            md: -40,
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
              marginRight: "2rem",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                src={item.icon}
                alt={item.title}
                sx={{
                  width: "140px",
                  height: "110px",
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
              }}
            >
              <br />
              Nous nous mobilisons sur 8 des 17 objectifs de Développement
              Durable pour un monde meilleur.
              <br /> <br />
              En effet, nous pensons que la finance responsable est l’avenir.
              <br /> <br />
              C’est pourquoi nous agissons avec notre compte courant écologique,
              afin de faire fructifier toutes vos bonnes actions.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Button
              size="medium"
              variant="contained"
              sx={{
                backgroundImage: "linear-gradient(to top, #41d0f5, #19c2a8  )",
                fontSize: "18px",
                width: "auto",
                "&:hover": {
                  bgcolor: "#41d0f5",
                },
                padding: "18px 40px",
                mt: {
                  md: 5,
                  xs: "20px",
                },
              }}
            >
              La mission d'OnlyOne
            </Button>
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
                  width: "26vw",
                  height: "20vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </Container>
  );
}
