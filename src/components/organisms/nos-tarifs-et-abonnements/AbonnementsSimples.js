import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  MotionInView,
  varFadeInLeft,
  varFadeInUp,
} from "src/components/atoms/animate";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
    "&:.css-1w9ke15-MuiButtonBase-root-MuiTab-root:not(:last-of-type)": {
      backgroundColor: "red",
    },
  };
}

export default function AbonnementsSimples() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0, { backgroundColor: "red" });

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
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: 900,
          lineHeight: "63px",
          color: "#10403B",
          mt: { md: "285px", xs: "150px" },
        }}
      >
        Des tarifs et abonnements{" "}
        <span style={{ color: "#C4E3D5" }}> simples </span>et
        <span style={{ color: "#C4E3D5" }}> transparents</span>
        <span style={{ color: "#FAAA42" }}>.</span>
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "row" },
          mt: "5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "38px", xs: "28px" },
            fontWeight: 800,
            textAlign: "center",
            mr: {
              md: "3rem",
              xs: 0,
            },
          }}
        >
          3€/mois
          <br />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Lora",
              fontWeight: 600,
            }}
          >
            Compte jeune (18-25 ans)
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "38px", xs: "28px" },
            fontWeight: 800,
            textAlign: "center",
            ml: {
              md: "3rem",
              xs: 0,
            },
          }}
        >
          6€/mois
          <br />
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Lora",
              fontWeight: 600,
            }}
          >
            Compte impact
          </span>
        </Typography>
      </Grid>
      <Typography
        sx={{
          fontWeight: 800,
          textAlign: { md: "start", xs: "center" },
          lineHeight: { md: "57px ", xs: "40px" },
          pl: { md: 0, xs: 1 },
          pr: { md: 0, xs: 1 },
          fontSize: "24px",
          margin: "57px 0px 80px 0px ",
          marginLeft: { md: "270px ", xs: 0 },
          color: "#10403B",
        }}
      >
        Commencez à gérer votre argent avec un impact positif dès aujourd’hui.
        <br />
        C’est simple et sans engagement !
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#E4D6C0",
          height: { md: "867px", xs: "100%" },
          mt: { md: 0, xs: 3 },
        }}
      >
        <Container
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { md: 6, xs: 5 },
          }}
        >
          <Grid item md={12}>
            <MotionInView variants={varFadeInLeft}>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 800,
                  lineHeight: "57px",
                }}
              >
                Un tarif et un abonnement avec engagement, cela sera <br />
                aussi bientôt possible
                <span style={{ color: "#FAAA42" }}>.</span>
                <br />
                Comparez :
              </Typography>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: 400,
                  mt: "42px",
                  mb: 5,
                }}
              >
                Vous pourrez bientôt économisez jusqu’à 20 % en choisissant
                l’abonnement annuel
              </Typography>
            </MotionInView>
          </Grid>
          <Box
            sx={{
              border: "1px solid #f1ebdf",
              height: "320px",
              bgcolor: "#10403B",
            }}
          >
            <AppBar
              color="common"
              position="static"
              boxShadow="0px"
              sx={{
                backgroundCol: "#10403B",
                color: "#fff",
                "&:.css-1w9ke15-MuiButtonBase-root-MuiTab-root:not(:last-of-type)":
                  {
                    backgroundColor: "red",
                  },
              }}
            >
              <Tabs
                sx={{
                  backgroundColor: "#10403B",
                  color: "#fff",
                  "&:.Mui-focusVisible": { color: "red" },
                }}
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#2A7267",
                    height: "100px",
                  },
                }}
                variant="fullWidth"
              >
                <Tab
                  sx={{
                    color: "#ffffff !important",
                    fontSize: { md: "24px", xs: "18px" },
                    height: "70px",
                    zIndex: 6,
                  }}
                  label="Mensuel sans engagement"
                  tab
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    color: "#ffffff !important",
                    fontSize: { md: "24px", xs: "18px" },
                    height: "70px",
                    zIndex: 6,
                  }}
                  label="Annuel avec -20%"
                  {...a11yProps(1)}
                />
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
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { md: "24px", xs: "18px" },
                      fontWeight: "bold",
                      color: "#fff",
                      mt: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Lora",
                        color: "#fff",
                        fontSize: "20px",
                        lineHeight: "25.6px",
                        fontWeight: 600,
                      }}
                    >
                      Compte Jeune
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      3€
                    </span>
                    TTC / mois
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "24px", xs: "18px" },
                      fontWeight: "bold",
                      color: "#fff",
                      mt: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Lora",
                        color: "#fff",
                        fontSize: "20px",
                        lineHeight: "25.6px",
                        fontWeight: 600,
                      }}
                    >
                      Compte Impact
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      6€
                    </span>
                    TTC / mois
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { md: "24px", xs: "18px" },
                      fontWeight: "bold",
                      color: "#fff",
                      mt: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Lora",
                        color: "#fff",
                        fontSize: "20px",
                        lineHeight: "25.6px",
                        fontWeight: 600,
                      }}
                    >
                      Compte Jeune
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      29€
                    </span>
                    TTC / an
                  </Box>
                  <Box
                    sx={{
                      fontSize: { md: "24px", xs: "18px" },
                      fontWeight: "bold",
                      color: "#fff",
                      mt: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Lora",
                        color: "#fff",
                        fontSize: "20px",
                        lineHeight: "25.6px",
                        fontWeight: 600,
                      }}
                    >
                      Compte Impact
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "4rem",
                      }}
                    >
                      58€
                    </span>
                    TTC / an
                  </Box>
                </Box>
              </TabPanel>
            </SwipeableViews>
          </Box>
          <MotionInView variants={varFadeInUp}>
            <Grid
              open={isOpen}
              onClose={() => setIsOpen(false)}
              onClick={modalClickOpen}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 8,
                mb: { md: 8, xs: 8 },
              }}
            >
              <Button
                sx={{
                  variant: "contained",
                  borderRadius: 50,
                  background: " #2A7267 !important",
                  "&:hover": { background: "#10403B !important" },
                  boxShadow: "none",
                  color: "#fff",
                  fontSize: "16px",
                  padding: "7px 18px 10px 18px",
                }}
              >
                Ouvrir un éco-compte
              </Button>
            </Grid>
          </MotionInView>
        </Container>
      </Box>
      <Dialogue open={open} modalClose={modalClose} />
    </RootStyle>
  );
}
