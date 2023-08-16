import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div className="text-center">
      <NavBar />
      
      <h1 className="text-4xl mb-4">Vishnu Somisetty<br /></h1> {/* Title */}
      <p className="max-w-xl mx-auto text-lg"> {/* Introduction */}
      <br /><br />I love to solve Rubik&apos;s cubes, play basketball, create art, travel the world, love photography and content creating, and lastly learn useful skills that will benefit me in the future.
      </p>
    </div>
  );
};

export default Home;




