import { IPlanet } from "../../types/planet.type";
import { activeColors } from "../../utils/helpers";
import { Heading } from "../text/heading.component";

interface IButtonProps  {
    children:JSX.Element | string;
    planet:IPlanet;
    handleChange:(selected:string)=>void;
    value:string;
    currentSelected:string;
}

export function Button  ({value, children, planet, handleChange, currentSelected}:IButtonProps){
    console.log(value, currentSelected)
return <div onClick={()=>handleChange(value)} className={`text-left px-7 py-3 cursor-pointer border flex justify-start items-center  ${currentSelected === value? `${activeColors[planet.name]}`:'bg-transparent border-white hover:bg-white/50'} `}>
    <Heading type="h3">{children}</Heading>
</div>
}