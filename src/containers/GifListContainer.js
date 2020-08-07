import React from 'react';
import GifList from '../components/GifList' 
import GifSearch from '../components/GifSearch' 

class GifListContainer extends React.Component {
    state = {
        gifs: [] 
    } 

    componentDidMount() {
        this.fetchGIFs() 
    }

    fetchGIFs = (query = "virat kohli", limit = 10) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=${limit}`) 
           .then(res => res.json()) 
           .then(({data}) => {
               this.setState({gifs: data.map(gif => ({url: gif.images.original.url}))}) 
        })  
    } 

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} /> 
                <GifList gifs={this.state.gifs} /> 
            </div>
        )
    }  
} 

export default GifListContainer; 