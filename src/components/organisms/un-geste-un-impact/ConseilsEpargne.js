import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography, Button } from "@mui/material";
import { MHidden } from "../../atoms/@material-extend";
import cascade_image from "../../../assets/images/cascade_image.svg";
import change_chose_image from "../../../assets/images/change_chose_image.svg";
import bordure_roche from "../../../assets/images/bordure_roche.svg";
import { varFadeInUp, MotionInView, varFadeInLeft } from "../../atoms/animate";
import Dialogue from "src/components/molecules/Dialogue";
import { CustomTextField } from "src/components/atoms/GeneralTextfield.style";
import { PATH_PAGE } from "src/configues/routes/paths";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function ConseilsEpargne() {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const modalClose = () => {
    setOpen(false);
  };

  const modalClickOpen = () => {
    setOpen(true);
  };

  return (
    <RootStyle>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "end",
          mt: -10,
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: { md: "end", xs: "center" },
              fontSize: { md: "38px", xs: "34px" },
              color: "#10403B",
              fontWeight: 800,
              lineHeight: { md: "57px", xs: "40px" },
              marginTop: "160.47px",
              marginLeft: { md: "119px", xs: 0 },
              marginRight: { md: "100px", xs: 0 },
              pl: { md: 0, xs: 3 },
              pr: { md: 0, xs: 3 },
            }}
          >
            Sélectionnez l’
            <span style={{ color: "#C4E3D5" }}>épargne positive</span>
            qui répond à vos <span style={{ color: "#C4E3D5" }}>besoins</span>
            <span style={{ color: "#FAAA42" }}>.</span>
          </Typography>
          <Typography
            sx={{
              color: "#10403B",
              fontFamily: "Lora",
              marginTop: { md: "90px", xs: "70px" },
              marginLeft: { md: "119px", xs: 0 },
              marginRight: { md: "100px", xs: 0 },
              fontSize: "19px",
              fontWeight: 400,
              lineHeight: "27px",
              textAlign: { md: "end", xs: "center" },
              pl: { md: 0, xs: 3 },
              pr: { md: 0, xs: 3 },
            }}
          >
            Dans l’app, vous accédez à la Place Impact : un espace de
            découvertes qui regroupe les
            <br /> offres de nos partenaires pour épargner et investir votre
            argent. Une sélection de
            <br /> services innovants, écologiques et solidaires, soigneusement
            concoctée par votre éco-
            <br />
            coach. Nous mettons notre expertise à votre service afin de vous
            faire gagner du
            <br /> temps, de l’argent et de l’impact positif !
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { md: "end", xs: "center" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: 50,
                bgcolor: "#2A7267 !important",
                "&:hover": { bgcolor: "#10403B !important" },
                boxShadow: "none",
                margin: "80px 0px 0px 0px",
                marginLeft: { md: "68px", xs: 0 },
                marginRight: { md: "100px", xs: 0 },
                fontSize: "16px",
                padding: "10px 38px 10px 38px",
              }}
              href={PATH_PAGE.PlaceImpact}
            >
              J'explore la place impact
            </Button>
          </Box>
        </Box>
        <MHidden width="mdDown">
          <Box
            component="img"
            src={bordure_roche}
            sx={{
              width: "492px",
              height: "711px",
            }}
          />
        </MHidden>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: 800,
          lineHeight: "57px",
          color: "#10403B",
          mt: {
            md: "216px",
            xs: 10,
          },
        }}
      >
        Un <span style={{ color: "#C4E3D5" }}>compte écologique </span> qui
        change les choses
        <span style={{ color: "#FAAA42" }}>!</span>
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          mb: 18,
          mt: {
            md: "8rem",
            xs: 0,
          },
          width: { md: "80vw", xs: "100%" },
          mx: "auto",
        }}
      >
        <MHidden width="mdDown">
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <Box
                component="img"
                alt="Un compte écologique qui change les choses"
                src={change_chose_image}
              />
            </MotionInView>
          </Grid>
        </MHidden>
        <Grid item xs={12} md={6} ml={{ md: "-5rem", xs: "0" }} mb="11rem">
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "19px",
                lineHeight: "27px",
                fontFamily: "Lora",
                color: "#333",
                fontWeight: 400,
                pl: { md: 0, xs: 3 },
                pr: { md: 0, xs: 3 },
              }}
            >
              Pour toucher son salaire ou payer ses factures, 99% des français
              <br />
              possèdent au moins un compte courant. Besoin du quotidien, le
              compte nous accompagne dans notre vie de tous les jours alors
              autant qu’il soit en adéquation avec les valeurs que nous portons.
              En 8 min, vous ouvrez un compte courant éthique et écologique,
              vous gérez votre argent comme votre empreinte carbone et vous
              transformez, à votre rythme, chacun de vos gestes en bonne action.
              <br />
              <br />
              L’exigence bancaire, une utilisation facile et intuitive, les
              valeurs en plus. Et si vous testiez ?
            </Typography>
          </MotionInView>

          <Box
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onClick={modalClickOpen}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              sx={{
                borderRadius: 50,
                bgcolor: "#FAAA42 !important",
                "&:hover": { bgcolor: "#f7ba6c !important" },
                boxShadow: "none",
                marginTop: { md: "120px", xs: 5 },
                marginRight: { md: "100px", xs: 0 },
                fontSize: "16px",
                padding: "7px 38px 7px 38px",
              }}
              variant="contained"
            >
              J'ouvre mon eco-compte
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box
        component="img"
        alt="fff"
        src={cascade_image}
        sx={{ width: "100%", zIndex: 0, mt: { md: "-110px", xs: "-150px" } }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: { md: -95, xs: -40 },
          mb: { md: 36.5, xs: -7.5 },
        }}
      >
        <Typography
          sx={{
            opacity: 0.99,
            fontSize: { md: "42px", xs: "23px" },
            color: "#10403B",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: { md: "63px", xs: "26px" },
          }}
        >
          Rejoignez le mouvement d’un
          <br /> nouveau monde bancaire,
          <br /> écologique, transparent et sécurisé.
        </Typography>
        <MotionInView variants={varFadeInUp}>
          <CustomTextField type="email" placeholder="* votre@email.com" />
        </MotionInView>
        <Button
          sx={{
            variant: "contained",
            borderRadius: 50,
            background: "#2A7267 !important",
            "&:hover": { background: "#10403B  !important" },
            boxShadow: "none",
            color: "#fff",
            fontSize: "16px",
            padding: "7px 38px 10px 38px",
          }}
        >
          M'abonner
        </Button>
      </Box>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
