import React from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography, Button } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import foret_image from "../../../assets/images/foret_image.svg";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function DifferentsService() {
  return (
    <RootStyle>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: -1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              height: "133px",
              top: "347px",
              fontSize: { md: "38px", xs: "22px" },
              color: "#10403B",
              fontWeight: 800,
              lineHeight: "57px",
              fontStyle: "normal",
              margin: "162.47px 100px 0px 119px",
            }}
          >
            Recevez la 1ère carte de paiement
            <span style={{ color: "#C4E3D5" }}> éco-responsable !</span>
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontFamily: "Lora",
              margin: "39px 100px 0px 119px",
              fontSize: "19px",
              fontWeight: 500,
              lineHeight: "27px",
            }}
          >
            Recevez la 1ère carte de paiement éco-responsable !<br /> Première
            carte de paiement à 85% en PVC recyclé lancée en France <br /> avec
            IDEMIA et Mastercard. Simple et efficace ! <br /> <br /> Il faut
            savoir qu’une tonne de plastique recyclé permet d’économiser <br />
            7,4 mètres cubes d’espace dans les décharges. <br /> <br />
            <span style={{ color: "#B7795E", fontWeight: 600 }}>
              Chaque geste compte.
            </span>
            <br /> <br /> Vous payez chez un commerçant, vous protégez la
            biodiversité. Tous <br /> les frais que nous percevons sont reversés
            à EcoTree afin de planter <br /> des haies et installer des ruches
            en France.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              height: "133px",
              top: "347px",
              fontSize: { md: "38px", xs: "22px" },
              color: "#10403B",
              fontWeight: 800,
              lineHeight: "57px",
              fontStyle: "normal",
              margin: "67px 100px 0px 119px",
            }}
          >
            Le prix de la
            <span style={{ color: "#C4E3D5" }}> transparence</span>
            <span style={{ color: "#FAAA42" }}> .</span>
          </Typography>
          <Typography
            sx={{
              color: "#10403B",
              fontFamily: "Lora",
              margin: "-37px 100px 0px 119px",
              fontSize: "19px",
              fontWeight: 500,
              lineHeight: "27px",
            }}
          >
            6€ par mois, c’est le prix de votre abonnement “Impact”, c’est
            encore loin des <br /> 215 euros annuel ! Il comprend :
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: "67px",
              mb: "75px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                bgcolor: "#C4E3D5",
                width: "702px",
                height: "339px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "Lora",
                  fontWeight: 400,
                  lineHeight: "27px",
                  margin: "31px 53px 61px 28px",
                }}
              >
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                votre compte courant (IBAN Français) et sa gestion, <br />{" "}
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                2 sous-coffres dans lesquels vous pouvez placer vos arrondis,
                <br />
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                votre carte physique et virtuelle au choix,
                <br />{" "}
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                les notifications en temps réels et les virements zone euro
                gratuits.
                <br />
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                Vous avez aussi la possibilité d’agréger tous vos comptes sans
                <br />
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "8px", mr: "5px" }}
                />
                supplément de coûts.
                <br />
                <Brightness1Icon
                  color="primary"
                  sx={{ height: "6px", width: "6px", mr: "6px" }}
                />
                Vous accédez enfin à de nombreux services dont un éco-coach qui
                vous{" "}
                <span style={{ ml: "-13rem" }}>
                  accompagne dans votre transition écologique et l’accès à des
                  offres d’épargne spécifiques.
                </span>
                <br />
                <span
                  style={{
                    ml: "386px",
                    fontSize: "19px",
                    fontFamily: "Lora",
                    fontWeight: 400,
                    lineHeight: "27px",
                    margin: "0px 53px 61px 270px",
                  }}
                >
                  Et oui, tout ça !
                </span>
              </Typography>
            </Box>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                borderRadius: 50,
                bgcolor: "#2A7267 !important",
                "&:hover": { bgcolor: "#10403B !important" },
                boxShadow: "none",
                margin: "7px 0px 0px 68px",
                fontSize: "16px",
                padding: "10px 38px 10px 38px",
              }}
              variant="contained"
              // href={PATH_PAGE.UnGesteUnImpact}
            >
              Je trouve l'abonnement qui me convient
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          src={foret_image}
          sx={{
            width: "509px",
            height: "1473px",
          }}
        />

        <Box
          src={foret_image}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#10403B",
            width: "508px",
            height: "316px",
            mt: 144.6,
            ml: "916px",
            position: "absolute",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "Lora",
              fontWeight: 600,
              color: "#fff",
              lineHeight: "25.6px",
            }}
          >
            215 Euros, le coût moyen des frais <br /> bancaires <br /> Vous
            n’auriez sûrement pas pensé <br /> que c’était aussi élevé. D’autant
            plus <br />
            que les coûts manquent souvent de <br /> transparence !
          </Typography>
        </Box>
      </Grid>
    </RootStyle>
  );
}
