import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { store } from '../../Redux/store' //this is bad - dont not import the whole store insie a single component.
import { getAllMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'

//-------------------Redux Trial--------------------//

store.dispatch(getAllMovies());

console.log(store.getState());

setTimeout(() => {console.log(store.getState())},1000);

//--------------------------------------------------//

//This is a conatiner that maps over film list (accepted as props) and returns all the film cards.
//In the future the 'film card image' could do with being exported as a different component to tidy this up. 
const FilmList = (props) => {

    //FUCNTION THAT SORTS THE FILMS ARRAY READY FOR RENDERING.
    const sortFilms = (catagory) => {

        const films = props.films;

        if (catagory === 'release_date') {
            //This messy line is converting the release date string into a number that can be sorted in the .sort() function.
            films.sort(function(a, b) {return Number(b.release_date.split('')[0]+b.release_date.split('')[1]+b.release_date.split('')[2]+b.release_date.split('')[3]) - Number(a.release_date.split('')[0]+a.release_date.split('')[1]+a.release_date.split('')[2]+a.release_date.split('')[3])});
        } else {
            films.sort(function(a, b) {return b[catagory] - a[catagory]});
        }

        return films;
    
    };

    //fcuntion that reduces the film array ready for rendering

    const filmReducerByDisplayGenre = (films) => {
        return films.filter((input)=>{
            return (input.genres.includes(props.displayGenre) || props.displayGenre === 'all')
        })
    }

    //creates a array of films to render

    const filmsToRender = filmReducerByDisplayGenre(sortFilms(props.sortCatagory));

    //creates an array of JSX components for rendering
    
    const renderingArray = filmsToRender.map(input => {
        const idCount=input.id
        return (
            <article key={input.id} id={idCount} className='filmCard'>
                <FilmCard
                    id={input.id}
                    pictureURL={input.poster_path}
                    descriptionShort={input.tagline}
                    name={input.title}
                    year={input.release_date}
                    genres={input.genres}
                    overview={input.overview}
                    runtime={input.runtime}
                    toggleShowFilmBody={props.toggleShowFilmBody}
                />
            </article>
        )
    });

    return (
        <section className='filmList'>
            {renderingArray}
        </section>
    )
}



FilmList.propTypes = {
    films: PropTypes.array.isRequired,
    displayGenre: PropTypes.string.isRequired,
    toggleShowFilmBody: PropTypes.func.isRequired,
    sortCatagory: PropTypes.any
}

//export default connect(/*has two funcs inside*/)(FilmList);
/* connect func also listens to chnages in the store for the specific props specfied*/

export default connect(null, { getAllMovies })(FilmList)