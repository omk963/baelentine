import { useEffect, useState } from "react";
import { getJokeFromMistral } from '../ai';


const Content = () => {
    const [count, setCount] = useState(0)
    const [choice, setChoice] = useState('No')
    const [joke, setJoke] = useState('')
    const [loading, setLoading] = useState(false)

    const getJoke = async () => {
        setLoading(true)
        const jokes = await getJokeFromMistral()
        setJoke(jokes)
        setLoading(false)
      }

    useEffect(() => {
        setTimeout(() => {
            setCount(1)
        }, 5000)
    }, [])

    return (
        <>
            {
                count === 0 ? (
                    <img src='https://gifsec.com/wp-content/uploads/2022/09/happy-valentine-gif-36.gif' />
                ) : count === 1 ? (
                    <>
                        <img src="https://media.tenor.com/K_E6ORTmXMoAAAAe/milk-and-mocha-love.png" />
                        <div className="choices">
                            <span className="choices-yes" onClick={() => setCount(2)}>Yes</span>
                            <span className="choices-yes" onClick={() => setCount(3)} onMouseEnter={() => setChoice('Yes')}>{choice}</span>
                        </div>
                    </>
                ) : count === 2 ? (
                    <>
                        <img src='https://hartfordbaking.com/wp-content/uploads/2019/02/charlie-brown-happy-valentines-cute-greetings-animated-gif-2.gif' />
                        <h2>Thanks Babe, I Love You Too </h2>
                    </>
                ) : (
                    <>
                        <img src='https://media.tenor.com/N5JBKgzrfCkAAAAM/happy-new.gif' className="snoopy" />
                        <h3>There's only one choice, but here's a little something for you. Click on the button below!</h3>
                        <button onClick={getJoke}>Get Joke</button>
                        {loading && <p>Retrieving Joke...</p>}
                        {joke && <p style={{width: '40vw'}}>{joke}</p>}
                        <button onClick={()=>setCount(2)}>Proceed</button>
                    </>
                )
            }
        </>
    )
}

export default Content