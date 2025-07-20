import React from "react";
import { useTheme } from "@mui/material";
import { CORE_INDUSTRIES } from "../../configs/coreIndustries";
import SectionHeader from "../SectionHeader";
import {
  SectionContainer,
  SliderContainer,
  SlidingTrack,
  IndustryCard,
  IndustryTitle,
  IconWrapper,
  IconImage,
} from "./StyledCoreIndustries";

// Duplicate the industries for seamless infinite scroll
function getSlidingIndustries() {
  return [...CORE_INDUSTRIES, ...CORE_INDUSTRIES];
}

const CoreIndustriesSection = () => {
  const theme = useTheme();
  const industries = getSlidingIndustries();

  return (
    <SectionContainer>
      <SectionHeader
        titleWords={"Core Industries"}
        description="Empowering essential sectors with innovative contact center solutions, driving operational excellence and digital transformation across industries."
        showUnderline={true}
        showButton={true}
        buttonProps={{
          text: "Connect With Expert",
          direction: "left",
          radius: 0,
          colorVariant: "primary",
        }}
      />

      <SliderContainer>
        <SlidingTrack>
          {industries.map(({ name, image, alt }, idx) => (
            <IndustryCard key={name + idx}>
              <IndustryTitle>{name}</IndustryTitle>
              <IconWrapper>
                <IconImage src={image} alt={alt || name} />
              </IconWrapper>
            </IndustryCard>
          ))}
        </SlidingTrack>
      </SliderContainer>
    </SectionContainer>
  );
};

export default CoreIndustriesSection;
