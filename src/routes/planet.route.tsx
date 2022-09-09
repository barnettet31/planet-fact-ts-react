import React, { useState } from "react";
import { Button } from "../components/button/button.component";
import { PlanetPhoto } from "../components/planet-photo/planet-photo.component";
import { SelectedList } from "../components/selected-list/selectedList.component";
import { StatContainer } from "../components/stat-container/statContainer.component";
import { BodyText } from "../components/text/body.component";
import { Heading } from "../components/text/heading.component";
import { IPlanet } from "../types/planet.type";
import { returnDesiredPictureFromPlanet, returnDesiredValueFromPlanet, returnPlanetSizes } from "../utils/helpers";

type PlanetProps = {
  planet: IPlanet;
};


export function PlanetPage({ planet }: PlanetProps) {
  const [selectedItem, setSelectedItem] = useState("overview");
  const handleSetSelected = (contentToUpdateTo: string) =>
    setSelectedItem(contentToUpdateTo);
  return (
    <main className="flex flex-col justify-around h-full">
      <div className="md:hidden">
        <SelectedList
          planet={planet.name}
          updateSelected={handleSetSelected}
          selectedItem={selectedItem}
        />
      </div>
      <div className="flex flex-col items-center justify-around flex-1 px-6 ">
      <PlanetPhoto planet={planet} selected={selectedItem}/>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-center md:items-start ">
            <Heading type="h2">{planet.name.toUpperCase()}</Heading>
            <BodyText additionalStyles="text-center md:text-left mt-4 mb-8">
              {returnDesiredValueFromPlanet(planet, selectedItem).content}
            </BodyText>
            <div className="flex items-center gap-3">
            <p className="font-[12px] leading-[25px] opacity-50">Source : </p> <a className="flex items-end underline opacity-50" href={returnDesiredValueFromPlanet(planet, selectedItem).source}> Wikipedia <img className="ml-1" src={process.env.PUBLIC_URL +"/images/icon-source.svg"} alt=""/></a>
            </div></div>
            <div className="hidden md:flex md:flex-col md:w-1/2">
              <Button value='overview' planet={planet} handleChange={handleSetSelected}>Overview</Button>
              <Button value='structure' planet={planet} handleChange={handleSetSelected}>Internal Structure</Button>
              <Button value='geology' planet={planet} handleChange={handleSetSelected}>Surface Geology</Button>
              <div>Internal Structure</div>
              <div>Surface Geology</div>
            </div>
          </div>
          <section className="flex flex-col gap-2 md:w-full md:flex-row mt-7 md:justify-between">
            {[{statName:'Rotation Time',statData:planet.rotation},{statName:'Revolution Time', statData:planet.revolution},{statName:'Radius', statData:planet.radius},{statName:'Average Temp.',statData:planet.temperature}].map(stat=><StatContainer key={Math.random()} stat={stat}/>)}
          </section>
        </div>
      </div>
    </main>
  );
}
