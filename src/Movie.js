import React from 'react';

const Movie = (props) => {
    return (<div className="movie">
    <img
    src={props.movie.backdrop_path}
    />
    <div className="overlay">
        <div className="title">{props.movie.title}</div>
        <div className="rating">{props.movie.vote_average}/10</div>
        <div className="plot">{props.movie.overview}</div>
        <div data-toggled={props.movie.my_list} onClick={()=>(props.updateMyList(props.movie))} className="listToggle">
            <div>
                <i className="fa fa-fw fa-plus"></i>
                <i className="fa fa-fw fa-check"></i>      
            </div>
        </div>
    </div>
</div>)
}

export default Movie;   