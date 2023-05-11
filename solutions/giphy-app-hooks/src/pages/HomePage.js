import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/authContext'

const API_KEY = 'APIKEYGOESHERE'

function HomePage() {
    const [ gifs, setGifs] = useState([])

    const auth = useAuth()

    useEffect(() => {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&rating=g`)
            .then((response) => {
                setGifs(response.data.data)
            })
    }, [])

    const handleSave = (url) => {
        const saved = JSON.parse(localStorage.getItem('gifs')) || []

        //stop repeat gifs
        if(saved.includes(url)) return

        localStorage.setItem('gifs', JSON.stringify([...saved, url]))

        alert('gif saved')
    }

    return (
        <div>
            <h1>Trending Gifs</h1>
            <>
                {gifs.map((gif, index) => {
                    return (
                        <div key={index}>
                            <img src={gif.images.original.url} />
                            {auth.user && <button onClick={() => handleSave(gif.images.original.url)}>save</button>}
                        </div>
                    )
                })}
            </>
        </div>
    )

}

export default HomePage
