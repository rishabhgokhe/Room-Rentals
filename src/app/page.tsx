import Lamp from "@/components/UI/LampText/lamp";
import { NextTemplate } from "../components/UI/NextTemplate";
import { GridBackground } from "@/components/UI/BackgroundGrid/BackgroundGrid";
import { WobbleCardComponent } from "@/components/UI/WobbleCard/WoobleCardComponent";
import { ParallaxScrollComponent } from "@/components/UI/ParallaxScroll/ParallaxScrollComponent";
import { BentoGridComponent } from "@/components/UI/BentoGrid/BentoGridComponent";

export default function Home() {
  return <>
  <Lamp />
  <BentoGridComponent />
  {/* <ParallaxScrollComponent /> */}
  <WobbleCardComponent />
  <GridBackground />
  
  {/* <NextTemplate /> */}
  </>;
}