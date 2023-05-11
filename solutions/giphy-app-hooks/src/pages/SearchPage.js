import axios from 'axios'
import { useState } from 'react'

import GifViewer from '../components/GifViewer.js'

const API_KEY = 'APIKEYGOESHERE'

function SearchPage() {
    const [input, setInput] = useState('')
    const [gifs, setGifs] = useState([])

    const search = async (event) => {
        event.preventDefault()

        if (!input) return

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&rating=g`)
        
        setGifs(res.data.data)
    }

    const save = (url) => {
        const saved = JSON.parse(localStorage.getItem('savedGifs')) || []

        saved.push(url)

        localStorage.setItem('savedGifs', JSON.stringify(saved))

        alert('gif saved')
    }
    
    return (
        <div>
            <h2>Search Gifs</h2>
            <form onSubmit={search}>
                <input onChange={(e) => setInput(e.target.value)} />
                <button>search</button>
            </form>
            <GifViewer 
                gifs={gifs}
                buttonAction={save}
                buttonText='Save'
            />
        </div>
    )
}

export default SearchPage