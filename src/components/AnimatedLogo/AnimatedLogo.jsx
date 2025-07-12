import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';

const LogoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '280px',
  [theme.breakpoints.up('md')]: {
    width: '320px',
    height: '320px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '350px',
    height: '350px',
  },
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LogoPiece = styled('div', {
  shouldForwardProp: (prop) => !['pieceIndex', 'totalPieces', 'isAssembled'].includes(prop)
})(({ pieceIndex, totalPieces, isAssembled }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: isAssembled ? 1 : 0.8,
  transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  transform: isAssembled 
    ? 'translate(0, 0) rotate(0deg) scale(1)' 
    : getInitialTransform(pieceIndex, totalPieces),
  filter: isAssembled ? 'none' : 'brightness(0.8)',
  zIndex: isAssembled ? 1 : 10,
}));

// Calculate initial position for each piece
function getInitialTransform(pieceIndex, totalPieces) {
  const angle = (360 / totalPieces) * pieceIndex;
  const radius = 150; // Distance from center
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;
  const rotation = angle + Math.random() * 180 - 90;
  const scale = 0.7 + Math.random() * 0.6;
  
  return `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
}

const AnimatedLogo = ({ 
  pieces = [], 
  finalLogo = '', 
  onAnimationComplete = () => {},
  autoStart = true,
  delay = 1000 
}) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [currentPiece, setCurrentPiece] = useState(0);

  useEffect(() => {
    if (!autoStart) return;

    const timer = setTimeout(() => {
      startAssembly();
    }, delay);

    return () => clearTimeout(timer);
  }, [autoStart, delay]);

  const startAssembly = () => {
    setIsAssembled(true);
    
    // Animate pieces one by one
    pieces.forEach((_, index) => {
      setTimeout(() => {
        setCurrentPiece(index + 1);
      }, index * 200);
    });

    // Complete animation
    setTimeout(() => {
      onAnimationComplete();
    }, pieces.length * 200 + 500);
  };

  const resetAnimation = () => {
    setIsAssembled(false);
    setCurrentPiece(0);
  };

  return (
    <LogoContainer>
      {/* Final assembled logo */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${finalLogo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isAssembled ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          zIndex: 0,
          filter: isAssembled ? `drop-shadow(0 0 20px ${theme.palette.primary.main}30)` : 'none',
        })}
      />

      {/* Individual pieces */}
      {pieces.map((piece, index) => (
        <LogoPiece
          key={index}
          pieceIndex={index}
          totalPieces={pieces.length}
          isAssembled={isAssembled}
          style={{
            backgroundImage: `url(${piece})`,
            animationDelay: `${index * 200}ms`,
          }}
        />
      ))}

      {/* Assembly effect overlay */}
      {isAssembled && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
            animation: 'pulse 1s ease-in-out',
            zIndex: 2,
          }}
        />
      )}
    </LogoContainer>
  );
};

export default AnimatedLogo; 