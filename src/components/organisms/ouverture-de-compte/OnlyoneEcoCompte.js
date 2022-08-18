import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import "react-phone-number-input/style.css";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { OUVERTURECOMPTEDATA } from "./OnlyoneEcoCompte.constant";
import riviere from "../../../assets/images/riviere.png";
import { CustomTextField } from "src/components/atoms/GeneralTextfield.style";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function OnlyoneEcoCompte() {
  return (
    <RootStyle>
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
                    textAlign: "center",
                    fontFamily: "Lora",
                    fontSize: "21px",
                    fontWeight: 600,
                    lineHeight: "26px",
                    color: "#B7795E",
                    margin: "59px 0px 50px 0px",
                  }}
                >
                  {item.title}
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontSize: "19px",
                    textAlign: "center",
                    fontWeight: 400,
                    fontFamily: "Lora",
                    lineHeight: "27px",
                    color: "#10403B",
                    width: "290px",
                  }}
                >
                  {item.paragraphe}
                </Typography>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: -10,
          mt: 25,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "start",
            width: "100%",
            height: "396px",
            background: "#E4D6C0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lora",
              fontSize: "20px",
              color: "#10403B",
              fontWeight: 400,
              textAlign: "27px",
              ml: 20,
            }}
          >
            Téléphone (Nécessaire)
          </Typography>
          <MotionInView variants={varFadeInUp}>
            <Box sx={{ ml: 20 }}>
              <CustomTextField type="email" placeholder="* votre@email.com" />
            </Box>
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
              ml: 20,
              padding: "7px 38px 10px 38px",
            }}
          >
            M'abonner
          </Button>
        </Box>
        <Box component="img" src={riviere} />
      </Grid>
    </RootStyle>
  );
}
