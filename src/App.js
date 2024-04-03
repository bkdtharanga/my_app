import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;