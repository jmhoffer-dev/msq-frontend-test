import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ListItem from './components/ListItem';
import Header from './components/Header';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        {
          <div className="wrappingContainer">
            <Header/>
            <ListItem/>
          </div>
        }
      </BrowserRouter>
    </div>
  )
}

export default App;
