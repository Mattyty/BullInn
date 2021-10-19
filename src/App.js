
import {BrowserRouter, HashRouter} from 'react-router-dom';
import Main from './components/MainComponent'
import './App.css';
import React from "react";





function App() {
  return (
      <HashRouter>
          <Main />
      </HashRouter>
  );
}

export default App;
