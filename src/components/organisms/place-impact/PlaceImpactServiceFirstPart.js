import { styled } from "@mui/system";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInUp } from "../../atoms/animate";
import { EPARGNERIMAGEDATA } from "./PlaceImpact.constant";
<<<<<<< HEAD
import arbres_image from "../../../assets/images/arbres_image.png";
import title_bg from "../../../assets/images/title_bg.png";
=======
import arbres_image from "../../../assets/images/arbres_image.svg";
import title_bg from "../../../assets/images/title_bg.svg";
>>>>>>> finalisation de la page place impact
import { MHidden } from "src/components/atoms/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function PlaceImpactServiceFirstPart() {
  return (
    <RootStyle>
      <MHidden width="mdDown">
<<<<<<< HEAD
        <Grid container mt="8rem">
=======
        <Grid container mt="-2rem">
>>>>>>> finalisation de la page place impact
          <Box
            component="img"
            src={arbres_image}
            alt="Eco-compte Onlyone"
            sx={{
              width: "100%",
<<<<<<< HEAD
              height: "655px",
=======
              height: "1053px",
>>>>>>> finalisation de la page place impact
              position: "absolute",
              mb: "1rem",
            }}
          />
        </Grid>
      </MHidden>
      <Grid
        container
        mb="55rem"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          component="container"
          alt="Eco-compte Onlyone"
          sx={{
            opacity: 0.75,
            width: { md: "845px", xs: "380px" },
            bgcolor: "#10403B",
            height: "375px",
            position: "absolute",
<<<<<<< HEAD
            top: { md: "288px", xs: "100px" },
=======
            top: { md: "308px", xs: "100px" },
>>>>>>> finalisation de la page place impact
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              left: "102px",
              fontSize: { md: "42px", xs: "22px" },
              color: "#FFFFFF !important",
              fontWeight: 900,
              lineHeight: "63px",
              fontStyle: "normal",
              margin: "49px 73px 0px 34px",
            }}
          >
            <span>La Place Impact vous donne accès à des </span>
            <span style={{ color: "#C4E3D5" }}>
              services
              <br /> écologiques, solidaires et
              <br /> innovants
            </span>
            <span style={{ color: "#FAAA42", borderRadius: 50 }}>.</span>
          </Typography>
        </Box>
      </Grid>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "36px",
          textAlign: "center",
          color: "#10403B",
        }}
      >
        Ces services vous permettent d’aller encore plus loin avec votre argent
        et de le mettre au service
        <br /> de la planète, tout en gagnant du temps et de l’argent !
      </Typography>
      <Container
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 20,
        }}
      >
        {EPARGNERIMAGEDATA.map((item) => (
          <Grid
            key={item.id}
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "2rem",
              mb: 10,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "center",
                ml: -5,
              }}
            >
              <Box
                component="img"
                src={title_bg}
                alt="ses services vous permettent d'aller encore plus loin"
                minWidth="318px"
              />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#fff",
                  mb: "4rem",
                  mt: {
                    md: -8,
                    xs: 15,
                  },
                }}
              >
                <span>{item.title}</span>
                <span style={{ color: "#FAAA42" }}>.</span>
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  margin: "0px 0px 20px",
                  width: "560px",
                }}
              >
                {item.paragraphe}
              </Typography>
            </Box>
            <MotionInView variants={varFadeInUp}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  mr: -10,
                }}
              >
<<<<<<< HEAD
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  height="150px"
                  width="180px"
                />
=======
                <Box component="img" src={item.icon} alt={item.title} />
>>>>>>> finalisation de la page place impact
                <Box
                  component="img"
                  src={item.icon_deux}
                  alt={item.title}
                  marginLeft="3rem"
<<<<<<< HEAD
                  height="150px"
                  width="180px"
=======
>>>>>>> finalisation de la page place impact
                />
                {item.icon_trois ? (
                  <Box
                    component="img"
                    src={item.icon_trois}
                    alt={item.title}
<<<<<<< HEAD
                    height="150px"
                    width="180px"
=======
>>>>>>> finalisation de la page place impact
                    marginLeft="3rem"
                  />
                ) : (
                  ""
                )}
              </Box>
            </MotionInView>
            <Box>
              <Divider
                orientation="horizontal"
                sx={{ color: "red" }}
                flexItem
              />
            </Box>
          </Grid>
        ))}
      </Container>
    </RootStyle>
  );
}
