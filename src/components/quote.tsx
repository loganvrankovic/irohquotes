import * as React from "react"
import { Coffee, Quote } from "lucide-react"
import {
    Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function RQuote() {
    return (
        <div className="flex items-center justify-center h-screen mx-4">
            <Card className="bg-gray-200 p-4 max-w-lg mb-40">
                <CardHeader>
                    {/* <CardTitle></CardTitle> */}
                    <CardDescription>Uncle Iroh says...</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex">
                        <Quote className="flex-initial" style={{ flexBasis: '20%' }} />
                        <p className="ml-3 text-sm md:text-base lg:text-lg xl:text-xl">Many things that seem threatening in the dark become welcoming when we shine light on them.</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Coffee />
                    <p className="p-2">Share:</p>
                </CardFooter>
            </Card>
        </div>
    )
}