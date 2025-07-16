import React from "react";
import {
  SliderContainer,
  SlidingTrack,
  ImageContainer,
  SliderImage,
} from "./StyledAiPartner";

/**
 * Infinity Slider component with customizable speed and images
 * @description Creates an infinite scrolling slider for partner logos
 * @param {Object} props - Component props
 * @param {boolean} props.isSlideSpeedFast - Whether to use fast sliding speed
 * @param {Array} props.images - Array of image objects with name, image, and alt properties
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const AiPartnerSlider = ({
  isSlideSpeedFast = false,
  images = [],
  className = "",
  style = {},
  ...props
}) => {
  return (
    <SliderContainer className={className} style={style} {...props}>
      <SlidingTrack isSlideSpeedFast={isSlideSpeedFast}>
        {[...images, ...images].map(({ name, image, alt }, index) => (
          <ImageContainer key={`${name}-${index}`} id="image-box">
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

export default AiPartnerSlider;
