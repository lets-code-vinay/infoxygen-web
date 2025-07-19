import React, { useState, useRef, useLayoutEffect } from "react";
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
  isNeonApplied = false,
  fontSize = "2.2rem",
}) => {
  const theme = useTheme();
  const titleRef = useRef(null);
  const [titleWidth, setTitleWidth] = useState(null);

  useLayoutEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
  }, [titleWords, title, fontSize]);

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
        {/* Title + AnimatedSliderBar in a box with auto width */}
        <Box sx={{ width: "auto", display: "inline-block" }}>
          <Box
            ref={titleRef}
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: fontSize },
              textAlign: "left",
              color: "inherit",
              mb: 1,
              display: "inline-block",
              width: "auto",
            }}
          >
            {titleWords ? (
              <ColorSwitchTitle
                title={titleWords}
                isNeonApplied={isNeonApplied}
                fontSize={fontSize}
              />
            ) : (
              title
            )}
          </Box>
          {showUnderline && (
            <AnimatedSliderBar
              sx={{ marginLeft: 0, width: titleWidth ? titleWidth : "100%" }}
            />
          )}
        </Box>
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
