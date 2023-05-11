import { useState, useEffect, useRef } from 'react'

import GifViewer from '../components/GifViewer'

function SavedPage() {
    const [gifs, setGifs] = useState(JSON.parse(localStorage.getItem('savedGifs')) || [])

    const isInitialMount = useRef(true)

    useEffect(() => {
        if(isInitialMount.current) {
            console.log(gifs)
            isInitialMount.current = false
        } else {
            localStorage.setItem('savedGifs', JSON.stringify(gifs))
        }
    }, [gifs])
    
    const remove = (index) => {
        const savedGifs = [...gifs]
        
        savedGifs.splice(index, 1)

        setGifs(savedGifs)
    }

    return (
        <div>
            <h2>Saved Page</h2>

            <GifViewer 
                gifs={gifs}
                buttonAction={remove}
                buttonText='Remove'
            />
        </div>
    )
}

export default SavedPage