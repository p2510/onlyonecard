import React, { useState } from "react";
import { styled } from "@mui/system";
import { Container, Divider, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { varFadeInUp, MotionInView } from "../../components/animate";
import { FINANCEMENTPROJETDATA } from "./PlaceImpact.constant";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import CommunautesInput from "src/components/CommunautesInput";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  marginBottom: "3.5rem",
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

const titre = (
  <Typography
    sx={{
      fontSize: "35px",
      lineHeight: 1.2,
      fontWeight: "bolder",
      textAlign: "start",
      margin: "0px",
      mb: 6,
      mt: 1,
      ml: -18,
    }}
  >
    Rejoins le mouvement des citoyens mettant leur argent au service du climat,
    de la biodiversité et de la société
  </Typography>
);

export default function FinancementProjet() {
  const [expanded, setExpanded] = useState(true);
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        expanded ? (
          <AddIcon
            onClick={() => setExpanded(true)}
            sx={{ fontSize: "0.9rem" }}
          />
        ) : (
          <ExpandMoreIcon
            onClick={() => setExpanded(false)}
            sx={{ fontSize: "0.9rem" }}
          />
        )
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(50deg)",
    },
  }));

  return (
    <RootStyle>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "39px",
          lineHeight: 1.2,
          fontWeight: 600,
          mt: 3,
          mb: 5,
        }}
      >
        <span>
          Participez vous aussi à financer des projets utiles depuis la <br />
          Place Impact
          <span style={{ color: "#00db89" }}>.</span>
        </span>
      </Typography>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          {FINANCEMENTPROJETDATA.map((item) => (
            <Grid item xs={6}>
              <MotionInView variants={varFadeInUp}>
                <Card sx={{ height: "140px" }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="green iguana"
                    className="opacity-90 hover:opacity-100 hover:cursor-text hover transition ease-in-out duration-500 "
                  />
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "35px",
          lineHeight: 1.2,
          fontWeight: 600,
          mt: 10,
          mb: 5,
        }}
      >
        F.A.Q
      </Typography>
      <Container>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{
                "&:hover": {
                  color: "#65bc7b",
                },
              }}
            >
              Comment sélectionnez-vous vos partenaires ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
                "&:hover": {
                  color: "#65bc7b",
                },
              }}
            >
              Comment souscrire à un service proposé sur la Place de l'impact?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "7rem",
            xs: 0,
          },
          width: "80vw",
          mx: "auto",
        }}
      >
        <CommunautesInput
          sx={{
            fontSize: "35px",
            fontWeight: 600,
            ml: 9.5,
            textAlign: "center",
            lineHeight: 1.4,
          }}
          title={titre}
          inputStyle={{ ml: "-7rem", mt: -6, mb: -20 }}
          buttonStyle={{ mr: "28.5rem" }}
        />
      </Grid>
    </RootStyle>
  );
}
