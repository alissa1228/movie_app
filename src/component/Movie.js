import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({year,title,summary,poster,genres}){
    return (//className -> 리액트에서는 class 대신 이걸 쓴다. 
        <div className="movie">
            <Link to={{
                pathname : '/movie-detail',
                state : {year, title, genres,summary, poster}
            }}>
            <img src={poster} alt={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre,index)=>{
                        return <li key={index} className="movie_genres">{genre}</li>;
                    })}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>    
            </div>
            </Link>         
        </div>
    );
}

Movie.propTypes = { 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired, //poster에는 이미지 주소가 저장.
    genres : PropTypes.arrayOf(PropTypes.string).isRequired 
};
//id : 자료형이 number, 반드시 있어야 하니까 isRequired로 작성
export default Movie;