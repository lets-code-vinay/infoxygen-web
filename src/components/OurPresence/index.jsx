import * as React from "react";
import SectionHeader from "../SectionHeader";
import WorldMapWithIndia from "../WorldMapWithIndia";
import {
  MainBody,
  GridContainer,
  GridLeft,
  MapSection,
  MapContainer,
} from "./StyledOurPresence";

export default function OurPresence() {
  return (
    <MainBody>
      <SectionHeader
        titleWords={"Worldwide Presence"}
        description={
          "We deliver world-class IT solutions and services across the globe, empowering businesses to innovate, scale, and thrive in the digital era. Our passionate team of tech experts is dedicated to driving your success, wherever you are."
        }
        showUnderline={true}
        showButton={false}
        fontSize="2.8rem"
      />
      <MapContainer>
        <WorldMapWithIndia />
      </MapContainer>
    </MainBody>
  );
}
