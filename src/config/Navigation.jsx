import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser, removeUser } from '../store/slices/userSlice';

const LandingHome = lazy(() => import('../pages/landing/LandingHome'));
const Login = lazy(() => import('components/Login'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));
const Detail = lazy(() => import('../pages/detail/Detail'));

const Navigation = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {

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
                <Suspense fallback={<>Loading...</>}>
                    <Routes>
                        <Route path='/' element={<LandingHome />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<RegisterPage />} />

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
                :
                <Suspense fallback={<>Loading...</>}>
                    <Routes>
                    <Route
                            path='/'
                            exact
                            element={<Home />}
                        />
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
                   
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            }

        </>
    );
}

export default Navigation;