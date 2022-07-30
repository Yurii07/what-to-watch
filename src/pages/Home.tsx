import { useUserAuth } from 'contexts/UserAuthContext';
import { useAppDispatch } from 'hooks/redux-hooks';
import { FC } from 'react'
import { Route, Navigate, Routes } from "react-router-dom";

import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { getAuth, signOut } from "firebase/auth";
import HeroSlide from 'components/hero-slide/HeroSlide';
import Header from 'components/header/Header';

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
            // An error happened.
            console.log(error, 'error');

        });
    }

    return (
        <div>Home
            {/* <Header /> */}
            <HeroSlide />
            <div>Welcome
                <button onClick={signOutHandler}>log out from
                    {user?.email}
                </button>
            </div>
        </div>
    )
}

export default Home