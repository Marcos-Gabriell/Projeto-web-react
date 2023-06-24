import React from 'react';
import Navbar from './Navbar'; 
import ImageContainer from './ImageContainer';
import MySection from './MySection';
import MySection2 from './MySection2';
import MySection3 from './MySection3';



const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <MySection />
      <MySection2 />
      <MySection3 />
      {/* Restante do conteúdo da página Home */}
    </div>
  );
}

export default Home;
