import { Box, Button, Grid, Typography } from "@mui/material";
import { buttonTwoStyles, RootStyle } from "./PartenariatOnuDetails.constant";

export default function PartenariatOnuDetails() {
  //   const classes = useStyles();
  return (
    <RootStyle>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: {
            md: 24,
            xs: 15,
          },
        }}
      >
        <Grid item xs={6}>
          <Box sx={{ width: "100%", maxWidth: "100%" }}>
            <Button
              //     className={classes.root}
              variant="outlined"
              sx={{ ...buttonTwoStyles }}
            >
              Retour au blo
            </Button>
          </Box>
        </Grid>
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: 1.2,
            textAlign: "center",

            mb: 18,
          }}
        >
          La chronique finance et impact
        </Typography>
      </Grid>
    </RootStyle>
  );
}
