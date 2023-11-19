import * as React from "react"
import Link from "next/link"
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

export default function RQuote() {
    return (
        <div className="flex items-center justify-center h-screen mx-4">
            <Card className="bg-gray-200 p-3 max-w-lg mb-40">
                <div className="relative">
                    <Button className="share absolute right-6 top-5" variant="outline">
                        <RotateCw className="h-5 w-5" />
                    </Button>
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
                        <p className="ml-3 text-base md:text-base lg:text-lg xl:text-xl">Many things that seem threatening in the dark become welcoming when we shine light on them.</p>
                    </div>
                </CardContent>
                <CardFooter className="text-sm md:text-base lg:text-lg xl:text-lg">
                    <Button className="ml-3 share" variant="outline" size="icon">
                        <Coffee className="h-5 w-5"/>
                    </Button>
                    <Button className="ml-3 share" variant="outline" size="icon">
                        <Twitter className="h-5 w-5"/>
                    </Button>
                    <Button className="ml-3 share" variant="outline" size="icon">
                        <Link2 className="h-5 w-5"/>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}