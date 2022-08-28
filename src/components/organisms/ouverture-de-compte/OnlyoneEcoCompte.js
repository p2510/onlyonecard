import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import "react-phone-number-input/style.css";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { OUVERTURECOMPTEDATA } from "./OnlyoneEcoCompte.constant";
import ouverture_compte_img from "../../../assets/images/ouverture_compte_img.svg";
import cercle from "../../../assets/images/cercle.svg";
import riviere from "../../../assets/images/riviere.svg";
import { CustomTextField } from "src/components/atoms/GeneralTextfield.style";
import { MHidden } from "src/components/atoms/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
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
          mt: 23,
        }}
      >
        <Grid
          xs={12}
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between", mb: "6rem" }}
        >
          <Grid xs={6} sx={{ padding: "25px" }}>
            <Typography
              sx={{
                fontSize: "42px",
                fontWeight: 900,
                lineHeight: "63px",
                textAlign: { md: "start", xs: "center" },
                color: "#10403B",
                mb: { md: 10, xs: 0 },
                mt: {
                  md: 5,
                  xs: -12,
                },
              }}
            >
              C’est si
              <span style={{ color: "#C4E3D5" }}> simple </span>
              d’ouvrir un
              <br /> éco-compte OnlyOne!
            </Typography>
          </Grid>
          <MHidden width="mdDown">
            <Grid xs={6}>
              <MotionInView variants={varFadeInUp}>
                <Box
                  component="img"
                  src={ouverture_compte_img}
                  sx={{ opacity: 0.99 }}
                />
                <Box
                  component="img"
                  src={cercle}
                  sx={{ margin: "-380px 0px 0px -35px" }}
                />
              </MotionInView>
            </Grid>
          </MHidden>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
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
                justifyContent: "space-between",
                marginRight: { md: "2rem", xs: 0 },
                marginBottom: { md: 0, xs: 10 },
              }}
            >
              <MotionInView variants={varFadeInUp}>
                <Box component="img" src={item.icon} alt={item.title} />
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
                    marginTop: { md: "59px", xs: 2 },
                    marginBottom: { md: "50px", xs: 2 },
                    width: { md: "290px", xs: "280px" },
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
                    width: { md: "290px", xs: "280px" },
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
          mt: { md: 25, xs: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: { md: "start", xs: "center" },
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
              ml: { md: 20, xs: 0 },
            }}
          >
            Téléphone (Nécessaire)
          </Typography>
          <MotionInView variants={varFadeInUp}>
            <Box sx={{ ml: { md: 20, xs: 0 } }}>
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
              ml: { md: 20, xs: 0 },
              padding: "7px 38px 10px 38px",
            }}
          >
            M'abonner
          </Button>
        </Box>
        <MHidden width="mdDown">
          <Box component="img" src={riviere} />
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
