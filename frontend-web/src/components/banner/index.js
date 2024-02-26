import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";
import { Colors } from "../../styles/themes";

export default function Banner() {
     
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <BannerContainer>

        <BannerImage src="/images/banner/tempTaxi.jpg" />

      <BannerContent>
        <Typography variant="h6" color={Colors.info_statistics}>
          Your Travel Companion
        </Typography>
        <BannerTitle variant="h3">We value your time & money</BannerTitle>
        <BannerDescription variant="subtitle" color={Colors.text}>
          We help our customers to travel at Shared Cost and Shared Space
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
