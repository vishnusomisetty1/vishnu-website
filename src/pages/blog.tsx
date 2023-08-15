import React from 'react';
import NavBar from './NavBar'; 

const Blog = () => {
  return (
    <div className="text-center">
      <NavBar />
      <hr className="mt-4 mb-8" /> {/* Line under the navigation bar */}
      <h1 className="text-4xl mb-4">Blog</h1> {/* Title */}
      <button onClick={() => window.location.href='/blog-post'}>Read My Essay</button>
    </div>
  );
};

export default Blog;


