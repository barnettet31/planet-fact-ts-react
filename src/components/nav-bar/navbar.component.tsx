import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { PlanetLink } from "../planet-link/planet-link";

const planets = [
    {
        name:'Mercury',
        path:'/',
        color:'bg-[#DEF4FC]'
    },
    {
        name:'Venus',
        path:'/venus',
        color:'bg-[#F7CC7F]'
    },
    {
        name:'Earth',
        path:'/earth',
        color:'bg-[#545BFE]'
    },
    {
        name:'Mars',
        path:'/mars',
        color:'bg-[#FF6A45]'
    },
    {
        name:'Jupiter',
        path:'/jupiter',
        color:'bg-[#ECAD7A]'
    },
    {
        name:'Saturn',
        path:'/saturn',
        color:'bg-[#FCCB6B]'
    },
    {
        name:'Uranus',
        path:'/uranus',
        color:'bg-[#65F0D5]'
    },
    {
        name:'Neptune',
        path:'/neptune',
        color:'bg-[#497EFA]'
    },
]
interface IPlanetPathData  {
    name:string;
    path:string;
    color:string;
    linkClickedFunction: () => void;
}

export function NavBar (){
    const [navShown, setNavShown ] = useState(false);
    const handleNavBurgerClick = ()=> setNavShown(!navShown);
        return(
        <>
        <div className="relative flex md:flex-col md:gap-10 lg:flex-row items-center justify-between px-6 py-4 border-b border-b-white/[.2]">
            <div className="flex items-center justify-between w-full lg:flex-row lg:justify-start md:flex-col">
            <Link to='/'><h1 className="font-display uppercase text-[28px] leading-9 -tracking-[1.05px] ">The Planets</h1></Link>
            <img alt="" onClick={handleNavBurgerClick} className="w-6 h-4 md:hidden" src={`${process.env.PUBLIC_URL}/images/icon-hamburger.svg`}/>
            </div>
            <nav className={`fixed  h-screen w-screen  bg-[#070724] z-10 md:bg-transparent md:static md:w-full md:h-auto ease-in-out duration-200 top-[69px]  px-6 py-11 md:py-2 left-0 origin-top ${navShown? 'scale-y-100 opacity-100 md:opacity-100 md:scale-y-100':'scale-y-0 opacity-70 md:scale-y-100 md:opacity-100 '} `}>
                <ul className='flex flex-col items-center justify-center md:flex-row md:justify-evenly md:gap-4'>
                    {planets.map((planet)=><PlanetLink key={planet.name} linkClickedFunction={handleNavBurgerClick} {...planet}/>)}
                    
                    
                </ul>
            </nav>
        </div>
        <Outlet/>
        </>
        )
        
}