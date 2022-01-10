import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pokemons from './pages/Pokemons'
import Types from './pages/Types'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/pokemons" element={<Pokemons/>} />
          <Route exact path="/types" element={<Types/>} />
        </Routes>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
