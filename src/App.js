import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Todo from './pages/todo/todo';

function App() {
  return (
    <Router>
      <div className="col-8"  style= {{backgroungColor: "#FF0000"}}>
      <div>
      {/* nav-pills est une specialisation de nav */}
      {/* nav-fill: repartition  egales des intitulés sur la pages */}
        <ul className=" nav nav-pills nav-fill"> 
          <li className="nav-item">
            {/* nav-link:pour la navigation l'ajout de active permet l'enrobage avec fond en couleur */}
            <Link to="/" className="nav-link active">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link  className ="nav-link" to="/todo">Liste des tâches</Link>
           
          </li>
        </ul>
      </div>
      </div>
      <Switch>
      <Route  exact path="/" component={Home} />
        <Route exact  path="/todo" component={Todo} />
      </Switch>

    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
