import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import NotFound from '../components/NotFound/NotFound'
import Detail from '../pages/detail/Detail';
import { useAuth } from '../hooks/use-auth';
import LandingHome from '../pages/landing/LandingHome'
import { Login } from 'components/Login';
import RegisterPage from '../pages/RegisterPage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../store/slices/userSlice';


const Navigation = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();

    // check at page load if a user is authenticated
    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                // user is logged in, send the user's details to redux, store the current user in the state

                dispatch(
                    setUser({
                        email: userAuth.email,
                        id: userAuth.id,
                        token: userAuth.token,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <>
            {!isAuth ?
                <>
                    <Routes>
                        <Route path='/' element={<LandingHome />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<RegisterPage />} />
                
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </> :
                <>
                    <Routes>

                        <Route
                            path='/:category/search/:keyword'
                            element={<Catalog />}
                        />
                        <Route
                            path='/:category/:id'
                            element={<Detail />}
                        />
                        <Route
                            path='/:category'
                            element={<Catalog />}
                        />
                        <Route
                            path='/'
                            exact
                            element={<Home />}
                        />
                               <Route path='*' element={<NotFound />} />
                    </Routes>
                </>
            }

        </>
    );
}

export default Navigation;