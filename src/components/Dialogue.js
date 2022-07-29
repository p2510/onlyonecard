import * as React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  Typography,
  Grid,
  Box,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TButton from "./tailwindComponent/TButton";

Dialogue.propTypes = {
  open: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default function Dialogue({ open, modalClose }) {
  return (
    <Dialog
      maxWidth="lg"
      onClose={modalClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{ mt: "-10rem" }}
    >
      <DialogContent dividers>
        <Box
          sx={{
            "& .MuiTextField-root": { width: "200%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{ display: "flex", justifyContent: "end", mb: "10px" }}
          >
            <Button onClick={modalClose}>
              <CloseIcon sx={{ fontSize: 30, color: "#918e8e" }} />
            </Button>
          </Typography>
          <Divider />
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                mb: "35px",
                mt: "25px",
              }}
            >
              Nous vous enverrons un SMS contenant un lien pour télécharger
              l’application OnlyOne.
            </Typography>
            <Grid sx={{ marginTop: 2 }} container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ maxWidth: "100%" }}>
                  <Typography
                    mb="0.5rem"
                    variant="subtitle2"
                    gutterBottom
                    component="legend"
                    sx={{
                      textAlign: "left",
                      lineHeight: 4,
                      fontWeight: 400,
                      fontSize: "16px",
                    }}
                  >
                    Téléphone(Nécessaire)
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="+33 612345678"
                    id="fullWidth"
                  />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mb: "3rem", mt: "1.8rem" }}>
              <TButton name="Envoyer" />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
