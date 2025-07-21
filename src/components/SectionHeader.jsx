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

  // Responsive font size using clamp
  const responsiveFontSize = `clamp(1.3rem, 4vw, ${fontSize})`;

  // Update title width on resize
  useLayoutEffect(() => {
    function updateWidth() {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
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
        <Box
          sx={{
            width: "auto",
            display: "inline-block",
            maxWidth: "100%",
            pl: { xs: 2, md: 0 },
          }}
        >
          <Box
            ref={titleRef}
            sx={{
              fontWeight: 700,
              fontSize: responsiveFontSize,
              textAlign: "left",
              color: "inherit",
              mb: 1,
              display: "inline-block",
              width: "auto",
              maxWidth: "100vw",
              overflowWrap: "break-word",
            }}
          >
            {titleWords ? (
              <ColorSwitchTitle
                title={titleWords}
                isNeonApplied={isNeonApplied}
                fontSize={responsiveFontSize}
              />
            ) : (
              title
            )}
          </Box>
          {showUnderline && (
            <AnimatedSliderBar
              sx={{
                marginLeft: 0,
                width: titleWidth
                  ? Math.min(titleWidth, window.innerWidth * 0.9)
                  : "100%",
                maxWidth: "100%",
                transition: "width 0.2s",
              }}
            />
          )}
        </Box>
        {description && (
          <Description
            component="div"
            sx={{
              maxWidth: { xs: "90vw", md: "90%" },
              width: { xs: "90vw", md: "90%" },
              textAlign: { xs: "start", md: "left" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {description}
            {/* Button below description for small screens */}
            {showButton && (
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <ActionButton {...buttonProps} />
              </Box>
            )}
          </Description>
        )}
      </Box>
      {/* Button on the right for md+ screens */}
      <Box
        sx={{
          minWidth: 160,
          display: { xs: "none", md: "flex" },
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
