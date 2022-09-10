import { Link } from "react-router-dom";

interface IPlanetPathData  {
    name:string;
    path:string;
    color:string;
    linkClickedFunction: () => void;
}

export function PlanetLink({name, path, color, linkClickedFunction}:IPlanetPathData){
        return ( <li className="w-full ">
                     <div className="w-full py-5 md:justify-center md:pb-7 md:py-0 lg:pb-0">
                        <Link onClick={linkClickedFunction} className="flex items-center justify-between w-full cursor-pointer" to={path}>
                            <div className="flex items-center gap-6">
                                <div className={`w-5 h-5 rounded-full ${color} md:hidden`}></div>
                                <p className="font-body font-bold font-[15px] leading-[25px] tracking-[1.36px] lg:opacity-75 lg:hover:opacity-100">{name.toUpperCase()}</p>
                            </div>
                            <img className="w-1 h-2 md:hidden" alt='' src={`${process.env.PUBLIC_URL}/images/icon-chevron.svg`}/>
                    </Link>
                    </div>
                    </li>
                    
        )
}