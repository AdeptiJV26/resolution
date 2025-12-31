"use client";

import Image from "next/image";
import Snowfall from "react-snowfall";

export default function VisualEffects() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image 
        src="/NewYearBG.png" 
        alt="BG" 
        fill 
        priority 
        className="object-cover" 
      />
      <div className="absolute inset-0 bg-black/40" />
      <Snowfall 
        color="white" 
        snowflakeCount={150} 
        style={{ position: "fixed", width: "100vw", height: "100vh" }} 
      />
    </div>
  );
}