// AirportsData.ts
import Airport1 from "@/public/Images/gatwick.webp";
import Airport2 from "@/public/Images/heathrow.webp";
import Airport3 from "@/public/Images/londoncity.webp";
import Airport4 from "@/public/Images/luton.webp";
import Airport5 from "@/public/Images/stansed.webp";
import Airport6 from "@/public/Images/southend.webp";
import car1 from "@/public/Images/car1.svg";
import car2 from "@/public/Images/car2.svg";
import car3 from "@/public/Images/car3.svg";
import car4 from "@/public/Images/car4.svg";
import car5 from "@/public/Images/car5.svg";
import car6 from "@/public/Images/car6.svg";
import car7 from "@/public/Images/car7.svg";
import car8 from "@/public/Images/car8.svg";

import { StaticImageData } from "next/image";

export type Airport = {
  name: string;
  image: StaticImageData;
};
export type Cars = {
  name: string;
  description: string;
  passengers:number;
  luggage:number;
  image: StaticImageData;
};

export const airports: Airport[] = [
  { name: "Gatwick Airport", image: Airport1 },
  { name: "Heathrow Airport", image: Airport2 },
  { name: "London city Airport", image: Airport3 },
  { name: "London Luton Airport", image: Airport4 },
  { name: "Stansed Airport", image: Airport5 },
  { name: "Southend Airport", image: Airport6 },
];
export const cars: Cars[] = [
  { name: "Economy",description:'Skoda Octavia, Toyota Prius or similar',passengers:3, luggage:3, image: car1 },
  { name: "Standard Class",description:'Mercedes E Class, BMW 5 Series, Cadillac XTS or similar',passengers:3, luggage:3, image: car2 },
  { name: "First Class",description:'Mercedes S Class, BMW 7, Audi A8, Cadillac Escalade or similar',passengers:3, luggage:3, image: car3 },
  { name: "SUV",description:'Cadillac Escalade, Chevrolet Suburban or similar',passengers:6, luggage:6, image: car4 },
  { name: "Van Standard",description:'Mercedes Vito, Ford Custom, Chevrolet Suburban or similar',passengers:7, luggage:7, image: car5 },
  { name: "Van First Class",description:'Mercedes V Class, Cadillac Escalade or similar',passengers:6, luggage:6, image: car6 },
  { name: "Minibus (12 Pax)",description:'Mercedes Sprinter, Ford Transit or similar',passengers:12, luggage:12, image: car7 },
  { name: "Minibus (16 Pax)",description:'Mercedes Sprinter, Ford Transit or similar',passengers:16, luggage:16, image: car8 },
];