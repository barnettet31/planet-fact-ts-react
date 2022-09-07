import React from 'react'
import { IPlanet } from '../types/planet.type'

type PlanetProps ={
    planet:IPlanet
}


export function  PlanetPage({planet}:PlanetProps){
    return <h1 className="text-3xl font-bold">{planet.name}</h1>
}