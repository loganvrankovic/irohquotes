const quotes = [
  [
    "The key to good advice and good tea is proper aging.",
    "irohmp3/iroh0.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=The%20key%20to%20good%20advice%20and%20good%20tea%20is%20proper%20aging.",
  ],
  [
    "It is important to draw wisdom from many different places... ...Understanding others, the other elements, and the other Nations, will help you become whole.",
    "irohmp3/iroh1.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=...Understanding%20others,%20the%20other%20elements,%20and%20the%20other%20Nations,%20will%20help%20you%20become%20whole.",
  ],
  [
    "Life happens wherever you are, whether you make it or not.",
    "irohmp3/iroh2.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=Life%20happens%20wherever%20you%20are,%20whether%20you%20make%20it%20or%20not.",
  ],
  [
    "Perfection and power are overrated. I think you are very wise to choose happiness and love.",
    "irohmp3/iroh3.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=Perfection%20and%20power%20are%20overrated.%20I%20think%20you%20are%20very%20wise%20to%20choose%20happiness%20and%20love.",
  ],
  [
    "With a poor stance, you are unbalanced and you can be easily knocked over.",
    "irohmp3/iroh4.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=With%20a%20poor%20stance,%20you%20are%20unbalanced%20and%20you%20can%20be%20easily%20knocked%20over.",
  ],
  [
    "You must let go of your feelings of shame if you want your anger to go away. Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.",
    "irohmp3/iroh5.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=You%20must%20let%20go%20of%20your%20feelings%20of%20shame%20if%20you%20want%20your%20anger%20to%20go%20away.%20Pride%20is%20not%20the%20opposite%20of%20shame,%20but%20its%20source.%20True%20humility%20is%20the%20only%20antidote%20to%20shame.",
  ],
  [
    "Sharing tea with a fascinating stranger is one of life's true delights.",
    "irohmp3/iroh6.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=Sharing%20tea%20with%20a%20fascinating%20stranger%20is%20one%20of%20life's%20true%20delights.",
  ],
  [
    "It is usually best to admit mistakes when they occur, and to seek to restore honor.",
    "irohmp3/iroh7.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=It%20is%20usually%20best%20to%20admit%20mistakes%20when%20they%20occur,%20and%20to%20seek%20to%20restore%20honor.",
  ],
  [
    "There is nothing wrong with letting the people who love you, help you",
    "irohmp3/iroh8.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=There%20is%20nothing%20wrong%20with%20letting%20the%20people%20who%20love%20you,%20help%20you.",
  ],
  [
    "Sometimes life is like this dark tunnel. You can't always see the light at the end of the tunnel, but if you just keep moving... You will come to a better place.",
    "irohmp3/iroh9.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=Sometimes%20life%20is%20like%20this%20dark%20tunnel.%20You%20can't%20always%20see%20the%20light%20at%20the%20end%20of%20the%20tunnel,%20but%20if%20you%20just%20keep%20moving...%20You%20will%20come%20to%20a%20better%20place.",
  ],
  [
    "Is it your own destiny? Or is it a destiny someone else has tried to force on you? It's time for you to look inward, and begin asking yourself the big questions. Who are you? and what do you want?",
    "irohmp3/iroh10.mp3",
    "https://www.twitter.com/intent/tweet?hashtags=iroh&hashtags=quotes&related=iroh&text=Is%20it%20your%20own%20destiny?%20Or%20is%20it%20a%20destiny%20someone%20else%20has%20tried%20to%20force%20on%20you?%20It's%20time%20for%20you%20to%20look%20inward,%20and%20begin%20asking%20yourself%20the%20big%20questions.%20Who%20are%20you?%20and%20what%20do%20you%20want?",
  ],
];

export default function quoteRand() {
  let x = Math.floor(Math.random() * 11);
  const text = quotes[x][0];
  const sound = quotes[x][1];
  const tweet = quotes[x][2];
  return [text, sound, tweet];
}
