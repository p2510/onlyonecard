import { styled } from "@mui/system";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionInView, varFadeInDown, varFadeInUp } from "../../atoms/animate";
import { DATA } from "./PlaceImpact.constant";

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function PlaceImpactServiceSecondPart() {
  return (
    <RootStyle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "673px", xs: "100%" },
          marginTop: { md: 0, xs: -5 },
          background: "#10403B",
        }}
      >
        <Container
          spacing={10}
          sx={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
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
                fontSize: "2.2rem",
                fontWeight: "bold",
                color: "#fff",
                alignItems: "center",
                mb: 3,
                mt: {
                  md: 1,
                  xs: 6,
                },
              }}
            >
              Agissez pour la
              <span
                style={{
                  color: "#C4E3D5",
                  marginRight: "0.5rem",
                  marginLeft: "0.5rem",
                }}
              >
                planète
              </span>
              et comme pour
              <span style={{ color: "#C4E3D5", marginLeft: "0.5rem" }}>
                vous!
              </span>
            </Typography>
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
                xs: 3,
              },
              mt: { md: 3, xs: 6 },
            }}
          >
            {DATA.map((item) => (
              <Grid
                item
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginRight: "2rem",
                  mb: { md: 0, xs: 15 },
                }}
              >
                <Box component="img" src={item.icon} alt={item.title} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "178px",
                    mt: 3,
                  }}
                >
                  <MotionInView variants={varFadeInDown}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "18px",
                        color: "#fff",
                        fontWeight: "bold",
                        mb: 3,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </MotionInView>
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        width: "320px",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {item.paragraphe}
                    </Typography>
                  </MotionInView>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </RootStyle>
  );
}
