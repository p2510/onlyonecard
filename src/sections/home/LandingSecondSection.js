import React, { useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
} from "../../components/animate";
import { AVANTAGES } from "./Home.constant";
import TButton from "./../../components/tailwindComponent/TButton.js";
import Dialogue from "src/components/Dialogue";

export default function LandingSecondSection() {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const modalClose = () => {
    setOpen(false);
  };

  const modalClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container spacing={10}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.4rem",
          fontWeight: "bold",
          alignItems: "center",
          width: "100%",
          mb: 10,
          mt: {
            md: "8rem",
            xs: 0,
          },
        }}
      >
        Avec OnlyOne, alignez votre argent et vos valeurs, simplement
      </Typography>
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
            md: -20,
          },
        }}
      >
        {AVANTAGES.map((item) => (
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
                alt={item.title}
                sx={{
                  mb: 0.5,
                  width: "90px",
                  height: "90px",
                }}
              />
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bold",
                  mb: 4,
                }}
              >
                {item.title}
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInUp}>
              <Typography sx={{ fontSize: "15px", mt: "5px" }}>
                {<CheckIcon color="primary" />}
                {item.paragraphe}
              </Typography>
              <Typography sx={{ fontSize: "17px", mt: "15px" }}>
                {<CheckIcon color="primary" />}
                {item.paragraphe2}
              </Typography>
            </MotionInView>
          </Grid>
        ))}
      </Grid>
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
          <TButton name="j'ouvre un compte écologique et éthique" />
        </Grid>
      </MotionInView>
      <Dialogue open={open} modalClose={modalClose} />
    </Container>
  );
}
