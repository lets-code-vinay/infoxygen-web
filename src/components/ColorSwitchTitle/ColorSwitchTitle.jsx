import React, { useState } from "react";
import { useTheme } from "@mui/material";

const ColorSwitchTitle = ({
  title,
  sx,
  className,
  fontSize = { xs: "2.5rem", sm: "2.2rem", md: "2.2rem" },
  isNeonApplied = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  // Split the title string into words
  const words = title ? title.split(" ") : [];
  // Alternate colors: primary, secondary, primary, ...
  const getColor = (idx) => {
    const isEven = idx % 2 === 0;
    if (!hovered) {
      return isEven ? theme.palette.primary.main : theme.palette.secondary.main;
    } else {
      return isEven ? theme.palette.secondary.main : theme.palette.primary.main;
    }
  };
  // Neon effect: secondary neon on primary text, primary neon on secondary text, with reduced whiteness and opacity
  const getNeonStyle = (idx) => {
    if (!isNeonApplied) return {};
    const isPrimary = (!hovered && idx % 2 === 0) || (hovered && idx % 2 !== 0);
    return isPrimary
      ? {
          textShadow: `0 0 4px rgba(255,255,255,0.3), 0 0 10px ${theme.palette.secondary.main}99, 0 0 18px ${theme.palette.secondary.main}66`,
        }
      : {
          textShadow: `0 0 4px rgba(255,255,255,0.3), 0 0 10px ${theme.palette.primary.main}99, 0 0 18px ${theme.palette.primary.main}66`,
        };
  };

  // Handle responsive fontSize
  const getResponsiveFontSize = () => {
    if (typeof fontSize === "string") {
      return fontSize;
    }
    if (typeof fontSize === "object") {
      // Get current screen size
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width <= 600) return fontSize.xs || "2.5rem";
      if (width <= 900) return fontSize.sm || "2.2rem";
      return fontSize.md || "2.2rem";
    }
    return "2.2rem";
  };

  return (
    <span
      className={className}
      style={{ cursor: "pointer", display: "inline-block", ...sx }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {words.map((word, idx) => (
        <span
          key={word + idx}
          style={{
            color:
              typeof window !== "undefined" &&
              window.innerWidth <= 600 &&
              (word.toLowerCase() === "sackel" || word.toLowerCase() === "sack")
                ? theme.palette.primary.main
                : getColor(idx),
            fontWeight: 700,
            fontSize: getResponsiveFontSize(),
            marginRight: idx < words.length - 1 ? 8 : 0,
            transition: "color 0.3s",
            ...getNeonStyle(idx),
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default ColorSwitchTitle;
