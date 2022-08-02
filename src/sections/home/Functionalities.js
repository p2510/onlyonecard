import { useState, useRef } from "react";
import { Grid, Typography, Card } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";

import {
  varFadeInUp,
  MotionInView,
  varFadeInLeft,
} from "../../components/animate";
import { FONCTIONNALITES } from "./Home.constant";
import ImageItem from "../../components/ImageItem";
import TButton from "./../../components/tailwindComponent/TButton.js";
import { PATH_PAGE } from "src/routes/paths";

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
      sx={{ mb: 17, marginTop: { md: "10rem" }, width: "80vw", mx: "auto" }}
    >
      <Grid item xs={12} md={5} lg={6.5}>
        <MotionInView variants={varFadeInUp}>
          <Card sx={{ width: { md: 410, xs: 260 } }}>
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

      <Grid item xs={12} md={7} lg={5}>
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
            Un compte innovant, simple et responsable
            <span style={{ color: "#00db89" }}>.</span>
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInLeft}>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 3,
            }}
          >
            <CheckIcon />
            Paiements internationaux sans frais et sans limite
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 1,
            }}
          >
            <CheckIcon />
            Eco-coach pour mesurer, comprendre et réduire l’empreinte carbone
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 1,
            }}
          >
            <CheckIcon />
            Agrégation des différents comptes bancaires de l’utilisateur
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 1,
            }}
          >
            <CheckIcon />
            Notifications d’opérations en temps réel
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 1,
            }}
          >
            <CheckIcon />
            Coffres d’épargne
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mt: 1,
            }}
          >
            <CheckIcon />
            Avantages exclusifs chez nos partenaires éco-responsables
          </Typography>
          <Typography
            sx={{
              opacity: 0.72,
              fontSize: "18px",
              mb: 5,
              mt: 1,
            }}
          >
            <CheckIcon />
            Support client humain disponible par mail et téléphone
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TButton
            name="Je découvre toutes les fonctionnalités"
            link={PATH_PAGE.CompteEcologiqueEthique}
          />
        </MotionInView>
      </Grid>
    </Grid>
  );
}
