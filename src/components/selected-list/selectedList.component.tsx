import { BodyText } from "../text/body.component";

interface ISelectedListProps {
    selectedItem: string;
    planet: string;
    updateSelected: (contentToUpdateTo: string) => void;
  }
  export function SelectedList({
    selectedItem,
    updateSelected,
    planet,
  }: ISelectedListProps) {
    const planets = [
      {
        name: "Mercury",
        color: "after:bg-[#DEF4FC]",
      },
      {
        name: "Venus",
        color: "after:bg-[#F7CC7F]",
      },
      {
        name: "Earth",
        color: "after:bg-[#545BFE]",
      },
      {
        name: "Mars",
        color: "after:bg-[#FF6A45]",
      },
      {
        name: "Jupiter",
        color: "after:bg-[#ECAD7A]",
      },
      {
        name: "Saturn",
        color: "after:bg-[#FCCB6B]",
      },
      {
        name: "Uranus",
        color: "after:bg-[#65F0D5]",
      },
      {
        name: "Neptune",
        color: "after:bg-[#497EFA]",
      },
    ];
  
    return (
      <ul className="flex justify-between w-full py-5 border-b-white/[0.2] border-b px-6 mb-10">
        <li
          onClick={() => updateSelected("overview")}
          className={`relative after:absolute ${
            selectedItem === "overview" ? "after:scale-x-100" : "after:scale-x-0"
          } after:ease-in-out after:origin-left after:duration-200 after:content-[''] after:h-[4px] after:w-full  after:-bottom-[80%] ${
            planets.find((element) => element.name === planet)?.color
          }`}
        >
          <BodyText
            additionalStyles={
              selectedItem === "overview" ? "opacity-100" : "opacity-50"
            }
          >
            Overview
          </BodyText>
        </li>
        <li
          onClick={() => updateSelected("structure")}
          className={`relative after:absolute ${
            selectedItem === "structure" ? "after:scale-x-100" : "after:scale-x-0"
          }  after:content-[''] after:h-[4px] after:duration-200 after:ease-in-out after:origin-left after:w-full after:-bottom-[80%]  ${
            planets.find((element) => element.name === planet)?.color
          }`}
        >
          <BodyText
            additionalStyles={
              selectedItem === "structure" ? "opacity-100" : "opacity-50"
            }
          >
            Structure
          </BodyText>
        </li>
        <li
          onClick={() => updateSelected("geology")}
          className={`relative after:absolute ${
            selectedItem === "geology" ? "after:scale-x-100" : "after:scale-x-0"
          } after:content-[''] after:h-[4px]  after:duration-200 after:ease-in-out after:origin-left after:w-full after:-bottom-[80%]  ${
            planets.find((element) => element.name === planet)?.color
          }`}
        >
          <BodyText
            additionalStyles={
              selectedItem === "geology" ? "opacity-100" : "opacity-50"
            }
          >
            Surface
          </BodyText>
        </li>
      </ul>
    );
  }