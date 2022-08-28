import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import projet_image_1 from "../../../assets/images/projet_image_1.svg";
import projet_image_2 from "../../../assets/images/projet_image_2.svg";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import { MHidden } from "src/components/atoms/@material-extend";
import { ECOCOMPTEDATA, EPARGNEDATA } from "./Home.constant";

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
          <Box sx={{ mt: -5, position: "absolute" }}>
            <Box
              component="img"
              src={projet_image_1}
              alt="Eco-compte Onlyone"
            />
          </Box>
          <Box sx={{ mt: 55, position: "absolute" }}>
            <Box
              component="img"
              src={projet_image_2}
              alt="Eco-compte Onlyone"
            />
          </Box>
        </Grid>
      </MHidden>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { md: "38px", xs: "20px" },
          fontWeight: 800,
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
          mb: { md: "86px", xs: "-330px" },
          mt: "-230px",
        }}
      >
        Les projets financés par la
        <span style={{ color: "#B7795E", marginLeft: "10px" }}>
          communauté OnlyOne
        </span>
        <span style={{ color: "#FAAA42" }}>.</span>
      </Typography>
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="space-around"
        flexDirection={{ md: "row", xs: "column" }}
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
                    color: "#10403B",
                    fontWeight: "fontWeightMedium",
                    lineHeight: "3em",
                    fontSize: { md: "26px", xs: "16px" },
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
              {ECOCOMPTEDATA.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  alignItems="center"
                  justifyContent="center"
                >
                  <MotionInView variants={varFadeInUp}>
                    <Card
                      sx={{
                        maxWidth: "444px",
                        borderRadius: "8px",
                      }}
                    >
                      <Box className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 ">
                        <Box
                          component="img"
                          src={item.cardImage}
                          alt="Grâce à votre éco-compte OnlyOne."
                        />
                      </Box>
                    </Card>
                    <Box
                      component="container"
                      alt="Eco-compte Onlyone"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { md: "270px", xs: "70%" },
                        zIndex: 6,
                        bgcolor: "#10403B",
                        opacity: 0.75,
                        height: { md: "132px ", xs: "110px" },
                        position: "absolute",
                        mt: { md: "-165px", xs: "-130px" },
                        left: { md: "227px", xs: "60px" },
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
                        {item.cardTitle}
                      </Typography>
                    </Box>
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5.5} mt={{ xs: -7, md: -4 }}>
          <Grid container spacing={14} alignItems="center">
            <Grid item xs={12} md={12}>
              <MotionInView variants={varFadeInLeft}>
                <Typography
                  sx={{
                    my: { md: -3, xs: 0 },
                    color: "#10403B",
                    fontWeight: "fontWeightMedium",
                    lineHeight: "2em",
                    fontSize: { md: "26px", xs: "18px" },
                    marginLeft: { md: 0, xs: -3 },
                    mt: { md: 0, xs: 10 },
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
              marginLeft={{ md: "2rem", xs: 6 }}
            >
              {EPARGNEDATA.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  alignItems="center"
                  justifyContent="center"
                >
                  <MotionInView variants={varFadeInUp}>
                    <Card
                      sx={{
                        maxWidth: "100%",
                        minWidth: "100%",
                        borderRadius: "8px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: { md: "290px", xs: "100%" },
                          height: "210px",
                        }}
                        image={item.cardImage}
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
                        width: { md: "176px", xs: "300px" },
                        zIndex: 6,
                        bgcolor: "#10403B",
                        opacity: 0.75,
                        height: "132px ",
                        position: "relative",
                        mt: { md: "-165px", xs: "-165px" },
                        left: { md: "227px", xs: "190px" },
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
                        {item.cardTitle}
                      </Typography>
                    </Box>
                  </MotionInView>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
