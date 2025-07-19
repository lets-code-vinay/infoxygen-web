import React, { useEffect, useState, useRef } from "react";
import { Box, styled } from "@mui/material";

const NeonContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "280px",
  height: "280px",
  [theme.breakpoints.up("md")]: {
    width: "320px",
    height: "320px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "350px",
    height: "350px",
  },
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
  boxShadow: `
    0 0 20px ${theme.palette.primary.main}30,
    0 0 40px ${theme.palette.primary.main}20,
    0 0 60px ${theme.palette.primary.main}10,
    inset 0 0 20px ${theme.palette.primary.main}10
  `,
  animation: "neonPulse 3s ease-in-out infinite",
  "@keyframes neonPulse": {
    "0%, 100%": {
      boxShadow: `
        0 0 20px ${theme.palette.primary.main}30,
        0 0 40px ${theme.palette.primary.main}20,
        0 0 60px ${theme.palette.primary.main}10,
        inset 0 0 20px ${theme.palette.primary.main}10
      `,
    },
    "50%": {
      boxShadow: `
        0 0 30px ${theme.palette.primary.main}50,
        0 0 60px ${theme.palette.primary.main}30,
        0 0 90px ${theme.palette.primary.main}20,
        inset 0 0 30px ${theme.palette.primary.main}20
      `,
    },
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  perspective: "1000px",
}));

const LogoPiece = styled("div", {
  shouldForwardProp: (prop) =>
    !["pieceIndex", "totalPieces", "isAssembled", "animationStyle"].includes(
      prop
    ),
})(
  ({
    pieceIndex,
    totalPieces,
    isAssembled,
    animationStyle = "slide",
    theme,
  }) => {
    const getInitialTransform = () => {
      switch (animationStyle) {
        case "slide":
          const angle = (360 / totalPieces) * pieceIndex;
          const radius = 200;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return `translate(${x}px, ${y}px) rotate(${
            angle + Math.random() * 90 - 45
          }deg) scale(0.8)`;

        case "explode":
          const explodeAngle = (360 / totalPieces) * pieceIndex;
          const explodeRadius = 300;
          const explodeX =
            Math.cos((explodeAngle * Math.PI) / 180) * explodeRadius;
          const explodeY =
            Math.sin((explodeAngle * Math.PI) / 180) * explodeRadius;
          return `translate(${explodeX}px, ${explodeY}px) rotate(${explodeAngle}deg) scale(0.6)`;

        case "spiral":
          const spiralAngle = (360 / totalPieces) * pieceIndex;
          const spiralRadius = 150 + pieceIndex * 20;
          const spiralX =
            Math.cos((spiralAngle * Math.PI) / 180) * spiralRadius;
          const spiralY =
            Math.sin((spiralAngle * Math.PI) / 180) * spiralRadius;
          return `translate(${spiralX}px, ${spiralY}px) rotate(${
            spiralAngle * 2
          }deg) scale(0.7)`;

        case "random":
          const randomX = (Math.random() - 0.5) * 400;
          const randomY = (Math.random() - 0.5) * 400;
          const randomRot = Math.random() * 360;
          return `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg) scale(${
            0.5 + Math.random() * 0.5
          })`;

        default:
          return "translate(0, 0) rotate(0deg) scale(1)";
      }
    };

    return {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: isAssembled ? 1 : 0.9,
      transition: `all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
      transform: isAssembled
        ? "translate(0, 0) rotate(0deg) scale(1)"
        : getInitialTransform(),
      filter: isAssembled ? "none" : "brightness(0.8) contrast(1.2)",
      zIndex: isAssembled ? 1 : 10,
      boxShadow: isAssembled
        ? `0 0 20px ${theme.palette.primary.main}30`
        : "0 0 10px rgba(0, 0, 0, 0.3)",
    };
  }
);

const AssemblyEffect = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ isActive, theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "100%",
  transform: "translate(-50%, -50%)",
  background: `radial-gradient(circle, ${theme.palette.primary.main}40 0%, transparent 70%)`,
  borderRadius: "50%",
  opacity: isActive ? 1 : 0,
  transition: "opacity 0.5s ease-in-out",
  animation: isActive ? "pulse 1.5s ease-in-out infinite" : "none",
  zIndex: 2,
}));

const AnimatedLogoAdvanced = ({
  pieces = [],
  finalLogo = "",
  animationStyle = "slide",
  onAnimationComplete = () => {},
  autoStart = true,
  delay = 1500,
  showAssemblyEffect = true,
  pieceDelay = 150,
  continuous = true,
}) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [currentPiece, setCurrentPiece] = useState(0);
  const [showEffect, setShowEffect] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!autoStart) return;

    const timer = setTimeout(() => {
      startAssembly();
    }, delay);

    return () => clearTimeout(timer);
  }, [autoStart, delay]);

  const startAssembly = () => {
    setIsAssembled(true);

    // Animate pieces one by one with staggered timing
    pieces.forEach((_, index) => {
      setTimeout(() => {
        setCurrentPiece(index + 1);
      }, index * pieceDelay);
    });

    // Show assembly effect
    setTimeout(() => {
      setShowEffect(true);
    }, pieces.length * pieceDelay + 200);

    // Complete animation and restart
    setTimeout(() => {
      onAnimationComplete();
      setAnimationCount((prev) => prev + 1);

      // Hide effect after a while
      setTimeout(() => {
        setShowEffect(false);

        // Restart animation after a pause (only if continuous is true)
        if (continuous) {
          setTimeout(() => {
            resetAnimation();
            setTimeout(() => {
              startAssembly();
            }, 500);
          }, 1000);
        }
      }, 2000);
    }, pieces.length * pieceDelay + 500);
  };

  const resetAnimation = () => {
    setIsAssembled(false);
    setCurrentPiece(0);
    setShowEffect(false);
  };

  // Expose reset function for external use
  const restartAnimation = () => {
    resetAnimation();
    setTimeout(() => {
      startAssembly();
    }, 200);
  };

  const triggerAnimation = () => {
    setIsAssembled(false);
    setCurrentPiece(0);
    setShowEffect(false);

    // Force a complete reset by using a timeout
    setTimeout(() => {
      startAssembly();
    }, 100);
  };

  return (
    <NeonContainer ref={containerRef}>
      <LogoContainer>
        {/* Final assembled logo */}
        <Box
          sx={(theme) => ({
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${finalLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: isAssembled ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            zIndex: 0,
            filter: isAssembled
              ? `drop-shadow(0 0 20px ${theme.palette.primary.main}30)`
              : "none",
          })}
        />

        {/* Individual pieces */}
        {pieces.map((piece, index) => (
          <LogoPiece
            key={index}
            pieceIndex={index}
            totalPieces={pieces.length}
            isAssembled={isAssembled}
            animationStyle={animationStyle}
            style={{
              backgroundImage: `url(${piece})`,
              animationDelay: `${index * pieceDelay}ms`,
            }}
          />
        ))}

        {/* Assembly effect */}
        {showAssemblyEffect && <AssemblyEffect isActive={showEffect} />}
      </LogoContainer>
    </NeonContainer>
  );
};

export default AnimatedLogoAdvanced;
