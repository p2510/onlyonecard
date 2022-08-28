import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import compte_courant from "../../../assets/images/compte_courant.svg";
import adoptez from "../../../assets/images/adoptez.svg";
import telephone_2 from "../../../assets/images/telephone_2.svg";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: { md: "left", xs: "center" },
  },
}));

export default function DetailEmpreinteCarbone() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-betwenn",
          flexDirection: "row",
          width: "100%",
          mb: 15,
        }}
      >
        <Grid item xs={12} md={8}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                color: "#10403B",
                fontWeight: 700,
                lineHeight: "36px",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              Chaque euro dépensé peut devenir une
              <span style={{ color: "#C4E3D5" }}> bonne action</span>
              <span style={{ color: "#FAAA42" }}> !</span>
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontFamily: "Lora",
                fontSize: "19px",
                textAlign: "center",
                fontWeight: 400,
                lineHeight: "27px",
                pl: { md: 0, xs: 1 },
                pr: { md: 0, xs: 1 },
                mt: 7,
              }}
            >
              Notre mode de consommation est au cœur des enjeux
              <br /> climatiques et de biodiversité. Pour faire les bons choix,
              <br />
              encore faut-il être informé.
              <br />
              <br /> Pour cela, il est nécessaire de pouvoir récolter ces
              <br />
              informations sur l’ensemble des catégories, de l’alimentation
              <br /> aux transports en passant par l’habillement, de manière
              <br />
              simple et rapide.
            </Typography>
          </MotionInView>
        </Grid>
        <MHidden width="mdDown">
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={compte_courant}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          width: "100%",
          mb: 7,
          mx: "auto",
        }}
      >
        <MHidden width="mdDown" mr="-30rem">
          <Grid item xs={12} md={6} mt="-5rem" marginRight="-10rem">
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={adoptez}
              />
            </MotionInView>
          </Grid>
        </MHidden>

        <Grid item xs={12} md={6} ml={{ md: "-18rem", xs: 0 }}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                color: "#10403B",
                fontWeight: 700,
                lineHeight: "36px",
                fontSize: "24px",
                textAlign: "center",
                pl: { md: 0, xs: 2 },
                pr: { md: 0, xs: 2 },
              }}
            >
              En route vers un mode de vie
              <span style={{ color: "#C4E3D5" }}> bas carbone</span>
              <span style={{ color: "#FAAA42" }}> .</span>
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontFamily: "Lora",
                fontSize: "19px",
                textAlign: "center",
                fontWeight: 400,
                lineHeight: "27px",
                mt: 7,
                pl: { md: 0, xs: 1 },
                pr: { md: 0, xs: 1 },
              }}
            >
              Afin d’accompagner chaque utilisateur vers un mode de vie
              <br /> bas carbone, nous avons développé en interne différents
              <br /> algorithmes qui permettent d’estimer votre empreinte
              <br />
              carbone, de la comprendre puis de la réduire.
              <br />
              <br /> Chaque utilisateur pourra consulter les émissions de CO2e
              <br />
              des achats effectués avec ses cartes, connaître son score
              <br />
              personnalisé et découvrir des alternatives plus éco-
              <br />
              responsables.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-betwenn",
          flexDirection: "row",
          mt: { md: 20, xs: 10 },
          width: "100%",
          marginLeft: { md: "-10rem", xs: -1.5 },
          mb: 15,
          mx: "auto",
        }}
      >
        <Grid item xs={12} md={8} marginLeft={{ md: "-5rem", xs: 0 }}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                color: "#10403B",
                fontWeight: 700,
                lineHeight: "36px",
                fontSize: "24px",
                textAlign: "center",
              }}
            >
              Une fonctionnalité
              <span style={{ color: "#C4E3D5" }}> écologique</span>
              et
              <span style={{ color: "#C4E3D5" }}> innovante</span>
              <span style={{ color: "#FAAA42" }}> .</span>
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontFamily: "Lora",
                fontSize: "19px",
                textAlign: "center",
                fontWeight: 400,
                lineHeight: "27px",
                mt: 7,
                pl: { md: 0, xs: 1 },
                pr: { md: 0, xs: 1 },
              }}
            >
              Associant une empreinte marginale en kilogramme de CO2e par
              <br /> euro dépensé et le montant de la transaction, le
              calculateur estime
              <br /> la quantité totale de CO2e impliquée dans chacun de vos
              achats.
              <br />
              <br /> En hiérarchisant les postes les plus polluants et en
              ciblant les
              <br /> recommandations pertinentes, l’éco-coach vous épaule et
              vous
              <br /> donne les clés d’un mode de vie bas carbone.
              <br />
              <br /> Alternatives et gestes simples, faits et statistiques ou
              encore
              <br /> marques éco-responsables vous aideront à diminuer les
              émissions
              <br /> de CO2e engendrées par vos transactions.
            </Typography>
          </MotionInView>
        </Grid>

        <MHidden width="mdDown">
          <Grid
            item
            xs={12}
            md={4}
            marginLeft={{ md: "-5rem", xs: 0 }}
            marginTop="-2rem"
          >
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Image d'une pièce d'hero "
                src={telephone_2}
              />
            </MotionInView>
          </Grid>
        </MHidden>
      </Grid>
    </RootStyle>
  );
}
