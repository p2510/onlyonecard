import { styled } from "@mui/system";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Cursor, Typewriter } from "react-simple-typewriter";
import { MHidden } from "../../atoms/@material-extend";
import compte_courant from "../../../assets/images/compte_courant.png";
import adoptez from "../../../assets/images/adoptez.png";
import ademe from "../../../assets/images/ademe.png";
import abc from "../../../assets/images/abc.png";
import conseil_avise from "../../../assets/images/conseil_avise.png";
import lampe_icon from "../../../assets/images/lampe_icon.png";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import CommunautesInput from "src/components/molecules/CommunautesInput";
import Logo from "src/components/atoms/Logo";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function DetailEmpreinteCarbone() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={3}
        sx={{ mb: 7, marginTop: { md: "6rem" }, width: "80vw", mx: "auto" }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={6} ml="0rem">
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={compte_courant}
                sx={{
                  borderRadius: 2,
                  width: "28vw",
                  height: "23vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>

        <Grid item xs={12} md={6} lg={5.8}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                lineHeight: "1.4em",
                fontSize: "35px",
              }}
            >
              Chaque euro dépensé peut devenir une bonne action
              <span style={{ color: "#00db89" }}> !</span>
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 5,
                fontSize: "19px",
                fontWeight: 400,
                boxSizing: "border-box",
                lineHeight: 1.4,
              }}
            >
              Notre mode de consommation est au cœur des enjeux <br />{" "}
              climatiques et de biodiversité. Pour faire les bons choix,
              <br /> encore faut-il être informé.
              <br /> <br />
              Pour cela, il est nécessaire de pouvoir récolter ces <br />{" "}
              informations sur l’ensemble des catégories, de <br />{" "}
              l’alimentation aux transports en passant par l’habillement,
              <br /> de manière simple et rapide.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={6} lg={5.7}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                lineHeight: "1.4em",
                fontSize: "35px",
              }}
            >
              En route vers un mode de vie bas carbone
              <span style={{ color: "#00db89" }}> .</span>
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 5,
                fontSize: "19px",
                fontWeight: 400,
                boxSizing: "border-box",
                lineHeight: 1.4,
              }}
            >
              Afin d’accompagner chaque utilisateur vers un mode de vie bas
              carbone, nous avons développé en interne différents algorithmes
              qui permettent d’estimer votre empreinte carbone, de la comprendre
              puis de la réduire.
              <br /> <br />
              Chaque utilisateur pourra consulter les émissions de CO2e des
              achats effectués avec ses cartes, connaître son score personnalisé
              et découvrir des alternatives plus éco-responsables.
            </Typography>
          </MotionInView>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={4} lg={6.3} mt="6rem">
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={adoptez}
                ml="12rem"
                sx={{
                  borderRadius: 2,
                  width: "14vw",
                  height: "16vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{ mb: 20, marginTop: { md: "4rem" }, width: "80vw", mx: "auto" }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6} lg={6} ml="0rem">
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={conseil_avise}
                mt="3rem"
                ml="5rem"
                sx={{
                  borderRadius: 2,
                  width: "21vw",
                  height: "28vw",
                }}
              />
            </MotionInView>
          </Grid>
        </MHidden>

        <Grid item xs={12} md={6} lg={5.8}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                my: 2,
                color: "common.gray",
                fontWeight: "fontWeightMedium",
                lineHeight: "1.4em",
                fontSize: "35px",
              }}
            >
              Une fonctionnalité <br />
              écologique et innovante
              <span style={{ color: "#00db89" }}> !</span>
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                opacity: 0.72,
                mb: 5,
                fontSize: "19px",
                fontWeight: 400,
                boxSizing: "border-box",
                lineHeight: 1.4,
              }}
            >
              Associant une empreinte marginale en kilogramme de CO2e par euro
              dépensé et le montant de la transaction, le calculateur estime la
              quantité totale de CO2e impliquée dans chacun de vos achats.
              <br /> <br />
              En hiérarchisant les postes les plus polluants et en ciblant les
              recommandations pertinentes, l’éco-coach vous épaule et vous donne
              les clés d’un mode de vie bas carbone.
              <br /> <br />
              Alternatives et gestes simples, faits et statistiques ou encore
              marques éco-responsables vous aideront à diminuer les émissions de
              CO2e engendrées par vos transactions.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
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
            fontSize: "35px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",
            mt: {
              md: -2,
              xs: 15,
            },
            mb: 7,
          }}
        >
          Ensemble, réduisons notre empreinte carbone et changeons notre façon
          de consommer afin d’adopter un mode de vie plus durable !
        </Typography>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 7,
          }}
        >
          <Link href="https://www.ademe.fr/" target="_blank" underline="none">
            <Box
              component="img"
              src={ademe}
              sx={{ height: "160px", margin: "0rem 20rem 0rem 0rem" }}
              alt="Agence de la transition écologique"
            />
          </Link>
          <Link
            href="https://abc-transitionbascarbone.fr/"
            target="_blank"
            underline="none"
          >
            <Box
              component="img"
              src={abc}
              sx={{ height: "150px", margin: "0rem rem 0rem 0rem" }}
              alt="Agence de la transition écologique"
            />
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
            mt: {
              md: 1,
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              alignItems: "center",
              mr: "1rem",
            }}
          >
            Un Compte
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2.4rem",
              fontWeight: "bold",
              alignItems: "center",
              color: "#00bd85",
            }}
          >
            <Typewriter
              words={["digital", "responsable", "transparent"]}
              loop
            />
            <Cursor />
          </Typography>
        </Box>
        <Box
          component="img"
          src={lampe_icon}
          alt="Lock"
          sx={{
            mb: 0.5,
            width: "150px",
            height: "115px",
          }}
        />
        <Logo />
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
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            alignItems: "center",
            mb: 5,
            mt: {
              md: 2,
            },
          }}
        >
          Soyez riche de vos valeurs.
        </Typography>
      </Grid>
      <CommunautesInput title="Rejoins la communauté" />
    </RootStyle>
  );
}
