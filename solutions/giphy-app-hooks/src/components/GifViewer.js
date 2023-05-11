function GifViewer({ gifs, buttonAction, buttonText }) {

    return (
        <div id='gifs-container'>
            {gifs.map((gif, index) => {
                return (
                    <div key={index} className='img-container'>
                        <img src={buttonText === 'Save' ? gif.images.original.url : gif} />
                        <button onClick={() => buttonAction(buttonText === 'Save' ? gif.images.original.url : index )}>{buttonText}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default GifViewer