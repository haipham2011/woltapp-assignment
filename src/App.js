import React from 'react';
import PagesController from './components/pagecontroller';
import Restaurants from './components/restaurants';
import NavBar from './components/navbar';
import Suggestions from './components/suggestions';
import Footer from './components/footer';


const App = () => {

  return (
    <div>
        <NavBar />
        <Suggestions />
        <Restaurants />
        <PagesController />
        <Footer />
    </div>
  );
}

export default App;
