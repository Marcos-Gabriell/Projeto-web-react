import React from 'react';
import Navbar from './Navbar'; 
import ImageContainer from './ImageContainer';
import MySection from './MySection';


const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <MySection />
      {/* Restante do conteúdo da página Home */}
    </div>
  );
}

export default Home;
