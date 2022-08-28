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
              flexDirection: { md: "row", xs: "column" },
              fontSize: { md: "2.3rem", xs: "1.8rem" },
              fontWeight: "bold",
              alignItems: "center",
              mb: 6,
              mt: {
                md: 15,
                xs: 5,
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
          <MHidden width="mdDown">
            <Grid item xs={3} ml="-5rem" mt="-25rem">
              <Box component="img" src={etape_image} />
            </Grid>
          </MHidden>
          {DIFFERENTSETAPESDATA.map((item) => (
            <Grid
              item
              xs={12}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { md: "start", xs: "center" },
                justifyContent: { md: "start", xs: "center" },
                width: "230px",
                ml: { md: 12, xs: 0 },
              }}
            >
              <MotionInView variants={varFadeInUp}>
                <Box component="img" src={item.icon} />
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    mt: 5,
                  }}
                >
                  {item.paragraphe}
                </Typography>
                <Button
                  sx={{
                    borderRadius: 50,
                    fontFamily: "Lora",
                    bgcolor: "#2A7267 !important",
                    "&:hover": { bgcolor: "#10403B !important" },
                    boxShadow: "none",
                    marginRight: { md: "-70px", xs: 0 },
                    marginLeft: { md: "-20px", xs: 0 },
                    marginTop: { md: "70px", xs: 3 },
                    marginBottom: { md: 0, xs: 10 },
                    fontSize: "16px",
                  }}
                  variant="contained"
                  href={item.link}
                >
                  {item.title}
                </Button>
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
        <MHidden width="mdDown">
          <Box component="img" src={citoyens_image} />
        </MHidden>
        <Typography
          sx={{
            height: "145px",
            mt: { md: "-120px", xs: "-260px" },
            left: "660px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: { md: "32px", xs: "27px" },
            lineHeight: "48px",
            color: "#10403B",
            pl: { md: 0, xs: 3 },
            pr: { md: 0, xs: 3 },
          }}
        >
          Ouvrez un compte pour rejoindre le
          <br /> mouvement des citoyens au service du
          <br /> climat, de la biodiversité et de la société
          <Button
            variant="contained"
            sx={{
              left: { md: "28%", xs: 0 },
              top: { md: "70%", xs: 35 },
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
        </Typography>
      </Box>
      <CommunautesInput
        titre="Rejoins la communauté"
        sx={{ width: { md: "100%", xs: "50%" } }}
      />
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
                      width: "80px",
                      height: "75px",
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
