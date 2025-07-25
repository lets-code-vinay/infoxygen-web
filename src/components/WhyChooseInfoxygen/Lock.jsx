import React from "react";
import { Box, useTheme } from "@mui/material";
import Happy_Client from "../../assets/images/whyChooseIo2/happyClients.jpg";

const Lock = () => {
  const theme = useTheme();
  const size = 450;
  const circleRadius = 150;
  const textRadius = circleRadius - 8;
  const fontSize = 22; // Decreased text size
  const strokeWidth = 42;

  return (
    <Box
      id="circle"
      sx={{
        position: "relative",
        width: { xs: "100vw", sm: 350, md: size },
        maxWidth: "100vw",
        height: { xs: 300, sm: 350, md: size },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        mx: "auto",
      }}
    >
      <style>{`
        @keyframes rotate360 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{ objectFit: "cover", position: "relative", maxWidth: "100vw" }}
      >
        <defs>
          <path
            id="circlePath"
            d={`M ${size / 2}, ${
              size / 2
            } m -${textRadius}, 0 a ${textRadius},${textRadius} 0 1,1 ${
              textRadius * 2
            },0 a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0`}
          />
        </defs>
        <circle
          className="text-border"
          cx={size / 2}
          cy={size / 2}
          r={circleRadius}
          fill="none"
          stroke={theme.palette.secondary.main}
          strokeWidth={strokeWidth}
        />
        <g
          style={{
            transformOrigin: `${size / 2}px ${size / 2}px`,
            animation: "rotate360 12s linear infinite",
          }}
        >
          <use xlinkHref="#circlePath" fill="none" />
          <text
            className="rotating-text"
            fontSize={fontSize}
            fontWeight={700}
            fill={theme.palette.primary.main}
          >
            <textPath
              xlinkHref="#circlePath"
              textLength={2 * Math.PI * textRadius}
              startOffset="0"
            >
              Infoxygen - Powering Connections, Inspiring Innovation - 2025 -
            </textPath>
          </text>
        </g>
      </svg>
      <Box
        sx={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: 300, md: 419 },
          height: { xs: "60%", sm: 180, md: 235 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#fff",
          borderRadius: "43px",
          maxWidth: 419,
          maxHeight: 235,
        }}
      >
        <img
          loading="lazy"
          width="100%"
          height="100%"
          decoding="async"
          style={{
            color: "transparent",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={Happy_Client}
          alt="Lock Center"
        />
      </Box>
    </Box>
  );
};

export default Lock;
