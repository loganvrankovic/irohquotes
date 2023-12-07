'use client'
import * as React from "react"
import { useState, useRef } from "react"
import teaRand from "../components/tea"
import quoteRand from "../components/quotes"
import ModeToggle  from "@/components/modetoggle"
import { Coffee, 
    Twitter, 
    Github,
    Quote, 
    Link2, 
    RotateCw, 
    Headphones,
    XCircle,
    Sun,
    Info } from "lucide-react"
import { Button } from "./ui/button"
import { Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { error } from "console"

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

function CopyURLButton() {
    const copyURLToClipboard = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                alert('URL copied to clipboard!')
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
                alert("Failed to copy URL to clipboard")
            })
    }

    return (
        <Button onClick={copyURLToClipboard} 
        className="ml-3 share" variant="outline" size="icon">
            <Link2 className="h-5 w-5"/>
        </Button>
    )
}

interface HelpProps {
    onClick: () => void;
}

function Help({onClick}: HelpProps) {
    const handleClick = () => {
        onClick();
    }
    
    return (
        <div>
            <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            className="flex items-center"
            onClick={handleClick}
            >
                <Info size="14px" className="mr-1" />
                info
            </p>
        </div>
    )
}

interface InstructionsCardProps {
    onClose: () => void;
}

function InstructionsCard({ onClose }: InstructionsCardProps) {
    return (
        <Card className="infocard absolute p-8 shadow-xl mx-3">
         <CardTitle className=""><p
            className="flex items-center"
            >
                <Info size="16px" className="mr-1" />
                info
            </p></CardTitle>
            <div className="infohori">
                <div className="info1">
                    <CardDescription className="pt-6">top-right buttons</CardDescription>
                    <CardContent className="pt-2 sm:text-xs md:text-sm lg:text-base xl:text-md">
                        <p className="flex items-center">
                            <RotateCw size="14px" className="mr-1"/>
                            <span className="ml-2">refresh the quote and mood</span>
                        </p>
                        <p className="flex items-center">
                            <Headphones size="14px" className="mr-1"/>
                            <span className="ml-2">listen to Iroh&apos;s words of wisdom</span>
                        </p>
                    </CardContent>
                </div>
                <div className="info2">
                <CardDescription>bottom-left buttons</CardDescription>
                <CardContent className="pt-2 sm:text-xs md:text-sm lg:text-base xl:text-md">
                    <p className="flex items-center">
                        <Sun size="14px" className="mr-1"/>
                        <span className="ml-2">change the quote card&apos;s theme</span>
                    </p>
                    <p className="flex items-center">
                        <Coffee size="14px" className="mr-1"/>
                        <span className="ml-2">learn about a random tea that Iroh enjoys</span>
                    </p>
                    <p className="flex items-center">
                        <Twitter size="14px" className="mr-1"/>
                        <span className="ml-2">Tweet your favorite quote</span>
                    </p>
                    <p className="flex items-center">
                        <Link2 size="14px" className="mr-1"/>
                        <span className="ml-2">copy this website&apos;s URL to share</span>
                    </p>
                </CardContent>
                </div>
            </div>
            <CardContent>
                <p className="github flex items-center">
                    <Github className="mr-1 sm:text-xs md:text-sm lg:text-base xl:text-md"/>
                    <span className="ml-2 underline"><a href="https://github.com/loganvrankovic">https://github.com/loganvrankovic</a></span>
                </p>
            </CardContent>
            <CardContent className="text-center pt-2 mb-[-20px]">
                <Button onClick={onClose} variant="ghost"><XCircle /></Button>
            </CardContent>
        </Card>
    )
}

interface RQuoteProps {
    onBgColorChange: (newColor: string) => void;
}

// random quote ----------------------------------------------------
export default function RQuote({ onBgColorChange }: RQuoteProps) {
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

    interface AudioPlayerProps {
     audioFile: string;
    }

    const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile }) => {
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
                {/* <div className="relative bottom-10 text-xs md:text-xs lg:text-sm xl:text-sm">
                    <Help />
                </div> */}
                <div className="relative shadheader">
                    <Button onClick={refreshQuote} className="share absolute right-6 top-5" variant="outline">
                        <RotateCw className="h-5 w-5" />
                    </Button>
                    {/* <Button className="share head absolute top-5" variant="outline">
                        <Headphones className="h-5 w-5" />
                    </Button> */}
                    <AudioPlayer audioFile={quoteState[1]} />
                </div>
                <CardHeader>
                    {/* <CardTitle></CardTitle> */}
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