import React from 'react';
import { Box, styled } from '@mui/material';

/**
 * Styled container for the infinity slider
 * @description Main container with overflow hidden and responsive height
 */
const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
  height: '8rem',
  [theme.breakpoints.down('sm')]: {
    height: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    height: '7rem',
    padding: theme.spacing(1.5, 0),
  },
  [theme.breakpoints.up('lg')]: {
    height: '8rem',
  },
  [theme.breakpoints.up('xl')]: {
    height: '10rem',
  },
}));

/**
 * Styled sliding track for the infinity slider
 * @description Contains the sliding animation and responsive width
 */
const SlidingTrack = styled(Box, {
  shouldForwardProp: (prop) => !['isSlideSpeedFast'].includes(prop)
})(({ theme, isSlideSpeedFast }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  animation: isSlideSpeedFast 
    ? 'slider 20s linear infinite' 
    : 'slider 30s linear infinite',
  width: isSlideSpeedFast ? 'calc(25rem * 14)' : 'calc(25rem * 10)',
  [theme.breakpoints.down('sm')]: {
    width: isSlideSpeedFast ? 'calc(25rem * 7)' : 'calc(25rem * 5)',
  },
  [theme.breakpoints.up('md')]: {
    width: isSlideSpeedFast ? 'calc(25rem * 10)' : 'calc(25rem * 7)',
  },
  [theme.breakpoints.up('lg')]: {
    width: isSlideSpeedFast ? 'calc(25rem * 12)' : 'calc(25rem * 9)',
  },
  [theme.breakpoints.up('xl')]: {
    width: isSlideSpeedFast ? 'calc(25rem * 14)' : 'calc(25rem * 10)',
  },
  '@keyframes slider': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(calc(-25rem * 3))',
    },
  },
}));

/**
 * Styled image container for each slider item
 * @description Individual image container with hover effects
 */
const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width:'200px', height:'80px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

/**
 * Styled image for the slider
 * @description Individual image with consistent sizing and hover effects
 */
const SliderImage = styled('img')(({ theme }) => ({
  width: '100%', // Fixed width for all images
  cursor: 'pointer',
  margin:'5px 10px',
  filter: 'grayscale(100%)',
  opacity: 0.2,
  transition: 'all 0.3s ease',
  objectFit: 'contain',
  objectPosition: 'center',
  '&:hover': {
    filter: 'none',
    opacity: 1,
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '2rem',
    width: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    height: '3rem',
    width: '6rem',
  },
  [theme.breakpoints.up('lg')]: {
    height: '4rem',
    width: '8rem',
  },
  [theme.breakpoints.up('xl')]: {
    height: '5rem',
    width: '10rem',
  },
}));

/**
 * Infinity Slider component with customizable speed and images
 * @description Creates an infinite scrolling slider for partner logos
 * @param {Object} props - Component props
 * @param {boolean} props.isSlideSpeedFast - Whether to use fast sliding speed
 * @param {Array} props.images - Array of image objects with name, image, and alt properties
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const InfinitySlider = ({ 
  isSlideSpeedFast = false, 
  images = [], 
  className = '',
  style = {},
  ...props 
}) => {
  return (
    <SliderContainer className={className} style={style} {...props}>
      <SlidingTrack isSlideSpeedFast={isSlideSpeedFast}>
        {images.map(({ name, image, alt }, index) => (
          <ImageContainer key={`${name}-${index}`} id='image-box'>
            <SliderImage 
              src={new URL(image, import.meta.url).href}
              alt={alt || `${name} logo`}
              loading="lazy"
            />
          </ImageContainer>
        ))}
      </SlidingTrack>
    </SliderContainer>
  );
};

export default InfinitySlider;
