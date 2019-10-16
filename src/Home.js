import React from 'react';
import * as MovieAPI from './MovieAPI';
import Movie from "../src/Movie";

class Home extends React.Component {
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
      {this.genres.map(genre => {
        return (
            <div className="title" key={genre.id}>
              <h1>{genre.name}</h1>
              <div className="titles-wrapper">
                {this.state.movies.filter(movie=>movie.genres.includes(genre.name))
                  .map(movie=> 
                    <Movie 
                      updateMyList={this.updateMyList} 
                      movie={movie} 
                      key={movie.id} 
                    />
                  )}
              </div>
            </div>      
        )
      })}
      </>
    );
  }
}

export default Home;

