import { FC } from 'react'
import { useUserAuth } from 'contexts/UserAuthContext';
import { useAppDispatch } from 'hooks/redux-hooks';
import {  Link } from "react-router-dom";

import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { getAuth, signOut } from "firebase/auth";
import HeroSlide from 'components/hero-slide/HeroSlide';
import Header from 'components/header/Header';
import { OutlineButton } from 'components/button/Button';
import MovieList from 'components/movie-list/Movie-list';

import { category, movieType, tvType } from '../api/tmdbApi';


const Home: FC = () => {
    // const { isAuth, email } = useAuth();
    const { user } = useUserAuth();
    // console.log('🔥 email', user.email);
    const dispatch = useAppDispatch();

    // return isAuth ? (
    // <div>Welcome
    //     <button onClick={() => dispatch(removeUser())}>log out from {user.email} </button>
    // </div>
    // ) : (
    //     <Routes>
    //         <Route path="/" element={<Navigate replace to="/login" />} />
    //     </Routes>
    // )
    const auth = getAuth();
    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
            console.log(error, 'error');
        });
    }

    return (
        <>
            <Header />
            <HeroSlide />
            <div className='container'>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>

            </div>
        </>
    )
}

export default Home