import React, { useState } from 'react';
import Home from './components/general/Home';
import "./styles/main.scss";
import Context from './context/context';

function App() {
  const [value, setValue] = useState({ faq: [], medicines: { pills: [], rings: [], patches: [] } })
  return (
    <Context.Provider value={{ value, setValue }}>
      <Home></Home>
    </Context.Provider>
  );
}

export default App;
