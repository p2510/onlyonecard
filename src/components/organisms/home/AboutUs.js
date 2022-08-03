import { useState, useRef } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { MotionInView, varFadeInLeft, varFadeInUp } from "../../atoms/animate";
import { ABOUTUSDATA } from "./Home.constant";
import CarouselDots from "../../atoms/CarouselDots";
import Communautes from "../../molecules/Communautes";
import TButton from "../../atoms/tailwindComponent/TButton.js";
import Dialogue from "../../molecules/Dialogue";

export default function AboutUs({ isActive }) {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? ABOUTUSDATA.length - 1 : 0
  );

  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const modalClose = () => {
    setOpen(false);
  };

  const modalClickOpen = () => {
    setOpen(true);
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
      top: { md: 150, xs: 300 },
      left: { md: 500, xs: 95 },
      position: "absolute",
      color: "black",
    }),
  };

  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={6} lg={7.7}>
        <MotionInView variants={varFadeInLeft}>
          <Typography
            sx={{
              fontSize: "2.7rem",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Ils parlent de nous.
          </Typography>
          <Slider ref={carouselRef} {...settings}>
            {ABOUTUSDATA.map((app, index) => (
              <Grid key={app.id} item={app} isActive={index === currentIndex}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    ml: 4,
                  }}
                >
                  {app.paragraphe}
                </Typography>
                <Grid display="flex" flexDirection={{ md: "row", xs: "row" }}>
                  <Box
                    component="img"
                    src={app.icon}
                    sx={{ width: "65px", height: "65px", mt: 2 }}
                  />
                  <Typography sx={{ mt: 4, mb: 13, ml: 2, fontWeight: "bold" }}>
                    {app.libele}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Slider>
        </MotionInView>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "bold",
            alignItems: "center",
            mb: 8,
          }}
        >
          Rejoignez le mouvement des citoyens au service de la biodiversité, du
          climat et de la société.
        </Typography>
        <MotionInView variants={varFadeInUp}>
          <Grid
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onClick={modalClickOpen}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { md: 25, xs: 16 },
            }}
          >
            <TButton name="Je démarre" />
          </Grid>
        </MotionInView>
        <Communautes />
      </Grid>
      <Dialogue open={open} modalClose={modalClose} />
    </Container>
  );
}