import React from 'react';
import AiPartnerSlider from './AIPartnersSlider';
import {
  INFINITY_SLIDER_CONTENTS,
  INFINITY_SLIDER_CONTENTS_BOTTOM,
} from '../../configs/AIPartners';
import { AiPartnersContainer, Title, Description, AnimatedSliderBar } from './StyledAiPartner';

// Add keyframes for backgroundShift if not already present
if (typeof window !== 'undefined' && window.document) {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes backgroundShift {
      0%, 100% {
        opacity: 0.6;
        transform: scale(1) rotate(0deg);
      }
      25% {
        opacity: 0.8;
        transform: scale(1.05) rotate(1deg);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1) rotate(-1deg);
      }
      75% {
        opacity: 0.8;
        transform: scale(1.05) rotate(1deg);
      }
    }
  `;
  if (!document.head.querySelector('style[data-bgshift]')) {
    style.setAttribute('data-bgshift', 'true');
    document.head.appendChild(style);
  }
}

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
const AiPartnerSliderContainer = ({
  topImages = INFINITY_SLIDER_CONTENTS,
  bottomImages = INFINITY_SLIDER_CONTENTS_BOTTOM,
  topSpeedFast = false,
  bottomSpeedFast = true,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <AiPartnersContainer 
      className={className} 
      style={style}
      {...props}
    >
      <Title variant="h2">AI Partners</Title>
      <AnimatedSliderBar />
      <Description>
        Infoxygen's AI Partners deliver intelligent automation and decision-making power, helping businesses become faster, leaner, and more competitive.
      </Description>
      <AiPartnerSlider
        isSlideSpeedFast={topSpeedFast}
        images={topImages}
      />
      {/* <AiPartnerSlider
        isSlideSpeedFast={bottomSpeedFast}
        images={bottomImages}
      /> */}
    </AiPartnersContainer>
  );
};

export default AiPartnerSliderContainer;
