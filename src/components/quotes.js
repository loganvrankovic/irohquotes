const quotes = [
    ["The key to good advice and good tea is proper aging.", "/path"],
    ["It is important to draw wisdom from many different places... ...Understanding others, the other elements, and the other Nations, will help you become whole.", "/path"],
    ["Life happens wherever you are, whether you make it or not.", "/path"],
    ["Perfection and power are overrated. I think you are very wise to choose happiness and love.", "/path"],
    ["With a poor stance, you are unbalanced and you can be easily knocked over.", "/path"],
    ["You must let go of your feelings of shame if you want your anger to go away. Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.", "/path"],
    ["Sharing tea with a fascinating stranger is one of life's true delights", "/path"],
    ["It is usually best to admit mistakes when they occur, and to seek to restore honor.", "/path"],
    ["Many things that seem threatening in the dark become welcoming when we shine light on them.", "/path"],
    ["Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving... You will come to a better place.", "/path"],
    ["Is it your own destiny? Or is it a destiny someone else has tried to force on you? It's time for you to look inward, and begin asking yourself the big questions. Who are you? and what do you want?", "/path"]
]

export function textRand() {
    let x = Math.floor(Math.random() * 11);
    return quotes[x][0];
}

export function mp3Rand() {
    let x = Math.floor(Math.random() * 11);
    return quotes[x][1];
}