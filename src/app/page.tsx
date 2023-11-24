'use client'
import * as React from "react"
import Image from 'next/image'
import RQuote from '../components/quote'

export default function Home() {
  const [bgColor, setBgColor] = React.useState<string>("#7E9181");

  const handleBgColorChange = (newColor: string) => {
    setBgColor(newColor);
    document.documentElement.style.transition = "background-color 1s ease";
    document.documentElement.style.backgroundColor = newColor;
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = newColor; 
  };

  return (
    <main className="wrapper">
      <RQuote onBgColorChange={handleBgColorChange} />
      <div className="iroh">
        <Image
        src="/irohbg.png" width={900} height={900}
        alt="Uncle with his tea..."
        />
      </div>
    </main>
  )
}