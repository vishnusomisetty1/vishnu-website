import React from 'react';
import NavBar from '../components/NavBar';

const Youtube = () => {
  return (
    <div className="text-center">
      <NavBar />
      <hr className="mt-4 mb-8" /> {/* Line under the navigation bar */}
      <h1 className="text-4xl mb-4">Youtube</h1> {/* Title */}
      <div className="flex flex-col items-center space-y-4"> {/* Centered container for videos */}
        <iframe className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/AIx5nDbBGlo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/az-mWyWfMJg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        {/* You can add more iframe tags with different VIDEO_IDs */}
      </div>
    </div>
  );
};

export default Youtube;
