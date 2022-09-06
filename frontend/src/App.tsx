import React from 'react';
import Home from './pages/Home';
import { AppProvider } from './contexts/index';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Home/>
      </AppProvider>
    </div>
  );
}

export default App;
