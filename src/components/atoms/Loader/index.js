import React from 'react';
import loadingGif from '../../../assets/animations/loading.gif';

function Loader() {
  return <img src={loadingGif} alt="Loading" width={24} height={24} />;
}

export default Loader;