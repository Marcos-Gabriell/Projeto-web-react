import React from 'react';
import Navbar from './Navbar'; 
import ImageContainer from './ImageContainer';
import MySection from './MySection';
import MySection2 from './MySection2';
import MySection3 from './MySection3';
import MySection4 from './MySection4';
import MySection5 from './MySection5';
import SeparatorLine from './SeparatorLine';
import MyBlog from './MyBlog';


const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <MySection />
      <MySection2 />
      <MySection3 />
      <MySection4 />
      <MySection5 />
      <SeparatorLine />
      <MyBlog />
      {/* Restante do conteúdo da página Home */}
    </div>
  );
}

export default Home;
