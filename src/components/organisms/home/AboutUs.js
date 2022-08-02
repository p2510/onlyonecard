import { useState, useRef } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { MotionInView, varFadeInLeft, varFadeInUp } from "../../atoms/animate";
import { ABOUTUSDATA } from "./Home.constant";
import { styled } from "@mui/system";
import CarouselDots from "../../atoms/CarouselDots";
import nouveau_monde from "../../../assets/images/nouveau_monde.png";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { CustomTextField } from "src/components/atoms/GeneralTextfield.style";
import Dialogue from "src/components/molecules/Dialogue";
import { MHidden } from "src/components/atoms/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: -6,
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
  marginTop: -100,
}));

export default function AboutUs({ isActive }) {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? ABOUTUSDATA.length - 1 : 0
  );
  const [open, setOpen] = useState(false);
  const modalClose = () => {
    setOpen(false);
  };
  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 4,
      top: { md: 220, xs: 300 },
      left: { md: 360, xs: 95 },
      position: "absolute",
      color: "black",
    }),
  };

  return (
    <RootStyle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#2A7267",
          height: "611px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { md: "2.7rem", xs: "2rem" },
            fontWeight: "bold",
            mt: { md: "-59px", xs: 0 },
            mb: "63px",
            color: "#fff",
          }}
        >
          Ils parlent de nous.
        </Typography>
        <Box
          sx={{
            bgcolor: "#fff",
            width: { md: "853px", xs: "90%" },
            height: { md: "296px", xs: "390px" },
          }}
        >
          <MotionInView variants={varFadeInLeft}>
            <Slider ref={carouselRef} {...settings}>
              {ABOUTUSDATA.map((app, index) => (
                <Grid key={app.id} item={app} isActive={index === currentIndex}>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontSize: { md: "20px", xs: "15px" },
                      fontStyle: "italic",
                      padding: "40px 70px 0px 70px",
                      color: "#10403B",
                    }}
                  >
                    {app.paragraphe}
                  </Typography>
                  <MHidden width="mdDown">
                    <Grid
                      display="flex"
                      flexDirection={{ md: "row", xs: "row" }}
                    >
                      <Box
                        component="img"
                        src={app.icon}
                        sx={{
                          width: "65px",
                          height: "65px",
                          mt: 2,
                          padding: "0px 0px 0px 10px",
                        }}
                      />
                      <Typography
                        sx={{
                          mt: 4,
                          ml: 2,
                          fontWeight: 700,
                          fontSize: "24px",
                          color: "#10403B",
                        }}
                      >
                        {app.libele}
                      </Typography>
                    </Grid>
                  </MHidden>
                </Grid>
              ))}
            </Slider>
          </MotionInView>
        </Box>
      </Box>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",

          mb: 0,
        }}
      >
        <MHidden width="mdDown">
          <Box
            component="img"
            src={nouveau_monde}
            alt="Grâce à votre éco-compte OnlyOne."
            width="428px"
            height="992px"
          />
        </MHidden>
        <Box
          sx={{
            width: "100%",
            height: "992px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "610px",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "32px", xs: "25px" },
                fontWeight: 700,
                lineHeight: "48px",
                color: "#10403B",
                mt: { md: "-20px", xs: 10 },
                mb: "20px",
                textAlign: "center",
              }}
            >
              Rejoignez le mouvement d’un nouveau monde <br /> bancaire,
              écologique, transparent et sécurisé.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 50,
                bgcolor: "#FAAA42 !important",
                "&:hover": { bgcolor: "#f7b96c !important" },
                boxShadow: "none",
                fontSize: "16px",
                margin: "29px 0px 61px 0px",
                padding: "6px 38px 6px 38px",
              }}
              onClick={() => setOpen(true)}
            >
              Je démarre
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                alignItems: "center",
                justifyContent: "center",
                mb: { md: 7, xs: 3 },
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "38px",
                  fontWeight: "bold",
                  alignItems: "center",
                  color: "#10403B",
                  mr: "1rem",
                }}
              >
                Un Compte
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "38px",
                  fontWeight: "bold",
                  alignItems: "center",
                  color: "#00bd85",
                }}
              >
                <Typewriter
                  words={["simple", "sécurisé", "responsable"]}
                  loop
                />
                <Cursor />
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { md: "24px", xs: "18" },
                fontWeight: 700,
                lineHeight: "36px",
                color: "#10403B",
                textAlign: "center",
              }}
            >
              Conciliez votre argent et vos valeurs.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "382px",
              background: "#C4E3D5",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                color: "#10403B",
                fontWeight: 700,
                textAlign: "24px",
              }}
            >
              Rejoins la communauté
            </Typography>
            <MotionInView variants={varFadeInUp}>
              <CustomTextField type="email" placeholder="* votre@email.com" />
            </MotionInView>
            <Button
              sx={{
                variant: "contained",
                borderRadius: 50,
                background: "#10403B !important",
                "&:hover": { background: "#2A7267 !important" },
                boxShadow: "none",
                color: "#fff",
                fontSize: "16px",
                padding: "7px 38px 10px 38px",
              }}
            >
              M'abonner
            </Button>
          </Box>
        </Box>
      </Grid>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
