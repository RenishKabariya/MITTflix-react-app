import React from 'react';
import * as MovieAPI from './MovieAPI';
import Movie from "./Movie";

class MyList extends React.Component {
  state = {
    selectedMovies:[],
  }

  genres = [];

  updateMyList = (movie) => {
    if(movie.my_list) {
      MovieAPI.removeFromList(movie)
      .then(()=>{
        MovieAPI.getAll()
        .then((movies) => {
          const selectedMovies = movies.filter(movie => movie.my_list == true);
          this.setState({selectedMovies});
        })
      });
    }
    }

  componentDidMount() {
    
    MovieAPI.genres()
    .then(genresList => {
      this.genres = genresList;
    });

    MovieAPI.getAll()
    .then((movies) => {
      const selectedMovies = movies.filter(movie => movie.my_list == true);
      this.setState({selectedMovies});
    })
  }

  render = () => {
    return (
      <>
        <div className="title">
          <h1>My List</h1>
          <div className="titles-wrapper">
            {this.state.selectedMovies
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

export default MyList;

