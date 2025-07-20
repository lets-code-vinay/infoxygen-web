/**
 * Deprecated
 */

export const ASIA_ROTATION = [-85, -20, 0];
export const AFRICA_ROTATION = [-20, 0, 0];
export const SOUTH_AMERICA_ROTATION = [58, 30, 0];

export const SOUTH_AMERICA = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export const ASIA = [
  { markerOffset: 15, name: "Bangalore", coordinates: [77.594566, 12.971599] },
  { markerOffset: 15, name: "Mumbai", coordinates: [72.8777, 19.076] },
  { markerOffset: 15, name: "Chandigarh", coordinates: [76.7794, 30.7333] },
  { markerOffset: 15, name: "Shimla", coordinates: [77.1734, 31.1048] },
  { markerOffset: 15, name: "Gurugram", coordinates: [77.0266, 28.4595] },
  { markerOffset: 15, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: 15, name: "Patna", coordinates: [85.1376, 25.5941] },
  { markerOffset: 15, name: "Ranchi", coordinates: [85.3096, 23.3441] },
  { markerOffset: 15, name: "Kolkata", coordinates: [88.3639, 22.5726] },
];

export const AFRICA = [
  { markerOffset: 15, name: "Nigeria", coordinates: [8.6753, 9.082] },
  { markerOffset: 15, name: "Egypt", coordinates: [30.8025, 26.8206] },
];

export const CONTINENTS = {
  SOUTH_AMERICA: {
    name: "Latin America",
    region: "Americas",
    rotation: SOUTH_AMERICA_ROTATION,
    continent: SOUTH_AMERICA,
  },
  NORTH_AMERICA: {
    name: "North America",
    region: "Africa",
    rotation: AFRICA_ROTATION,
    continent: AFRICA,
  },
  ASIA: {
    name: "Asia",
    region: "Asia",
    rotation: ASIA_ROTATION,
    continent: ASIA,
  },
  AFRICA: {
    name: "Africa",
    region: "Africa",
    rotation: AFRICA_ROTATION,
    continent: AFRICA,
  },
  OCEANIA: {
    name: "Oceania",
    region: "Africa",
    rotation: AFRICA_ROTATION,
    continent: AFRICA,
  },
};
