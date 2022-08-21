import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import onlyone_logo from "../../assets/images/onlyone_logo.svg";
import { Box } from "@mui/material";

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box
      component="img"
      src={onlyone_logo}
      alt="logo"
      sx={{
        width: { md: 70, xs: 45 },
        height: { md: 10, xs: 47 },
        objectFit: "cover",
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
