// src/components/common/ActionButton.jsx
import React from 'react';
import { Button, styled } from '@mui/material';

/**
 * Styled button component with custom animations
 * @description Button with sliding background animation and customizable border radius
 * @param {Object} theme - MUI theme object
 * @param {string} direction - Direction of sliding animation (left, right, top, bottom, top-left, top-right, bottom-left, bottom-right)
 * @param {number} radius - Border radius in pixels
 * @param {string} colorVariant - Color variant ('primary' or 'secondary')
 */
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => !['direction', 'radius', 'colorVariant'].includes(prop)
})(({ theme, direction, radius = 0, colorVariant = 'primary' }) => {
  const borderRadius = `${radius}px`;
  
  // Get color based on variant
  const getColor = () => {
    return colorVariant === 'secondary' ? theme.palette.secondary.main : theme.palette.primary.main;
  };
  
  const buttonColor = getColor();
  
  // Helper function to get initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { left: '-100%', top: 0 };
      case 'right':
        return { left: '100%', top: 0 };
      case 'top':
        return { left: 0, top: '-100%' };
      case 'bottom':
        return { left: 0, top: '100%' };
      case 'top-left':
        return { left: '-100%', top: '-100%' };
      case 'top-right':
        return { left: '100%', top: '-100%' };
      case 'bottom-left':
        return { left: '-100%', top: '100%' };
      case 'bottom-right':
        return { left: '100%', top: '100%' };
      default:
        return { left: '-100%', top: 0 };
    }
  };
  
  // Helper function to determine transition property
  const getTransition = () => {
    const isDiagonal = direction.includes('-');
    const hasVertical = direction.includes('top') || direction.includes('bottom');
    const hasHorizontal = direction.includes('left') || direction.includes('right');
    
    if (isDiagonal) {
      return 'top 0.3s ease, left 0.3s ease';
    } else if (hasVertical) {
      return 'top 0.3s ease';
    } else {
      return 'left 0.3s ease';
    }
  };
  
  const initialPosition = getInitialPosition();
  
  return {
    color: buttonColor,
    border: `2px solid ${buttonColor}`,
    borderRadius: `${borderRadius} !important`,
    padding: '8px 24px',
    fontWeight: 500,
    textTransform: 'none',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    animation: `subtlePulse 3s ease-in-out infinite`,
    '@keyframes subtlePulse': {
      '0%, 100%': {
        boxShadow: `0 0 0 ${buttonColor}20`
      },
      '50%': {
        boxShadow: `0 0 10px ${buttonColor}40`
      }
    },
    '&.MuiButton-root': {
      borderRadius: `${borderRadius} !important`,
    },
    '&.MuiButtonBase-root': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white',
      boxShadow: `0 4px 12px ${buttonColor}40, 0 0 20px ${buttonColor}30`,
      borderRadius: `${borderRadius} !important`,
      transform: 'translateY(-2px)',
    },
    '&:focus': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:active': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:focus-visible': {
      borderRadius: `${borderRadius} !important`,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: initialPosition.top,
      left: initialPosition.left,
      width: '100%',
      height: '100%',
      backgroundColor: buttonColor,
      transition: getTransition(),
      zIndex: -1,
    },
    '&:hover::before': {
      top: 0,
      left: 0,
    },
  };
});

const ActionButton = ({ 
  text, 
  direction = 'left', 
  radius = 0, 
  fullWidth = false,
  colorVariant = 'primary',
  onClick,
  ...props 
}) => {
  return (
    <StyledButton
      direction={direction}
      radius={radius}
      fullWidth={fullWidth}
      colorVariant={colorVariant}
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default ActionButton;
