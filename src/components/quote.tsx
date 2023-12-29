'use client'
import * as React from "react"
import { useState, useRef } from "react"

import { Coffee, Twitter, Quote, Link2, RotateCw, Headphones } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "./ui/button"
import { Toaster, toast } from "sonner"

import teaRand from "../components/tea"
import quoteRand from "../components/quotes"
import ModeToggle  from "@/components/modetoggle"
import Help from "@/components/instructions"
import { InstructionsCard } from "@/components/instructions"

// random tea link button 
function TeaLink() {
    const [teaLink, setTeaLink] = useState(teaRand());

    const handleClick = () => {
        const newTeaLink = teaRand();
        setTeaLink(newTeaLink)
    }
    
    return (
        <div>
            <a href={teaLink} onClick={handleClick} target="_blank">
                <Button className="ml-3 share" variant="outline" size="icon">
                    <Coffee className="h-5 w-5"/>
                </Button>
            </a>
        </div>
    )
}

// copy URL toaster 
function CopyURLButton() {
    const copyURLToClipboard = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                toast('URL copied to clipboard', {
                    description: "Share tea with a fascinating stranger!",
                    action: {
                        label: "Clear",
                        onClick: () => console.log('toast clear')
                    }
                })
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
                alert("Failed to copy URL to clipboard")
            })
    }

    return (
        <div>
            <Toaster position="top-center" />
            <Button onClick={copyURLToClipboard} className="ml-3 share" variant="outline" size="icon">
                <Link2 className="h-5 w-5"/>
            </Button>
        </div>
    )
}

// main quote component 
export default function RQuote({ onBgColorChange }: { onBgColorChange: (newColor: string) => void }) {
    const [quoteState, setQuoteState] = useState(quoteRand());
    const [bgColor, setBgColor] = useState<string>("#7E9181")
    const [isFading, setIsFading] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const refreshQuote = () => {
        setIsFading(true)

        setTimeout(() => {
            const newQuote = quoteRand();
            const newBgColor = getColor();
            onBgColorChange(newBgColor);
            setBgColor(newBgColor);
            setQuoteState(newQuote);
            setIsFading(false);
        }, 500)
    }

    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    }

    const getColor = () => {
        return quoteState[1] === "public/irohmp3/iroh0.mp3" ? "#2E3532" :
            quoteState[1] === "irohmp3/iroh1.mp3" ? "#C7CEDB" :
            quoteState[1] === "irohmp3/iroh2.mp3" ? "#94849B" :
            quoteState[1] === "irohmp3/iroh3.mp3" ? "#A0AAB2" :
            quoteState[1] === "irohmp3/iroh4.mp3" ? "#d5ff80" :
            quoteState[1] === "irohmp3/iroh5.mp3" ? "#242F40" :
            quoteState[1] === "irohmp3/iroh6.mp3" ? "#F9E784" :
            quoteState[1] === "irohmp3/iroh7.mp3" ? "#685044" :
            quoteState[1] === "irohmp3/iroh8.mp3" ? "#8075FF" :
            quoteState[1] === "irohmp3/iroh9.mp3" ? "#E5D1D0" :
            quoteState[1] === "irohmp3/iroh10.mp3" ? "#ccccff" :
            "#2A2C24";
    }

    // audio player component 
    const AudioPlayer: React.FC<{ audioFile: string }> = ({ audioFile }) => {
        const audioRef = useRef<HTMLAudioElement>(null);

        const playAudio = () => {
         console.log(audioRef.current)
            if (audioRef.current) {
                audioRef.current.play();
            }
        }

        return (
            <div>
                <audio ref={audioRef} src={audioFile} />
                <Button onClick={playAudio} className="share head absolute top-5" variant="outline">
                    <Headphones className="h-5 w-5" />
                </Button>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen mx-auto" style={{ backgroundColor: bgColor, transition: "background-color 1s" }}>
            <Card className="quotecard p-3 max-w-lg mb-40 mx-6">
                <div className="relative shadheader">
                    <Button onClick={refreshQuote} className="share absolute right-6 top-5" variant="outline">
                        <RotateCw className="h-5 w-5" />
                    </Button>
                    <AudioPlayer audioFile={quoteState[1]} />
                </div>
                <CardHeader>
                    <CardDescription className="smol text-sm md:text-base lg:text-lg xl:text-lg">Uncle Iroh says...</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex my-4">
                        <Quote className="flex-initial" style={{ flexBasis: '20%' }} />
                        <p className={`ml-3 text-base md:text-base lg:text-lg xl:text-xl ${ isFading ? 'fade-out' : 'fade-in' }`} 
                           style={{ transition: "color 0.5s" }} 
                           suppressHydrationWarning>
                                {quoteState[0]}
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="shadfooter text-sm md:text-base lg:text-lg xl:text-lg">
                    <ModeToggle />
                    <TeaLink />
                    <a id="tweet-quote" href={quoteState[2]} target="_blank">
                        <Button className="ml-3 share" variant="outline" size="icon">
                            <Twitter className="h-5 w-5"/>
                        </Button>
                    </a>
                    <CopyURLButton />
                    <div className="relative ml-3 text-xs md:text-xs lg:text-sm xl:text-sm">
                        <Help onClick={toggleInstructions} />
                    </div>
                </CardFooter>
            </Card>
            { showInstructions && (<InstructionsCard onClose={toggleInstructions} />) }
        </div>
    )
}