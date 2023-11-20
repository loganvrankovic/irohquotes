'use client'
import * as React from "react"
import Image from 'next/image'
import RQuote from '../components/quote'

export default function Home() {
  return (
    <main className="wrapper">
      <RQuote />
      <div className="iroh">
        <Image
        src="/irohbg.png" width={900} height={900}
        alt="Uncle with his tea..."
        />
      </div>
    </main>
  )
}