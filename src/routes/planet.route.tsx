import React, { useState } from "react";
import { Button } from "../components/button/button.component";
import { SelectedList } from "../components/selected-list/selectedList.component";
import { StatContainer } from "../components/stat-container/statContainer.component";
import { BodyText } from "../components/text/body.component";
import { Heading } from "../components/text/heading.component";
import { IPlanet } from "../types/planet.type";
import { returnPlanetSizes } from "../utils/helpers";

type PlanetProps = {
  planet: IPlanet;
};


export function PlanetPage({ planet }: PlanetProps) {
  const [selectedItem, setSelectedItem] = useState("overview");
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
