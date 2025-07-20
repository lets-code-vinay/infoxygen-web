import React, { Component } from "react";

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldIndiaHigh from "@amcharts/amcharts4-geodata/worldIndiaHigh";

import { GSV_LOCATIONS } from "../../configs/OurPresenceConfig/gsvLocations";
import Typography from "@mui/material/Typography";
import {
  ChartDiv,
  ButtonContainer,
  CountyName,
} from "./StyledWorldMapWithIndia";

am4core.useTheme(am4themes_animated);
am4core.options.disableHoverOnTransform = "touch";

class WorldMapWithIndia extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);
    let lastSelected;

    chart.geodata = am4geodata_worldIndiaHigh;
    chart.projection = new am4maps.projections.Miller();

    /**
     * @description Zom control with buttons
     */
    chart.zoomControl = new am4maps.ZoomControl();

    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;

    polygonSeries.mapPolygons.template.tooltipPosition = "fixed";
    polygonSeries.mapPolygons.template.tooltipText = "{name}";

    let hoverState = polygonSeries.mapPolygons.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#51C1EC");
    hoverState.properties.stroke = am4core.color("#000");
    hoverState.properties.strokeWidth = 1;

    /**
     * @description mini map
     */
    // chart.smallMap = new am4maps.SmallMap();
    // chart.smallMap.series.push(polygonSeries);

    // // rect box inside minimap
    // chart.smallMap.rectangle.stroke = am4core.color("blue");
    // chart.smallMap.rectangle.strokeWidth = 2;

    // // outer border
    // chart.smallMap.background.stroke = am4core.color("yellow");
    // chart.smallMap.background.strokeOpacity = 1;
    // chart.smallMap.background.fillOpacity = 1;

    // // mini map location
    // chart.smallMap.align = "right";
    // chart.smallMap.valign = "top";

    /**
     * @description adding icons or images
     * */
    // Create image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());

    // Create image
    var imageSeriesTemplate = imageSeries.mapImages.template;
    var marker = imageSeriesTemplate.createChild(am4core.Image);
    marker.width = 28;
    marker.height = 28;
    marker.nonScaling = true;
    marker.tooltipText = "{title}";
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    // Add data for the three cities
    imageSeries.data = GSV_LOCATIONS;

    /**
     * @description Showing countries name on hover
     */
    polygonSeries.mapPolygons.template.events.on("over", function (ev) {
      if (lastSelected != null && ev.target !== lastSelected) {
        lastSelected.isHover = false;
      }

      // This is needed so that "un hovering" previous polygon does not hide tooltip
      ev.target.isHover = false;
      ev.target.isHover = true;
    });

    /**
     * @description Zoom on country when clicked
     */
    polygonSeries.mapPolygons.template.events.on("hit", function (ev) {
      ev.target.series.chart.zoomToMapObject(ev.target);
    });

    /**
     * @description Zooming countries on click on names
     * @param {*} id
     */
    const zoomToCountry = (id) => {
      if (lastSelected != null) {
        lastSelected.isHover = false;
      }
      lastSelected = polygonSeries.getPolygonById(id);
      chart.zoomToMapObject(lastSelected);
      setTimeout((_) => (lastSelected.isHover = true), 1000);
    };

    /**
     * @description getting countries on click
     */
    document
      .getElementById("select-us")
      .addEventListener("click", (_) => zoomToCountry("US"));
    document
      .getElementById("select-india")
      .addEventListener("click", (_) => zoomToCountry("IN"));
    document
      .getElementById("select-europe")
      .addEventListener("click", (_) => zoomToCountry("NL"));
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <>
        <ChartDiv id="chartdiv" />
        <ButtonContainer>
          <CountyName id="select-us">United States</CountyName>

          <CountyName id="select-india">India</CountyName>
          <CountyName id="select-europe">Europe</CountyName>
        </ButtonContainer>
      </>
    );
  }
}

export default WorldMapWithIndia;
