import React from 'react';
import './App.css';
import Home from './Home';
import Browse from './Browse';
import MyList from './MyList';
import {Route,Switch,Link} from 'react-router-dom';

class App extends React.Component {
  render = () => 
      <>
        <header className="header">
          <Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/myList">My List</Link></li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
        </header>

        <div className="titleList">
          <Route path="/" exact component={Home} />
          <Route path="/myList" component={MyList} />
          <Route path="/Browse" component={Browse} />

        </div>
      </>
}


export default App;
