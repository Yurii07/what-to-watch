import React, { useState, useEffect, useRef } from 'react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';


const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            console.log(movieType.popular, 'movieType.popular');
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                console.log(response);
                setMovieItems(response.results.slice(1, 4));
            } catch (error) {
                console.log(error, 'error');
            }

        }
        getMovies();
    }, []);

    return (
        <div className='hero-slide'>HeroSlide</div>
    )
}

export default HeroSlide