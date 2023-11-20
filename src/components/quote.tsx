'use client'
import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import teaRand from "../components/tea"
import quoteRand from "../components/quotes"
import { ModeToggle } from "@/app/page"
import { Coffee, 
    Twitter, 
    Quote, 
    Link2, 
    RotateCw, 
    Headphones } from "lucide-react"
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

export default function RQuote() {
// let quoteState = quoteRand();

const [quoteState, setQuoteState] = useState(quoteRand());
const refreshQuote = () => {
    const newQuote = quoteRand();
    setQuoteState(newQuote);
}

    return (
        <div className="flex items-center justify-center h-screen mx-4">
            <Card className="p-3 max-w-lg mb-40">
                <div className="relative">
                    {/* REFRESH BUTTON */}
                    <Button onClick={refreshQuote} className="share absolute right-6 top-5" variant="outline">
                        <RotateCw className="h-5 w-5" />
                    </Button>
                    {/* REFRESH BUTTON */}
                    <Button className="share head absolute top-5" variant="outline">
                        <Headphones className="h-5 w-5" />
                    </Button>
                </div>
                <CardHeader>
                    {/* <CardTitle></CardTitle> */}
                    <CardDescription className="smol text-sm md:text-base lg:text-lg xl:text-lg">Uncle Iroh says...</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex my-4">
                        <Quote className="flex-initial" style={{ flexBasis: '20%' }} />
                        <p className="ml-3 text-base md:text-base lg:text-lg xl:text-xl" suppressHydrationWarning>{quoteState[0]}</p>
                    </div>
                </CardContent>
                <CardFooter className="text-sm md:text-base lg:text-lg xl:text-lg">
                    <ModeToggle />
                    <TeaLink />
                    <a id="tweet-quote" href={quoteState[2]} target="_blank">
                        <Button className="ml-3 share" variant="outline" size="icon">
                            <Twitter className="h-5 w-5"/>
                        </Button>
                    </a>
                    <CopyURLButton />
                </CardFooter>
            </Card>
        </div>
    )
}