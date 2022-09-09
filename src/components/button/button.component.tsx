import { IPlanet } from "../../types/planet.type";
import { activeColors } from "../../utils/helpers";
import { Heading } from "../text/heading.component";

interface IButtonProps  {
    children:JSX.Element | string;
    planet:IPlanet;
    handleChange:(selected:string)=>void;
    value:string;
}

export function Button  ({value, children, planet, handleChange}:IButtonProps){
return <div onClick={()=>handleChange(value)} className={`bg-transparent hover:bg-[#D8D8D8] active:bg-[${activeColors[planet.name]}] text-left pl-[74px] py-3`}>
    <Heading type="h3">{children}</Heading>
</div>
}