import { ParamKeyValuePair } from "react-router-dom";
import { IPlanet } from "../types/planet.type";

export const returnPlanetSizes = (planet: string) => {
  switch (planet) {
    case "Mercury":
      return 'w-[6.9375rem] md:w-[11.5rem] lg:w-[18.125rem]'
    case "Venus":
      return "w-[9.625rem] md:w-[15.8125rem] lg:w-[25rem]"
    case "Earth":
      return "w-[10.8125rem] md:w-[17.8125rem] lg:w-[28.125rem]"
    case "Mars":
      return "w-[8.0625rem] md:w-[13.3125rem] lg:w-[21rem]"
    case "Jupiter":
      return "w-[14rem] md:w-[23.0625rem] lg:w-[36.375rem]"
    case "Saturn":
      return "w-[16rem] md:w-[26.375rem] lg:w-[41.625rem]"
    case "Uranus":
      return "w-[11rem] md:w-[18.125rem] lg:w-[28.625rem]"
    case "Neptune":
      return "w-[10.8125rem] md:w-[17.8125rem] lg:w-[28.125rem]"
    default:
      return "";
  }
};

export const returnDesiredValueFromPlanet = ({ overview, structure, geology }: IPlanet, selected: string): {
  content: string;
  source: string;
} => {
  switch (selected) {
    case 'overview':
      return overview;
    case 'structure':
      return structure;
    case 'geology':
      return geology;
    default:
      return {
        content: '',
        source: ''
      }

  }
}

export const returnDesiredPictureFromPlanet = ({ images }: IPlanet, selected: string) => {

  switch (selected) {
    case 'overview':
      return images.planet;
    case 'structure':
      return images.internal;
    case 'geology':
      return images.geology;
    default:
      return ''
  }
}
export const activeColors: {
  [key: string]: string
} = {
  Mercury: "#419EBB",
  Venus: "#EDA249",
  Earth: "#6D2ED5",
  Mars: "#D14C32",
  Jupiter: "#D83A34",
  Saturn: "#CD5120",
  Uranus: "#1EC1A2",
  Neptune: "#2D68F0",
}