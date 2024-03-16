import { useState } from 'react'
import './App.css'

export default function App() {

  const [Joke,setJoke]=useState("")
  function apicall()
  {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then(res => res.json())
      .then(data => {
        setJoke(data.joke)
      })
  }
  return (
    <main>
     <button onClick={apicall}>Click To Generate </button>
      <h1>{Joke}</h1>
    </main>
  )
}
