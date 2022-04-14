import { useState } from "react";
import { Tweet } from "./Tweet";

import './App.css';

function App() {
  const [tweet, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    setTweets([...tweet,'Tweet 5'])
  }
  return (
  <div>
      {tweet.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button
       onClick={createTweet}
       style={{
         backgroundColor: 'green',
         border: 0,
         padding: '6px 12px',
         color: '#FFF'
       }}
       >
         Adicionar Tweet
      </button>
    </div>
  );
}

export default App
