import React, { useState, useEffect, useMemo } from "react";
import { Box, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FloatingElements = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 1,
});

const FloatingCircle = styled("div")(({ delay, size, color }) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: color,
  opacity: 0.25,
  animation: `float 6s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  boxShadow: `0 0 30px ${color}60, 0 0 60px ${color}40`,
}));

const CenterCircle = styled("div")(({ color }) => ({
  position: "absolute",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "pulse 4s ease-in-out infinite",
  zIndex: 1,
  boxShadow: `0 0 60px ${color}20`,
}));

const AnimatedCircles = ({
  count = 5,
  minSize = 40,
  maxSize = 120,
  containerHeight = "100%",
  containerWidth = "100%",
  zIndex = 1,
}) => {
  const theme = useTheme();
  const [circlePositions, setCirclePositions] = useState([]);

  // Memoize colors to prevent infinite re-renders
  const colors = useMemo(
    () => [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.primary.light,
      theme.palette.secondary.light,
    ],
    [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.primary.light,
      theme.palette.secondary.light,
    ]
  );

  useEffect(() => {
    // Generate random positions for floating circles with better distribution
    const generateRandomPositions = () => {
      const positions = [];

      // Create a more random but well-distributed pattern
      for (let i = 0; i < count; i++) {
        let attempts = 0;
        let position;

        // Try to find a good position that's not too close to existing ones
        do {
          position = {
            top: Math.random() * 80 + 10, // 10% to 90%
            left: Math.random() * 80 + 10, // 10% to 90%
            size:
              Math.floor(Math.random() * (maxSize - minSize) + minSize) + "px",
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: Math.random() * 5,
          };
          attempts++;
        } while (
          attempts < 50 &&
          positions.some(
            (existing) =>
              Math.abs(existing.top - position.top) < 15 &&
              Math.abs(existing.left - position.left) < 15
          )
        );

        positions.push(position);
      }

      return positions;
    };

    setCirclePositions(generateRandomPositions());
  }, [count, minSize, maxSize, colors]);

  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(0px) rotate(0deg) scale(1);
          opacity: 0.25;
        }
        25% {
          transform: translateY(-20px) rotate(90deg) scale(1.15);
          opacity: 0.4;
        }
        50% {
          transform: translateY(-35px) rotate(180deg) scale(1);
          opacity: 0.5;
        }
        75% {
          transform: translateY(-20px) rotate(270deg) scale(1.15);
          opacity: 0.4;
        }
        100% {
          transform: translateY(0px) rotate(360deg) scale(1);
          opacity: 0.25;
        }
      }

      @keyframes pulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }
        25% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.3);
          opacity: 0.7;
        }
        75% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.5;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }
      }
    `;

    if (!document.head.querySelector("style[data-animated-circles]")) {
      style.setAttribute("data-animated-circles", "true");
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.head.querySelector(
        "style[data-animated-circles]"
      );
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <FloatingElements
      sx={{ height: containerHeight, width: containerWidth, zIndex }}
    >
      {/* Center Circle */}
      <CenterCircle color={theme.palette.primary.main} />

      {/* Floating Circles */}
      {circlePositions.map((circle, index) => (
        <FloatingCircle
          key={index}
          delay={circle.delay}
          size={circle.size}
          color={circle.color}
          style={{
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            filter: theme.palette.mode === "light" ? "invert(1)" : "none",
          }}
        />
      ))}
    </FloatingElements>
  );
};

export default AnimatedCircles;
