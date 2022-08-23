import React from "react";
import { styled } from "@mui/system";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import citoyens_image from "../../../assets/images/citoyens_image.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { varFadeInUp, MotionInView } from "../../atoms/animate";
import { FINANCEMENTPROJETDATA } from "./PlaceImpact.constant";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import CommunautesInput from "../../molecules/CommunautesInput";
import AccordionDetails from "@mui/material/AccordionDetails";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function FinancementProjet() {
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon sx={{ fontSize: "1.3rem", mr: "1rem" }} />
      }
      {...props}
    />
  ))(({ theme }) => ({
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
  }));

  return (
    <RootStyle>
      <Box
        sx={{ bgcolor: "#E4D6C0", marginBottom: 8, mt: -15, height: "1372px" }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "39px",
            lineHeight: 1.2,
            fontWeight: 800,
            color: "#10403B",
            paddingTop: "7rem",
            mb: 18,
          }}
        >
          Participez vous aussi à financer des projets
          <br /> utiles depuis la Place Impact.
        </Typography>
        <Container>
          <Grid
            container
            rowSpacing={12}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            {FINANCEMENTPROJETDATA.map((item) => (
              <Grid
                item
                xs={6}
                alignItems="center"
                justifyContent="center"
                key={item.id}
              >
                <MotionInView variants={varFadeInUp}>
                  <Card
                    sx={{
                      maxWidth: "511px",
                      borderRadius: "0px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="green iguana"
                      sx={{ zIndex: 0 }}
                      className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                    />
                  </Card>
                  <Box
                    component="container"
                    alt="Eco-compte Onlyone"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { md: "270px", xs: "380px" },
                      zIndex: 6,
                      bgcolor: "#10403B",
                      opacity: 0.75,
                      height: "132px ",
                      mt: { md: "-180px", xs: "100px" },
                      marginLeft: { md: "120px", xs: "0px" },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "24px",
          lineHeight: "36px",
          color: "#10403B",
          fontWeight: 700,
          mt: 10,
          mb: 12,
        }}
      >
        F.A.Q
      </Typography>
      <Container>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                color: "#10403B",
                fontWeight: 700,
                lineHeight: "36px",
                fontSize: "24px",
                "&:hover": {
                  color: "#10403B",
                },
              }}
            >
              Comment sélectionnez-vous vos partenaires ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "Lora",
                color: "#10403B",
                fontSize: "19px",
                lineHeight: "26px",
              }}
            >
              Nous sélectionnons nos partenaires en fonction de la qualité du
              service proposé et des valeurs défendues par celui-ci. <br />{" "}
              <br />
              Pour chaque service proposé, nous réalisons une étude des
              différentes solutions proposées sur le marché et sélectionnons
              celle qui <br /> offre à la fois de la performance et de l’impact
              positif.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                color: "#10403B",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "36px",
              }}
            >
              Comment souscrire à un service proposé sur la Place de l'impact?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontFamily: "Lora",
                color: "#10403B",
                fontSize: "19px",
                lineHeight: "26px",
              }}
            >
              Une fois que vous êtes sur l’onglet “Place de l’impact” sur votre
              application OnlyOne, vous pouvez vous rendre sur les différentes
              <br />
              sections (épargne, investissement, assurance, vie quotidienne,
              dons) et ensuite sélectionner le service que vous souhaitez
              découvrir en <br /> cliquant sur l’icône et titre décrivant le
              service associé. <br /> <br />
              Si l’offre proposée vous a séduit, il ne vous reste plus qu’à
              cliquer le bouton “Je découvre” afin d’ouvrir le lien vers le site
              internet de <br /> notre partenaire et vous y inscrire.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider />
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: { md: "100%", xs: "100%" },
          mt: "109px",
          height: "485px",
        }}
      >
        <Box component="img" src={citoyens_image} />
        <Typography
          sx={{
            position: "absolute",
            width: "924px",
            height: "145px",
            mt: "-300px",
            left: "500px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "48px",
            color: "#10403B",
          }}
        >
          <CommunautesInput
            titleStyle={{ lineHeight: "48px" }}
            titre="Rejoins le mouvement des citoyens mettant leur argent au service du climat, de la biodiversité et de la société."
          />
        </Typography>
      </Box>
    </RootStyle>
  );
}
