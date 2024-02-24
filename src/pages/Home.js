import React from 'react';

import Welcome from '../components/home/welcome';
import HowToFind from '../components/home/howtofind';
import StartNow from '../components/home/startnow';


function Home() {
    return (
        <>
        <Welcome />
        <HowToFind />
        <StartNow />
        </>
    );
};

export default Home;