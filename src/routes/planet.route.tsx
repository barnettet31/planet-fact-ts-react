import React, { useState } from "react";
import { Button } from "../components/button/button.component";
import { BodyText } from "../components/text/body.component";
import { Heading } from "../components/text/heading.component";
import { IPlanet } from "../types/planet.type";
import { returnPlanetSizes } from "../utils/helpers";

type PlanetProps = {
  planet: IPlanet;
};
interface ISelectedListProps {
  selectedItem: string;
  planet: string;
  updateSelected: (contentToUpdateTo: string) => void;
}
function SelectedList({
  selectedItem,
  updateSelected,
  planet,
}: ISelectedListProps) {
  const planets = [
    {
      name: "Mercury",
      color: "after:bg-[#DEF4FC]",
    },
    {
      name: "Venus",
      color: "after:bg-[#F7CC7F]",
    },
    {
      name: "Earth",
      color: "after:bg-[#545BFE]",
    },
    {
      name: "Mars",
      color: "after:bg-[#FF6A45]",
    },
    {
      name: "Jupiter",
      color: "after:bg-[#ECAD7A]",
    },
    {
      name: "Saturn",
      color: "after:bg-[#FCCB6B]",
    },
    {
      name: "Uranus",
      color: "after:bg-[#65F0D5]",
    },
    {
      name: "Neptune",
      color: "after:bg-[#497EFA]",
    },
  ];

  return (
    <ul className="flex justify-between w-full py-5 border-b-white/[0.2] border-b px-6 mb-10">
      <li
        onClick={() => updateSelected("overview")}
        className={`relative after:absolute ${
          selectedItem === "overview" ? "after:scale-x-100" : "after:scale-x-0"
        } after:ease-in-out after:origin-left after:duration-200 after:content-[''] after:h-[4px] after:w-full  after:-bottom-[80%] ${
          planets.find((element) => element.name === planet)?.color
        }`}
      >
        <BodyText
          additionalStyles={
            selectedItem === "overview" ? "opacity-100" : "opacity-50"
          }
        >
          Overview
        </BodyText>
      </li>
      <li
        onClick={() => updateSelected("structure")}
        className={`relative after:absolute ${
          selectedItem === "structure" ? "after:scale-x-100" : "after:scale-x-0"
        }  after:content-[''] after:h-[4px] after:duration-200 after:ease-in-out after:origin-left after:w-full after:-bottom-[80%]  ${
          planets.find((element) => element.name === planet)?.color
        }`}
      >
        <BodyText
          additionalStyles={
            selectedItem === "structure" ? "opacity-100" : "opacity-50"
          }
        >
          Structure
        </BodyText>
      </li>
      <li
        onClick={() => updateSelected("surface")}
        className={`relative after:absolute ${
          selectedItem === "surface" ? "after:scale-x-100" : "after:scale-x-0"
        } after:content-[''] after:h-[4px]  after:duration-200 after:ease-in-out after:origin-left after:w-full after:-bottom-[80%]  ${
          planets.find((element) => element.name === planet)?.color
        }`}
      >
        <BodyText
          additionalStyles={
            selectedItem === "surface" ? "opacity-100" : "opacity-50"
          }
        >
          Surface
        </BodyText>
      </li>
    </ul>
  );
}
interface IStatContainerProps{
  stat:{
    statName:string;
    statData:string
  };
}
function StatContainer ({stat}:IStatContainerProps){
  return(
    <div className="flex items-center justify-between px-6 py-4 border border-white md:flex-col md:w-1/4">
      <BodyText additionalStyles="opacity-50">{stat.statName}</BodyText>
      <p className="text-xl leading-6 uppercase font-display">{stat.statData}</p>
    </div>
  )
}
export function PlanetPage({ planet }: PlanetProps) {
  const [selectedItem, setSelectedItem] = useState("overview");
  const EARTH_RADIUS = 6371;
  const handleSetSelected = (contentToUpdateTo: string) =>
    setSelectedItem(contentToUpdateTo);
  return (
    <div className="">
      <div className="md:hidden">
        <SelectedList
          planet={planet.name}
          updateSelected={handleSetSelected}
          selectedItem={selectedItem}
        />
      </div>
      <div className="flex flex-col items-center justify-around px-6">
        <img
          src={process.env.PUBLIC_URL + planet.images.planet}
          alt={planet.name}
          className={`${returnPlanetSizes(planet.name)}`}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-center md:items-start md:w-1/2">
            <Heading type="h2">{planet.name.toUpperCase()}</Heading>
            <BodyText additionalStyles="text-center md:text-left mt-4 mb-8">
              {planet.overview.content}
            </BodyText>
            <div className="flex items-center gap-3">
            <p className="font-[12px] leading-[25px] opacity-50">Source : </p> <a className="flex items-end underline opacity-50" href={planet.overview.source}> Wikipedia <img className="ml-1" src={process.env.PUBLIC_URL +"/images/icon-source.svg"} alt=""/></a>
            </div></div>
            <div className="hidden md:flex md:flex-col md:w-1/2">
              <Button planet={planet.name}>Overview</Button>
              <Button planet={planet.name}>Internal Structure</Button>
              <Button planet={planet.name}>Surface Geology</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-full md:flex-row mt-7 md:justify-between">
            {[{statName:'Rotation Time',statData:planet.rotation},{statName:'Revolution Time', statData:planet.revolution},{statName:'Radius', statData:planet.radius},{statName:'Average Temp.',statData:planet.temperature}].map(stat=><StatContainer key={Math.random()} stat={stat}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}
