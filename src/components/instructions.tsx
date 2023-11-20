import * as React from "react"
import { Info } from "lucide-react"

export default function Help() {
    const handleHelpClick = () => {
        alert(`info:
        1. Refresh: get a new random Iroh quote
        2. Headphone: listen to Iroh say the current quote 
        3. Little buttons: 
            1. change theme 
            2. random Wikipedia page about 
            tea Iroh likes, 
            3. Tweet the current quote, and 
            4. copy the URL of this site
        
        by https://github.com/loganvrankovic `)
    }
    
    return (
        <div>
            <p
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleHelpClick}
            className="flex items-center"
            >
                <Info size="14px" className="mr-1" />
                info
            </p>
        </div>
    )
}