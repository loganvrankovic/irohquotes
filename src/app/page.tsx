'use client'
import * as React from "react"
import { useState } from "react"
import Image from 'next/image'
import RQuote from '../components/quote'
import teaRand from "../components/tea"

export default function Home() {
  const [bgColor, setBgColor] = React.useState<string>("#7E9181");

  const handleBgColorChange = (newColor: string) => {
    setBgColor(newColor);
    document.documentElement.style.transition = "background-color 1s ease";
    document.documentElement.style.backgroundColor = newColor;
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = newColor; 
  };

  const [teaLink, setTeaLink] = useState(teaRand());

  const handleClick = () => {
    const newTeaLink = teaRand();
    setTeaLink(newTeaLink);

    const url = teaLink;
    window.open(url, '_blank');
  }

  return (
    <main className="wrapper">
      <RQuote onBgColorChange={handleBgColorChange} />
      <div className="iroh">
          <div className="tealink" onClick={handleClick}></div>
          <Image
            // original image likely by Dafoose (DeviantArt), 2009
            // transparent retrace by R3CONN3R (DeviantArt), 2019
            src="/irohbg.png" width={900} height={900}
            alt="Uncle with his tea..."
          />
      </div>
    </main>
  )
}