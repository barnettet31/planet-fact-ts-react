import { Heading } from "../text/heading.component";

type IButtonProps = {
    children:JSX.Element;
    planet:string;
    
}
const activeColors:{
    [key:string]:string
}= {
    Mercury:"#419EBB",
    Venus:"#EDA249",
    Earth:"#6D2ED5",
    Mars:"#D14C32",
    Jupiter:"#D83A34",
    Saturn:"#CD5120",
    Uranus:"#1EC1A2",
    Neptune:"#2D68F0",
}
function Button  ({children, planet}:IButtonProps){
return <div className={`bg-transparent hover:bg-[#D8D8D8] active:bg-[${activeColors[planet]}] text-left pl-[74px] py-3`}>
    <Heading type="h3">{children}</Heading>
</div>
}