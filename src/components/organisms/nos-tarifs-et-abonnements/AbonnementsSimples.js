import React, { useState } from "react";
import abonnement_simple_img from "../../../assets/images/abonnement_simple_img.png";
import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MHidden } from "src/components/atoms/@material-extend";
import { MotionInView, varFadeInLeft } from "src/components/atoms/animate";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TButton from "src/components/atoms/tailwindComponent/TButton";
import Dialogue from "src/components/molecules/Dialogue";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

AbonnementsSimples.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AbonnementsSimples() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
      <MHidden width="mdDown">
        <Grid container>
          <Box
            component="img"
            src={abonnement_simple_img}
            alt="Eco-compte Onlyone"
            sx={{
              width: "100%",
              height: 450,
              alignItems: "center",
              mt: 13.3,
            }}
          />
        </Grid>
      </MHidden>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          mt: "5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            mr: {
              md: "3rem",
              xs: 0,
            },
          }}
        >
          <span style={{ fontSize: "60px", fontWeight: "bold" }}>3€</span>
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            /mois
          </span>{" "}
          <br />
          Compte jeune (18-25 ans)
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
            ml: {
              md: "3rem",
              xs: 0,
            },
          }}
        >
          <span style={{ fontSize: "60px", fontWeight: "bold" }}>6€</span>
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>
            /mois
          </span>{" "}
          <br />
          Compte impact
        </Typography>
      </Grid>
      <Typography
        sx={{
          fontWeight: 400,
          textAlign: "center",
          fontSize: "20px",
          mt: 8,
          mb: 3,
        }}
      >
        Commencez à gérer votre argent avec un impact positif dès aujourd’hui.
        <br />
        C’est simple et sans engagement !
      </Typography>
      <Container
        sx={{
          dispaly: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5rem",
        }}
      >
        <Grid item md={12}>
          <MotionInView variants={varFadeInLeft}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1.3,
                mt: {
                  md: 18,
                  xs: 15,
                },
              }}
            >
              Un tarif et un abonnement avec engagement, cela sera <br /> aussi
              bientôt possible – Comparez :
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                mt: 2,
                mb: 5,
              }}
            >
              Vous pourrez bientôt économisez jusqu’à 20 % en choisissant
              l’abonnement annuel
            </Typography>
          </MotionInView>
        </Grid>
        <Box sx={{ border: "1px solid #cdd3d1", height: "320px" }}>
          <AppBar color="common" position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              sx={{
                "& .css-1vnk2cq-MuiTabs-indicator": { height: "4px" },
              }}
            >
              <Tab label="Mensuel sans engagement" {...a11yProps(0)} />
              <Tab label="Annuel avec -20%" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt: 4,
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 5 }}>
                    Compte <br /> Jeune
                  </span>
                  <br />
                  <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                    3€
                  </span>
                  TTC/ mois
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt: 4,
                    mr: "23rem",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 5 }}>
                    Compte <br /> Impact
                  </span>
                  <br />
                  <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                    6€
                  </span>
                  TTC/ mois
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt: 4,
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 5 }}>
                    Compte <br /> Jeune
                  </span>
                  <br />
                  <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                    29€
                  </span>
                  TTC/ an
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    mt: 4,
                    mr: "23rem",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: 5 }}>
                    Compte <br /> Impact
                  </span>
                  <br />
                  <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                    58€
                  </span>
                  TTC/ an
                </Box>
              </Box>
            </TabPanel>
          </SwipeableViews>
        </Box>
        <Box
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onClick={modalClickOpen}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8,
            padding: -15,
          }}
        >
          <TButton name="Ouvrir un éco-compte" />
        </Box>
      </Container>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
