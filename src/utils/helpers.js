export const returnPlanetSizes = (planet) => {
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
