import React, { useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import CommunautesInput from "../../molecules/CommunautesInput";
import TButton from "../../atoms/tailwindComponent/TButton";
import { MotionInView, varFadeInUp } from "../../atoms/animate";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  DIFFERENTSETAPESDATA,
  PARTENAIRELOGODATA,
} from "./CompteEcologiqueEtEthique.constant";
import Dialogue from "src/components/molecules/Dialogue";

export default function DifferentsEtapes() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalClose = () => {
    setOpen(false);
  };
  const modalClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container
      spacing={2}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: -3,
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2.3rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 6,
            mt: {
              md: 19,
            },
          }}
        >
          L’impact positif pensé à toutes les étapes
        </Typography>
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: 4,
            xs: 8,
          },
          top: {
            xs: -70,
            md: -40,
          },
        }}
      >
        {DIFFERENTSETAPESDATA.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: "2rem",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                src={item.icon}
                sx={{
                  width: "170px",
                  height: "130px",
                }}
              />
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography sx={{ fontSize: "18px", textAlign: "start" }}>
                {item.paragraphe}
              </Typography>
              <MHidden width="mdDown">
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: { md: 16, xs: 16 },
                    mt: 5,
                    width: 380,
                  }}
                >
                  <TButton name={item.title} link={item.link} />
                </Grid>
              </MHidden>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.4rem",
          fontWeight: "bold",
          lineHeight: 1.2,
          textAlign: "center",
          mb: 7,
        }}
      >
        Ouvrez un compte pour rejoindre le mouvement des <br /> citoyens au
        service du climat, de la biodiversité et de la société
      </Typography>
      <MotionInView variants={varFadeInUp}>
        <Grid
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onClick={modalClickOpen}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { md: 13, xs: 16 },
          }}
        >
          <TButton name="J'ouvre un compte" />
        </Grid>
      </MotionInView>
      <CommunautesInput title="Rejoins la communauté" />
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.8rem",
            fontWeight: "bold",
            alignItems: "center",
            mt: {
              md: 7,
            },
            mb: 3,
          }}
        >
          <span>Nos partenaires</span>
          <span style={{ color: "#00db89" }}>.</span>
        </Typography>
      </Grid>

      <Grid
        Container
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          width: "100%",
          ml: -10,
          mb: {
            md: 6.5,
            xs: 8,
          },
        }}
      >
        <Carousel
          width="112%"
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
        >
          {PARTENAIRELOGODATA.map((item) => (
            <Grid
              item
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {item.marc?.map((item) => (
                <Box
                  component="img"
                  src={item.icon}
                  sx={{
                    width: "165px",
                    height: "125px",
                  }}
                />
              ))}
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <Dialogue open={open} modalClose={modalClose} />
    </Container>
  );
}
