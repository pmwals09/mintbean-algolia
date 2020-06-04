import React from 'react';

import SearchContainer from "./containers/SearchContainer"
import HeaderBar from "./components/HeaderBar"

function App() {
  return (
    <div>
      <HeaderBar />
      <div className="grid-container">
        <SearchContainer />
      </div>
    </div>
  );
}

export default App;
