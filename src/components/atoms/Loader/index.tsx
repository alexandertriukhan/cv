import React from 'react';

import loadingGif from '../../../assets/animations/loading.gif';

/**
 * A basic loading animation component
 */

const Loader = () => <img src={loadingGif} alt="Loading" width={24} height={24} />;

export default Loader;
