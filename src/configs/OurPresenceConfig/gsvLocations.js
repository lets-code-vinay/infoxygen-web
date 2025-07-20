import PIN_GREEN from "../../assets/icons/pins/pin-green.png";
import PIN_BLUE from "../../assets/icons/pins/pin-blue.png";
import PIN_RED from "../../assets/icons/pins/pin-red.png";
import PIN_YELLOW from "../../assets/icons/pins/pin-yellow.png";

const pins = [
  PIN_GREEN,
  PIN_RED,
  PIN_BLUE,
  PIN_YELLOW,
  PIN_GREEN,
  PIN_RED,
  PIN_BLUE,
  PIN_YELLOW,
  PIN_GREEN,
  PIN_RED,
  PIN_BLUE,
  PIN_YELLOW,
];

export const GSV_LOCATIONS = [
  {
    latitude: 52.601234,
    longitude: 4.700493,
    title: "Vredenoord, 1852 WL Heiloo, The Netherlands",
    flag: pins[(Math.random() * 10).toFixed(0)],
  },
  {
    latitude: 40.560806,
    longitude: -74.465591,
    title: "Liberty Court, Piscataway, New Jersey, 08854, USA",
    flag: pins[(Math.random() * 10).toFixed(0)],
  },
  {
    latitude: 23.3972,
    longitude: 85.3573,
    title:
      "199/A, Mandaliya Nagar, Panchwati Garden Lane, Bariatu, Ranchi, Jharkhand",
    flag: pins[(Math.random() * 10).toFixed(0)],
  },
  {
    latitude: 31.0836,
    longitude: 77.1674,
    title: "Block #24, Set No. 549, Sector-3 New Shimla,Himachal Pradesh",
    flag: pins[(Math.random() * 10).toFixed(0)],
  },
  {
    latitude: 28.4908,
    longitude: 77.069,
    title: "90B, Delhi-Jaipur Expy, Udyog Vihar, Sec-18, Gurugram",
    flag: pins[(Math.random() * 10).toFixed(0)],
  },
];
