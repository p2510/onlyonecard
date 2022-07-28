import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import "react-phone-number-input/style.css";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "../../components/animate";
import { OUVERTURECOMPTEDATA } from "./OnlyoneEcoCompte.constant";
import ouverture_compte_img from "../../assets/images/ouverture_compte_img.png";
import TButton from "src/components/tailwindComponent/TButton";

export default function OnlyoneEcoCompte() {
  return (
    <Container
      spacing={10}
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 20,
      }}
    >
      <Grid
        container
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "43px",
            fontWeight: 600,
            lineHeight: 0.9,
            textAlign: "center",
            mb: 10,
            mt: {
              md: 5,
              xs: -12,
            },
          }}
        >
          <span>C’est si</span> {""}
          <span style={{ color: "#00db89" }}>simple </span>
          <span>d’ouvrir un éco-compte OnlyOne </span>
          <span style={{ color: "#00db89" }}>!</span>
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mb: {
            md: 4,
            xs: 8,
          },
        }}
      >
        {OUVERTURECOMPTEDATA.map((item) => (
          <Grid
            key={item.id}
            xs={3}
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
                alt={item.title}
                sx={{
                  width: "150px",
                  height: "120px",
                }}
              />
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 0.9,
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "center",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  width: "290px",
                }}
              >
                {item.paragraphe}
              </Typography>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
      <Grid
        xs={12}
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between", mb: "6rem" }}
      >
        <Grid xs={6} sx={{ padding: "25px" }}>
          <Typography mb="4rem">Téléphone(Nécessaire)</Typography>
          <TButton name="Envoyer" />
        </Grid>
        <Grid xs={6}>
          <MotionInView variants={varFadeInUp}>
            <Box
              component="img"
              src={ouverture_compte_img}
              sx={{
                width: "240px",
                height: "260px",
                mr: 10,
              }}
            />
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
