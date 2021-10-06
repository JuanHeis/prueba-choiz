import React, { useState } from 'react';
import Home from './components/general/Home';
import "./styles/main.scss";
import Context from './context/context';
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  const [value, setValue] = useState({ faq: [], medicines: { pills: [], rings: [], patches: [] } })
  return (
    <BrowserRouter>
      <Context.Provider value={{ value, setValue }}>
        <Route exact path="/" component={Home}></Route>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
