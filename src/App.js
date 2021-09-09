import axios from 'axios';

import { useEffect, useState } from 'react';

import './App.css';
import HeroCarousel from './common/hero-carousel';
import MasonryGrid from './common/masonry-grid';
import SpHeader from './common/sp-header';
import SpFooter from './common/sp-footer';

function App() {
    const [data, setData] = useState(null);
    useEffect(
        () => {
            axios.get('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge')
            .then(
                (res) => { setData(res); console.log("res", res); },
                (err) => console.log("Error: ", err)
            );
        },
        []
    );

    return (
        <div className="App">
            <SpHeader />
            <HeroCarousel slides={data?.data?.hero_slides} />
            <MasonryGrid items={data?.data?.cards} />
            <SpFooter />
        </div>
    );
}

export default App;
