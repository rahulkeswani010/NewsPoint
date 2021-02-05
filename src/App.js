import './App.css';
import React from 'react';
import Footer from './footer';
import Header from './Header';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <Header/>
        <Dashboard/>
        <Footer />
    </div>
  );
}

export default App;
