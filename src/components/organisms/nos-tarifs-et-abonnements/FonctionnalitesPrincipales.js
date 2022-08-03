import * as React from "react";
import Grid from "@mui/material/Grid";
<<<<<<< HEAD
import { Container, Box, Typography, Divider } from "@mui/material";
=======
import { Container, Box, Typography } from "@mui/material";
>>>>>>> première partie des fonctionnalites principales
import { COUTDATA } from "./nosTarifsEtAbonnements.constant";

export default function FonctionnalitesPrincipales() {
  return (
    <Box sx={{ width: "100%", mb: "10rem" }}>
      <Container>
        <Grid
          rowSpacing={1}
<<<<<<< HEAD
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: { md: -5, xs: 3 },
            mb: 3,
          }}
=======
          sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
>>>>>>> première partie des fonctionnalites principales
        >
          <Grid item xs={6}>
            {" "}
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              spacing={{
<<<<<<< HEAD
                md: 5,
                xs: 10,
=======
                md: 16,
                xs: 1,
>>>>>>> première partie des fonctionnalites principales
              }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
<<<<<<< HEAD
                    borderRadius: "25.5px",
=======
>>>>>>> première partie des fonctionnalites principales
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
<<<<<<< HEAD
                      md: "292px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "24px",
                      xs: "11px",
                    },
                    bgcolor: "#10403B",
                  }}
                >
                  Compte One Jeune <br /> (18-25 ans)
=======
                      md: "210px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "20px",
                      xs: "11px",
                    },
                    bgcolor: "#00db89",
                  }}
                >
                  Compte One Jeune (18-25 ans)
>>>>>>> première partie des fonctionnalites principales
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
<<<<<<< HEAD
                    borderRadius: "25.5px",
=======
>>>>>>> première partie des fonctionnalites principales
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    height: {
                      md: "90px",
                      xs: "45px",
                    },
                    width: {
<<<<<<< HEAD
                      md: "292px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "24px",
                      xs: "11px",
                    },
                    bgcolor: "#10403B",
                  }}
                >
                  Compte One Jeune <br /> (18-25 ans)
=======
                      md: "210px",
                      xs: "105px",
                    },
                    fontSize: {
                      md: "20px",
                      xs: "11px",
                    },
                    bgcolor: "#00db89",
                  }}
                >
                  Compte One Jeune (18-25 ans)
>>>>>>> première partie des fonctionnalites principales
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
<<<<<<< HEAD
        <Divider
          color="#10403B"
          sx={{
            height: "2px",
            mb: { md: 7, xs: 0 },
            mt: { md: 7, xs: 0 },
          }}
        />
=======
>>>>>>> première partie des fonctionnalites principales
        {COUTDATA.map((item) => (
          <Grid
            key={item.id}
            container
            spacing={22}
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
<<<<<<< HEAD
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontSize: { md: "21px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {item.libelle}
              </Typography>
=======
            <Grid item xs={6} fontSize={{ md: "18px", xs: "12px" }}>
              {item.libelle}
>>>>>>> première partie des fonctionnalites principales
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      textAlign: "center",
<<<<<<< HEAD
                      fontSize: "24px",
                      fontWeight: 700,
                      ml: {
                        md: 5,
                        xs: -13,
=======
                      fontWeight: "bold",
                      ml: {
                        md: 5,
                        xs: -11,
>>>>>>> première partie des fonctionnalites principales
                      },
                    }}
                  >
                    {item.valeurParAn}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={6}>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
<<<<<<< HEAD
                      fontSize: "24px",
                      fontWeight: 700,
=======
                      fontWeight: "bold",
>>>>>>> première partie des fonctionnalites principales
                      ml: {
                        md: 6,
                        xs: -6,
                      },
                    }}
                  >
                    {item.valeurParMois}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}
