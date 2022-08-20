import React, { useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import CommunautesInput from "../../molecules/CommunautesInput";
import { MotionInView, varFadeInUp } from "../../atoms/animate";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import etape_image from "../../../assets/images/etape_image.svg";
import citoyens_image from "../../../assets/images/citoyens_image.svg";
import {
  DIFFERENTSETAPESDATA,
  PARTENAIRELOGODATA,
} from "./CompteEcologiqueEtEthique.constant";
import Dialogue from "src/components/molecules/Dialogue";
import { MHidden } from "src/components/atoms/@material-extend";
import { styled } from "@mui/system";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function DifferentsEtapes() {
  const [open, setOpen] = useState(false);
  const modalClose = () => {
    setOpen(false);
  };

  return (
    <RootStyle>
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
                md: 15,
              },
            }}
          >
            L’
            <span style={{ color: "#C4E3D5", marginRight: "10px" }}>
              impact positif
            </span>
            pensé à toutes les étapes .
          </Typography>
        </Grid>

        <Grid
          Container
          spacing={8}
          direction={{ xs: "column", sm: "row" }}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 5,
            mb: {
              md: 4,
              xs: 8,
            },
          }}
        >
          <Grid item xs={3} ml="-5rem" mt="-25rem">
            <Box component="img" src={etape_image} />
          </Grid>
          {DIFFERENTSETAPESDATA.map((item) => (
            <Grid
              item
              xs={9}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                width: "230px",
                ml: 12,
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  mb: 5,
                }}
              >
                <MotionInView variants={varFadeInUp}>
                  <Box component="img" src={item.icon} />
                </MotionInView>
              </Grid>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                  }}
                >
                  {item.paragraphe}
                </Typography>
                <MHidden width="mdDown">
                  <Button
                    sx={{
                      borderRadius: 50,
                      fontFamily: "Lora",
                      bgcolor: "#2A7267 !important",
                      "&:hover": { bgcolor: "#10403B !important" },
                      boxShadow: "none",
                      margin: "100px -70px 0px -20px",
                      fontSize: "16px",
                    }}
                    variant="contained"
                    href={item.link}
                  >
                    {item.title}
                  </Button>
                </MHidden>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          bgcolor: "#C4E3D5",
          width: { md: "100%", xs: "100%" },
          mt: "149px",
          height: "485px",
        }}
      >
        <Box component="img" src={citoyens_image} />
        <Typography
          sx={{
            position: "absolute",
            width: "679px",
            height: "145px",
            mt: "-120px",
            left: "660px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "48px",
            color: "#10403B",
          }}
        >
          Ouvrez un compte pour rejoindre le mouvement des citoyens au service
          du climat, de la biodiversité et de la société
          {/* <Box> */}
          <Button
            variant="contained"
            sx={{
              left: "28%",
              top: "70%",
              background: "#FAAA42 !important",
              "&:hover": { bgcolor: "#f7b96c !important" },
              borderRadius: "30px",
              fontSize: "16px",
              boxShadow: "none",
              padding: "8px 50px 9px 50px",
            }}
            onClick={() => setOpen(true)}
          >
            J'ouvre un compte
          </Button>
          {/* </Box> */}
        </Typography>
      </Box>
      <CommunautesInput titre="Rejoins la communauté" />
      <Container>
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
              fontSize: "38px",
              fontWeight: "bold",
              color: "#10403B",
              alignItems: "center",
              mt: {
                md: 7,
              },
              mb: 11,
            }}
          >
            <span>Nos </span>
            <span
              style={{
                color: "#C4E3D5",
                marginLeft: "0.5rem",
              }}
            >
              partenaires
            </span>
            <span style={{ color: "#FAAA42" }}>.</span>
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
              md: 4,
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
      </Container>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
