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
    <main className="flex flex-col justify-around h-full lg:py-[7.875rem]">
      <div className="mb-10 md:hidden">
        <SelectedList
          planet={planet.name}
          updateSelected={handleSetSelected}
          selectedItem={selectedItem}
        />
      </div>
      <div className="flex flex-col items-center justify-around flex-1 px-6 lg:flex-col md:pt-24 lg:pt-16 ">
        <div className="flex flex-col items-center justify-between gap-24 mt-8 md:mt-0 lg:flex-row lg:justify-center">
          <PlanetPhoto planet={planet} selected={selectedItem} />
          <div className="flex flex-col justify-between lg:flex-row lg:w-1/2">
            <div className="flex flex-col items-center md:flex-row lg:flex-col md:gap-4">
              <div className="flex flex-col items-center md:items-start md:w-1/2 ">
                <Heading type="h2">{planet.name.toUpperCase()}</Heading>
                <BodyText additionalStyles="text-center md:text-left mt-4 mb-8">
                  {returnDesiredValueFromPlanet(planet, selectedItem).content}
                </BodyText>
                <div className="flex items-center gap-3">
                  <p className="font-[12px] leading-[25px] opacity-50">Source : </p>
                  <a className="flex items-end underline opacity-50" href={returnDesiredValueFromPlanet(planet, selectedItem).source}> Wikipedia
                    <img className="ml-1" src={process.env.PUBLIC_URL + "/images/icon-source.svg"} alt="" />
                  </a>
                </div>
              </div>
              <div className="hidden md:flex md:flex-col md:w-1/2 md:gap-4">
                <Button currentSelected={selectedItem} value='overview' planet={planet} handleChange={handleSetSelected}><><span className="mr-4">01</span>Overview</></Button>
                <Button currentSelected={selectedItem} value='structure' planet={planet} handleChange={handleSetSelected}><><span className="mr-4">02</span> Internal Structure</></Button>
                <Button currentSelected={selectedItem} value='geology' planet={planet} handleChange={handleSetSelected}><><span className="mr-4">03</span> Surface Geology</></Button>
              </div>
            </div>
          </div>
        </div>
          <section className="flex flex-col w-full gap-2 md:flex-row mt-7 md:justify-between lg:justify-around">
            {[{ statName: 'Rotation Time', statData: planet.rotation }, { statName: 'Revolution Time', statData: planet.revolution }, { statName: 'Radius', statData: planet.radius }, { statName: 'Average Temp.', statData: planet.temperature }].map(stat => <StatContainer key={Math.random()} stat={stat} />)}
          </section>
      </div>
    </main>
  );
}
