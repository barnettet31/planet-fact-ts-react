import { IPlanet } from "../../types/planet.type"
import { returnDesiredPictureFromPlanet, returnPlanetSizes } from "../../utils/helpers";

interface IPlanetPhotoProps {
    planet:IPlanet,
    selected:string;
}
export function PlanetPhoto ({planet, selected}:IPlanetPhotoProps){
    if(selected ==='geology')return(
        <div className={`relative ${returnPlanetSizes(planet.name)} grid items-center place-items-center grid-rows-3 max-h-[14rem] md:max-h-[23.0625rem] lg:max-h-[36.375em]`}>
            <img src={process.env.PUBLIC_URL + returnDesiredPictureFromPlanet(planet, 'overview')} alt={planet.name} className="grid-in-[1/1/3/2]" />
            <img src={process.env.PUBLIC_URL +returnDesiredPictureFromPlanet(planet, selected)} alt={planet.name + 'geology'} className="w-1/2 max-w-[30%] grid-in-[2/1/4/2] absolute bottom-0"/>
        </div>
    )
    else return(  <img
        src={process.env.PUBLIC_URL + returnDesiredPictureFromPlanet(planet, selected)}
        alt={planet.name}
        className={`${returnPlanetSizes(planet.name)}`}
      />)
}