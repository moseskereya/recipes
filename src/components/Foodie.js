import React, { Component } from 'react'
import { recipes } from "../recipes"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Fodie extends Component {
    state = {
        foods: [],
        recipe: recipes
    }

    search = (e) => {
        this.setState({foods: e.target.value});
    }

    render() { 
        const allrecipes = this.state.recipe;

        return ( 
            <div>
            
                <div className='search'>
                    <input type="text" onChange={this.search} />
                </div>
                <div className="movies">
                    {allrecipes.filter(res => res.Name.toLowerCase().includes(this.state.foods)).map(res => {
                        return (
                            <div key={res.id} className="movies_items">
                                <div class="box">
                                    <div class="imgBox">
                                        <Popup
                                            trigger={
                                            <img src={res.Imgurl} alt="movie_img" />
                                            }
                                            modal
                                            nested
                                        >
                                            {close => (
                                                <div className="modal">
                                                    <button className="close" onClick={close}>
                                                        &times;
                                                    </button>
                                                    <div className="header">{res.Name}</div>
                                                    <div className="content">
                                                        {' '}
                                                        {res.ShortDescription}
                                                        <br />
                                                        <img src={res.Imgurl} alt="movie_img" />
                                                        <br />
                                                        {res.LongDescription}
                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                </div>
                                <h4>{res.Name.toLocaleLowerCase()}</h4>
                                <div className="movie_details">
                                    <code className="star">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </code>
                                    <span>Price : {res.Price.toUpperCase()}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
         );
    }
}
 
export default Fodie;