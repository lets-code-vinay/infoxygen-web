import React from 'react';
import { Box, styled } from '@mui/material';
import InfinitySlider from '../InfinitySlider';
import {
  INFINITY_SLIDER_CONTENTS,
  INFINITY_SLIDER_CONTENTS_BOTTOM,
} from '../../configs/InfinitySlider';

/**
 * Styled container for the multi-vendor slider section
 * @description Main container with responsive padding and spacing
 */
const MultiVendorContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(15, 0),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(20, 0),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(22, 0),
    height: '51vh',
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(9, 0, 0),
    minHeight: '45vh',
    maxHeight: '60vh',
  },
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(0),
  },
}));

/**
 * Infinity Slider Container component
 * @description Renders two infinity sliders with different speeds for partner logos
 * @param {Object} props - Component props
 * @param {Array} props.topImages - Images for the top slider (defaults to INFINITY_SLIDER_CONTENTS)
 * @param {Array} props.bottomImages - Images for the bottom slider (defaults to INFINITY_SLIDER_CONTENTS_BOTTOM)
 * @param {boolean} props.topSpeedFast - Whether top slider should be fast (defaults to false)
 * @param {boolean} props.bottomSpeedFast - Whether bottom slider should be fast (defaults to true)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const InfinitySliderContainer = ({
  topImages = INFINITY_SLIDER_CONTENTS,
  bottomImages = INFINITY_SLIDER_CONTENTS_BOTTOM,
  topSpeedFast = false,
  bottomSpeedFast = true,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <MultiVendorContainer 
      className={className} 
      style={style}
      {...props}
    >
      <InfinitySlider
        isSlideSpeedFast={topSpeedFast}
        images={topImages}
      />
      <InfinitySlider
        isSlideSpeedFast={bottomSpeedFast}
        images={bottomImages}
      />
    </MultiVendorContainer>
  );
};

export default InfinitySliderContainer;
