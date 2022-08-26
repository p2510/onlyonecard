import { styled } from "@mui/system";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInUp } from "../../atoms/animate";
import { EPARGNERIMAGEDATA } from "./PlaceImpact.constant";
import arbres_image from "../../../assets/images/arbres_image.png";
import title_bg from "../../../assets/images/title_bg.png";
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
        <Grid container mt="8rem">
          <Box
            component="img"
            src={arbres_image}
            alt="Eco-compte Onlyone"
            sx={{
              width: "100%",
              height: "655px",
              position: "absolute",
              mb: "1rem",
            }}
          />
        </Grid>
      </MHidden>
      <Grid
        container
        mb={{ md: "55rem", xs: 70 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="container"
          alt="Eco-compte Onlyone"
          sx={{
            opacity: { md: 0.75, xs: 1 },
            width: { md: "845px", xs: "100%" },
            height: { md: "375px", xs: "350px" },
            bgcolor: "#10403B",
            position: "absolute",
            top: { md: "288px", xs: "140px" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              left: "102px",
              fontSize: { md: "42px", xs: "22px" },
              color: "#fff !important",
              fontWeight: 900,
              lineHeight: "63px",
              fontStyle: "normal",
              margin: "49px 0px 0px 0px",
              marginRight: { md: "73px", xs: 0 },
              marginLeft: { md: "34px", xs: 0 },
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
          pl: { md: 0, xs: 3 },
          pr: { md: 0, xs: 3 },
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
              flexDirection: { md: "row", xs: "column" },
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
                ml: { md: -5, xs: 0 },
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
                    xs: -8,
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
                  width: { md: "560px", xs: "100%" },
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
                  mr: { md: -10, xs: -2 },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  height={{ md: "150px", xs: "120px" }}
                  width={{ md: "180px", xs: "120px" }}
                />
                <Box
                  component="img"
                  src={item.icon_deux}
                  alt={item.title}
                  marginLeft={{ md: "-3rem", xs: "-2rem" }}
                  height={{ md: "150px", xs: "120px" }}
                  width={{ md: "180px", xs: "120px" }}
                />
                {item.icon_trois ? (
                  <Box
                    component="img"
                    src={item.icon_trois}
                    alt={item.title}
                    height={{ md: "150px", xs: "120px" }}
                    width={{ md: "180px", xs: "120px" }}
                    marginLeft={{ md: "-3rem", xs: "-2rem" }}
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
