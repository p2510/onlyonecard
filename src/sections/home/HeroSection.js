import { styled } from "@mui/system";
import { Box, Grid, Button, Typography } from "@mui/material";
import { MHidden } from "../../components/@material-extend";
import hero1 from "../../assets/images/hero1.png";
import word from "../../assets/images/word.png";

import {
  varFadeInUp,
  MotionInView,
  varFadeInLeft,
} from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function HeroSection() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={3}
        sx={{ mb: 20, marginTop: { md: "14rem" }, width: "80vw", mx: "auto" }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={6.5}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={hero1}
                sx={{
                  borderRadius: 2,
                  width: "30vw",
                  height: "30vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>

        <Grid item xs={12} md={6} lg={5}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              variant="h3"
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                lineHeight: "1em",
              }}
            >
              Chaque euro peut devenir une bonne action !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                fontSize: "18px",
              }}
            >
              Vous avez envie de transformer vos bonnes intentions en actions ?
              <br /> <br />
              Directement dans l’application, votre éco-coach mesure votre
              empreinte carbone et vous accompagne dans chacun de vos écogestes
              avec des conseils personnalisés.
              <br /> <br />
              C’est toujours bien de faire mieux, non ?
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
                padding: "18px 18px",
                mt: {
                  md: 5,
                  xs: "20px",
                },
              }}
            >
              Comment ça marche ?
            </Button>
          </MotionInView>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          mb: 20,
          mt: {
            md: "10rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={5.7}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              variant="h3"
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                lineHeight: "1em",
              }}
            >
              Épargnez votre argent, épargnez la planète !
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                fontSize: "18px",
              }}
            >
              <br />
              Vous avez réussi à faire des économies, vous aimeriez les faire
              fructifier tout en faisant de bonnes actions ?
              <br /> <br />
              Découvrez le compte OnlyOne qui vous conseille et vous propose des
              services innovants, responsables et sécurisés.
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
                padding: "18px 18px",
                mt: {
                  md: 5,
                  xs: "20px",
                },
              }}
            >
              Comment ça marche ?
            </Button>
          </MotionInView>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={6.3}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={word}
                sx={{
                  borderRadius: 2,
                  width: "30vw",
                  height: "30vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
