import React from 'react';
import * as MovieAPI from './MovieAPI';
import Movie from "../src/Movie";

class Browse extends React.Component {
  state = {
    movies:[],
  }

  genres = [];

  updateMyList = (movie) => {
    if(movie.my_list) {
      MovieAPI.removeFromList(movie)
      .then(()=>{
        MovieAPI.getAll()
        .then((movies) => {
          this.setState({movies});
        })
      });
    }else {
      MovieAPI.addToList(movie)
      .then(()=>{
        MovieAPI.getAll()
        .then((movies) => {
          this.setState({movies});
        })
      });;
    }
  }

  componentDidMount() {
    MovieAPI.genres()
    .then(genresList => {
      this.genres = genresList;
    });

    MovieAPI.getAll()
    .then((movies) => {
      this.setState({movies});
    })
  }

  render = () => {
    return (
      <>
        <div className="title">
          <h1>Movies</h1>
          <div className="titles-wrapper">
            {this.state.movies
              .map(movie=> 
                <Movie 
                  updateMyList={this.updateMyList} 
                  movie={movie} 
                  key={movie.id} 
                />
              )
            }
          </div>
        </div>    
      </>
    );
  }
}

export default Browse;

