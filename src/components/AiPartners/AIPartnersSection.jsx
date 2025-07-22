import React from "react";
import AiPartnerSlider from "./AIPartnersSlider";
import {
  INFINITY_SLIDER_CONTENTS,
  INFINITY_SLIDER_CONTENTS_BOTTOM,
} from "../../configs/AIPartners";
import { AiPartnersContainer } from "./StyledAiPartner";
import SectionHeader from "../SectionHeader";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";

// Add keyframes for backgroundShift if not already present
if (typeof window !== "undefined" && window.document) {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes backgroundShift {
      0%, 100% {
        opacity: 0.6;
        transform: scale(1) rotate(0deg);
      }
      25% {
        opacity: 0.8;
        transform: scale(1.05) rotate(1deg);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1) rotate(-1deg);
      }
      75% {
        opacity: 0.8;
        transform: scale(1.05) rotate(1deg);
      }
    }
  `;
  if (!document.head.querySelector("style[data-bgshift]")) {
    style.setAttribute("data-bgshift", "true");
    document.head.appendChild(style);
  }
}

const AiPartnerSliderContainer = ({
  topImages = INFINITY_SLIDER_CONTENTS,
  bottomImages = INFINITY_SLIDER_CONTENTS_BOTTOM,
  topSpeedFast = false,
  bottomSpeedFast = true,
  className = "",
  style = {},
  ...props
}) => {
  const theme = useTheme();
  return (
    <AiPartnersContainer className={className} style={style} {...props}>
      <SectionHeader
        titleWords={"AI Partners"}
        description={
          "Infoxygen's AI Partners deliver intelligent automation and decision-making power, helping businesses become faster, leaner, and more competitive."
        }
        showUnderline={true}
        showButton={false}
      />
      <Box sx={{ width: { xs: "100%", md: "80%", lg: "60%" }, mx: "auto" }}>
        <AiPartnerSlider isSlideSpeedFast={topSpeedFast} images={topImages} />
      </Box>
    </AiPartnersContainer>
  );
};

export default AiPartnerSliderContainer;
