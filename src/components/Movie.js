import React, { Component } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Spinner from './Spinner';

class Movie extends Component {
    state = {
        videos: [],
        video: [],
        searchItem: []
    } 


    TypeSearch = (e) => {
        this.setState({ searchItem: e.target.value })
    }

    componentDidMount = () => {
        const api = "https://api.themoviedb.org/3/discover/movie?api_key=fa1875db1f08a7d5f9887db721a0a94e&with_genres=28"
        axios.get(api)
            .then(res => {
                this.setState({ videos: res.data.results });
                console.log(this.state.videos)
            })
            .catch(err => {
            console.log("There is an error")
            })
        
        // const api2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=fa1875db1f08a7d5f9887db721a0a94e&language=en-US"
        // axios.get(api)
        //     .then(res => {
        //         this.setState({ videos: res.data.results });
        //         console.log(this.state.videos)
        //     })
        //     .catch(err => {
        //         console.log("There is an error")
        //     })
    }

    //

    render() { 
        const Action = this.state.videos
        const baseUrl = "https://image.tmdb.org/t/p/original"

        if (this.state.videos.length === 0 || this.state.videos === undefined) {
           return <Spinner/>
        } else {
            return (
                <>
                    <div className='search'>
                        <input type="text" placeholder='Search your favourite Movie' onChange={this.TypeSearch} />
                    </div>
                    <div className="movies">
                        {Action.filter(res => res.title.toLowerCase().includes(this.state.searchItem)).map(trend => {
                            return (
                                <div key={trend.id} className="movies_items">
                                    <div class="box">
                                        <div class="imgBox">

                                            <Popup
                                                trigger={
                                                    <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                }
                                                modal
                                                nested
                                            >
                                                {close => (
                                                    <div className="modal">

                                                        <button className="close" onClick={close}>
                                                            &times;
                                                        </button>
                                                        <div className="header">
                                                            <h3 className='movie_header'>{trend.title || trend.original_name}</h3>
                                                        </div>
                                                        <div className="content">
                                                            {' '}
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                            <div className="movie_details">
                                                                <code className="star">
                                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                                </code>
                                                                <p>{trend.overview}</p>
                                                                <p>Rating : {trend.vote_average * 10} % </p>
                                                                <span>Release Date : {trend.release_date}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Popup>
                                        </div>
                                        <h4>{trend.title || trend.original_name}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            );
        }

    }
}
                
 
export default Movie;


