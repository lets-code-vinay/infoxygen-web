import React, { useState } from "react";
import { Box } from "@mui/material";
import ActionButton from "./CustomButtons/ActionButton/ActionButton";
import {
  AnimatedSliderBar,
  Description,
} from "./CoreIndustries/StyledCoreIndustries";
import ColorSwitchTitle from "./ColorSwitchTitle/ColorSwitchTitle";
import { useTheme } from "@mui/material";

const SectionHeader = ({
  title,
  description,
  showUnderline = true,
  showButton = false,
  buttonProps = {},
  titleWords,
  titleColors,
}) => {
  const theme = useTheme();
  // If titleWords is a string, split it into words for ColorSwitchTitle
  const wordsArray =
    typeof titleWords === "string" ? titleWords.split(" ") : undefined;
  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mb: 3,
        gap: 2,
        margin: "auto",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2.2rem" },
            textAlign: "left",
            color: "inherit",
            mb: 1,
            display: "block",
          }}
        >
          {titleWords ? <ColorSwitchTitle title={titleWords} /> : title}
        </Box>
        {showUnderline && <AnimatedSliderBar sx={{ marginLeft: 0 }} />}
        {description && (
          <Description
            sx={{ maxWidth: "90%", width: "90%", textAlign: "left", mx: 0 }}
          >
            {description}
          </Description>
        )}
      </Box>
      {/* Always reserve space for the button area, even if showButton is false */}
      <Box
        sx={{
          minWidth: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {showButton && <ActionButton {...buttonProps} />}
      </Box>
    </Box>
  );
};

export default SectionHeader;
