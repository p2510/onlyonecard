import { useState, useRef } from "react";
import { Grid, Typography, Card, Button, Box } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";

import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import { FONCTIONNALITES } from "./Home.constant";
import ImageItem from "../../atoms/ImageItem";
// import TButton from "../../atoms/tailwindComponent/TButton.js";
import { PATH_PAGE } from "../../../configues//routes/paths";

export default function Functionalities() {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? FONCTIONNALITES.length - 1 : 0
  );

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: { md: "10rem" }, width: "80vw", mx: "auto" }}
    >
      <Grid item xs={12} md={5} lg={5.5}>
        <MotionInView variants={varFadeInUp}>
          <Card
            sx={{
              width: { md: "358px", xs: 260 },
              height: "478px",
              borderRadius: "0px",
            }}
          >
            <Slider ref={carouselRef} {...settings}>
              {FONCTIONNALITES.map((app, index) => (
                <ImageItem
                  key={app.id}
                  item={app}
                  isActive={index === currentIndex}
                />
              ))}
            </Slider>
          </Card>
        </MotionInView>
      </Grid>

      <Grid item xs={12} md={7} lg={6.5} mt="-2.3rem">
        <MotionInView variants={varFadeInLeft}>
          <Typography
            sx={{
              color: "#10403B",
              fontSize: "38px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "57px",
            }}
          >
            Un compte innovant, simple et responsable.
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInLeft}>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              color: "#10403B",
              mt: 3,
            }}
          >
            Paiements internationaux sans frais et sans limite <br />
            <br />
            <span style={{ color: "#FAAA42" }}>✓</span> Eco-coach pour mesurer,
            comprendre et réduire l’empreinte carbone <br />
            <br />
            <span style={{ color: "#FAAA42" }}>✓</span> Agrégation des
            différents comptes bancaires de l’utilisateur <br />
            <br />
            <span style={{ color: "#FAAA42" }}>✓</span> Notifications
            d’opérations en temps réel
            <br />
            <br /> <span style={{ color: "#FAAA42" }}>✓</span> Coffres d’épargne{" "}
            <br />
            <br /> <span style={{ color: "#FAAA42" }}>✓</span> Avantages
            exclusifs chez nos partenaires éco-responsables
            <br /> <br /> <span style={{ color: "#FAAA42" }}>✓</span> Support
            client humain disponible par mail et téléphone
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 7, mb: 12 }}
          >
            <Button
              sx={{
                borderRadius: 50,
                bgcolor: "#FAAA42",
                "&:hover": { bgcolor: "#f7b96c" },
                boxShadow: "none",
                fontSize: "16px",
                padding: "7px 38px 10px 38px",
              }}
              variant="contained"
              href={PATH_PAGE.UnGesteUnImpact}
            >
              Je découvre toutes les fonctionnalités
            </Button>
          </Box>
        </MotionInView>
      </Grid>
    </Grid>
  );
}
