import { activeColors } from "../../utils/helpers";
import { Heading } from "../text/heading.component";

type IButtonProps = {
    children:JSX.Element | string;
    planet:string;
    
}

export function Button  ({children, planet}:IButtonProps){
return <div className={`bg-transparent hover:bg-[#D8D8D8] active:bg-[${activeColors[planet]}] text-left pl-[74px] py-3`}>
    <Heading type="h3">{children}</Heading>
</div>
}