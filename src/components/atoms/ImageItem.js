import { Box } from "@mui/material";
import Image from "./Image";

export default function ImageItem({ item, isActive }) {
  const { image, title } = item;

  return (
    <Box sx={{ position: "relative" }}>
      <Image alt={title} src={image} sx={{ height: { xs: 280, md: 580 } }} />
    </Box>
  );
}
