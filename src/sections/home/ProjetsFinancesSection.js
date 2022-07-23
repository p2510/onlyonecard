import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import biodiversite from "../../assets/images/biodiversite.png";
import ecosysteme from "../../assets/images/ecosysteme.png";
import inegalite from "../../assets/images/inegalite.png";
import ecologique from "../../assets/images/ecologique.png";
import foret from "../../assets/images/foret.png";
import territoire from "../../assets/images/territoire.png";
import association from "../../assets/images/association.png";
import climatique from "../../assets/images/climatique.png";
import energetique from "../../assets/images/energetique.png";
import {
  varFadeInUp,
  MotionInView,
  varFadeInLeft,
} from "../../components/animate";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "3.5rem",
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function ProjetsFiancesSection() {
  return (
    <RootStyle>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.2rem",
          fontWeight: "bold",
          alignItems: "center",
          width: "100%",
          mb: 3,
        }}
      >
        Les projets financés par la communauté OnlyOne
        <span style={{ color: "#00db89" }}>.</span>
      </Typography>
      <Grid
        container
        spacing={7}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 10, width: "80vw", mx: "auto" }}
      >
        <Grid item xs={12} md={6} lg={6} mt={{ xs: -8, md: 0 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} alignItems="center" justifyContent="center">
              <MotionInView variants={varFadeInLeft}>
                <Typography
                  variant="h4"
                  sx={{
                    my: -2,
                    color: "common.gray",
                    fontWeight: "fontWeightMedium",
                    lineHeight: "3em",
                    fontSize: { md: "26px", xs: "14px" },
                    marginTop: { xs: "35px", md: -2 },
                    marginLeft: { md: 0, xs: -3 },
                    textAlign: "start",
                  }}
                >
                  Grâce à votre éco-compte OnlyOne
                </Typography>
              </MotionInView>
            </Grid>
            <Grid
              container
              spacing={3}
              mt="6px"
              marginLeft={{ md: "4.5rem", xs: -4 }}
            >
              <Grid item xs={12} alignItems="center" justifyContent="center">
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={biodiversite}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={ecosysteme}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={inegalite}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5} mt={{ xs: 5, md: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={12}>
              <MotionInView variants={varFadeInLeft}>
                <Typography
                  sx={{
                    my: -3,
                    color: "common.gray",
                    fontWeight: "fontWeightMedium",
                    lineHeight: "2em",
                    fontSize: { md: "26px", xs: "17px" },
                    marginLeft: { md: 0, xs: -3 },
                    textAlign: "start",
                  }}
                >
                  Grâce à votre épargne positive
                </Typography>
              </MotionInView>
            </Grid>
            <Grid
              container
              spacing={2}
              mt="2.5rem"
              marginLeft={{ md: "2rem", xs: -3 }}
            >
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={ecologique}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={foret}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={territoire}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={association}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={climatique}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={3} lg={5}>
                <MotionInView variants={varFadeInUp}>
                  <Card sx={{ maxWidth: 250 }}>
                    <CardMedia
                      component="img"
                      height="162"
                      image={energetique}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
