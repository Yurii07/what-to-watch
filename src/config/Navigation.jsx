import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import { useAuth } from '../hooks/use-auth';
import LandingHome from '../pages/landing/LandingHome'
import { Login } from 'components/Login';
import RegisterPage from '../pages/RegisterPage';
// import { useUserAuth } from "../contexts/UserAuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from './features/userSlice';
// import { onAuthStateChanged } from './firebase';
import { setUser, removeUser } from '../store/slices/userSlice';


const Navigation = () => {
    // const { isAuth, email, token, id } = useAuth();
    // console.log('🔥 isAuth', isAuth);
    const user = useSelector(setUser);

    const dispatch = useDispatch();
    const { isAuth } = useAuth();
    // const auth = getAuth();
    // console.log('🔥getAuth', auth);
    // const { isAuth, email } = useAuth();

    // const user = auth.currentUser;

    // const { user } = useUserAuth();
    // console.log('🔥  useruseruseruser,', user,);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             const uid = user.uid;
    //             // ...
    //             console.log(uid, 'uid')
    //         } else {
    // const user = useSelector(selectUser);



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
                        // displayName: userAuth.displayName,
                        // photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <>
        
            {!isAuth ? <>
                <Routes>
                    <Route
                        path='/'
                        exact
                        element={<LandingHome />}
                    />
                    <Route
                        path='/login'
                        exact
                        element={<Login />}
                    />
                    <Route
                        path='/register'
                        exact
                        element={<RegisterPage />}
                    />
                    {/* <Route path="/register" element={<RegisterPage />} /> */}
                </Routes>

            </> : <>
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


                    {/* <Route path="/" element={<Home />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} /> */}
                </Routes>
            </>}

        </>
    );
}

export default Navigation;