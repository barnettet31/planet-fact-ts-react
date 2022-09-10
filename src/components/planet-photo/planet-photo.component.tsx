import { IPlanet } from "../../types/planet.type"
import { returnDesiredPictureFromPlanet, returnPlanetSizes } from "../../utils/helpers";

interface IPlanetPhotoProps {
    planet:IPlanet,
    selected:string;
}
export function PlanetPhoto ({planet, selected}:IPlanetPhotoProps){
    if(selected ==='geology')return(
        <div className={`relative ${returnPlanetSizes(planet.name)} flex justify-center max-w-[6.9375rem] md:max-w-[11.5rem] lg:max-w-[18.125rem]`}>
            <img src={process.env.PUBLIC_URL + returnDesiredPictureFromPlanet(planet, 'overview')} alt={planet.name} className="" />
            <img src={process.env.PUBLIC_URL +returnDesiredPictureFromPlanet(planet, selected)} alt={planet.name + 'geology'} className="w-1/2 max-w-[30%] absolute bottom-[-25%]"/>
        </div>
    )
    else return(  <img
        src={process.env.PUBLIC_URL + returnDesiredPictureFromPlanet(planet, selected)}
        alt={planet.name}
        className={`w-[6.9375rem] md:w-[11.5rem] lg:w-[18.125rem]`}
      />)
}