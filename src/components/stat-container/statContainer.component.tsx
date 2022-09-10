import { BodyText } from "../text/body.component";

interface IStatContainerProps{
    stat:{
      statName:string;
      statData:string
    };
  }
  export function StatContainer ({stat}:IStatContainerProps){
    return(
      <div className="flex items-center justify-between px-6 py-4 border border-white md:flex-col md:w-1/4 lg:w-[255px] lg:items-start">
        <BodyText additionalStyles="opacity-50">{stat.statName}</BodyText>
        <p className="text-xl leading-6 uppercase font-display">{stat.statData}</p>
      </div>
    )
  }