import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import biodiversite_image from "../../../assets/images/biodiversite_image.svg";
import projet_image_1 from "../../../assets/images/projet_image_1.svg";
import projet_image_2 from "../../../assets/images/projet_image_2.svg";
import ecologique from "../../../assets/images/ecologique.png";
import foret from "../../../assets/images/foret.png";
import territoire from "../../../assets/images/territoire.png";
import association from "../../../assets/images/association.png";
import climatique from "../../../assets/images/climatique.png";
import energetique from "../../../assets/images/energetique.png";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import { MHidden } from "src/components/atoms/@material-extend";

const useStyles = makeStyles(() => ({
  boxStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { md: "270px", xs: "380px" },
    zIndex: 6,
    bgcolor: "#10403B",
    opacity: 0.75,
    height: "132px ",
    position: "absolute",
    mt: { md: "-165px", xs: "100px" },
    left: { md: "227px", xs: "0px" },
  },
}));

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "3.5rem",
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function ProjetsFiancesSection() {
  return (
    <RootStyle>
      <MHidden width="mdDown">
        <Grid container>
          <Box
            component="img"
            src={projet_image_1}
            alt="Eco-compte Onlyone"
            sx={{
              width: "1440px",
              height: "1020px",
              position: "absolute",
              mt: 23.5,
            }}
          />
          <Box
            component="img"
            src={projet_image_2}
            alt="Eco-compte Onlyone"
            sx={{
              width: "1440px",
              height: "558px",
              position: "absolute",
              mt: 83.5,
            }}
          />
        </Grid>
      </MHidden>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "38px",
          fontWeight: 800,
          alignItems: "center",
          width: "100%",
          mb: "86px",
          mt: "-10px",
        }}
      >
        Les projets financés par la
        <span style={{ color: "#B7795E", marginLeft: "10px" }}>
          {" "}
          communauté OnlyOne
        </span>
        <span style={{ color: "#FAAA42" }}>.</span>
      </Typography>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-around"
        sx={{ mb: 10, width: "88vw", mx: "auto" }}
      >
        <Grid item xs={12} md={6} lg={5} mt={{ xs: -8, md: 0 }}>
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
                    marginTop: { xs: "350px", md: -2 },
                    marginLeft: { md: -3, xs: -3 },
                    textAlign: "start",
                  }}
                >
                  Grâce à votre éco-compte OnlyOne
                  <span style={{ color: "#FAAA42" }}>.</span>
                </Typography>
              </MotionInView>
            </Grid>
            <Grid
              container
              spacing={3}
              rowSpacing={12}
              mt="-1rem"
              marginLeft={{ xs: -4 }}
            >
              <Grid item xs={12} alignItems="center" justifyContent="center">
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "444px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "270px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "absolute",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      La protection de la biodiversité
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid item xs={12} alignItems="center" justifyContent="center">
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "444px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "270px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "absolute",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      La protection de la biodiversité
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid item xs={12} alignItems="center" justifyContent="center">
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "444px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "270px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "absolute",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      La protection de la biodiversité
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5.5} mt={{ xs: -8, md: 0 }}>
          <Grid container spacing={14} alignItems="center">
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
                  <span style={{ color: "#FAAA42" }}>.</span>
                </Typography>
              </MotionInView>
            </Grid>
            <Grid
              container
              spacing={2}
              mt="-2rem"
              rowSpacing={16}
              marginLeft={{ md: "2rem", xs: -3 }}
            >
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "relative",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      La transition écologique
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "relative",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      La transition écologique
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "relative",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      La protection de la forêt
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "9-8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "relative",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      Le financement d’associations
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      position: "relative",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      Le financement des territoires
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "283px",
                      borderRadius: "8px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: "285px", height: "210px" }}
                      image={biodiversite_image}
                      alt="green iguana"
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "176px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      mt: { md: "-165px", xs: "100px" },
                      left: { md: "227px", xs: "0px" },
                      margin: "3212px 134px 0px -176px",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      La lutte contre le réchauffement climatique
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
