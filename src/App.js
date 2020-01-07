import React, { useState } from 'react';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import NavBar from './NabBar';
import DetailsEroor from './Details';

const App = () => {
  const themeHook = useState('peru');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />

          <Router>
            <SearchParams path="/" />
            <DetailsEroor path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
