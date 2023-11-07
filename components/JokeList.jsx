import { useState, useEffect } from 'react'
import { Button, Text } from 'react-native'
import Joke from './Joke'
import Punchline from './Punchline'

export default function Jokeslist(){
    const [jokes, setJokes] = useState()
    const [currentJoke, setCurrentJoke] = useState(0)

    useEffect ( () => {
        fetch('https://api.sampleapis.com/jokes/goodJokes')
        .then(res => res.json())
        .then(shuffleJokes)
        .catch(alert)
    }, [] )

    const shuffleJokes = (array) => {
        for (let i= array.lengtt -1; i >= 0; i--){
            const j = Math.floor(Math.random() * (i + 1))
            [array[j], array[i]] = [array[i], array[j]]
         }
         setJokes(array)
    }

    const nextJoke = () => {
        if (currentJoke < jokes.length - 1) {
            setCurrentJoke(currentJoke + 1)
    
    } else {
        setCurrentJoke(0) //loop back to first joke
    }
}

    return (
        <>
        
        <Joke joke ={!jokes ? 'Loading...' : jokes[currentJoke].setup} />
        <Punchline punchline={jokes &&jokes[currentJoke].punchline} />
        <Button onPress={nextJoke} title="Next Joke" />
        </>
    )
}