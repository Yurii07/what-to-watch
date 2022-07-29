import { useAppDispatch } from 'hooks/redux-hooks';
import { FC } from 'react'
import { Route, Navigate, Routes } from "react-router-dom";

import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';

const HomePage: FC = () => {
    const { isAuth, email } = useAuth();
    const dispatch = useAppDispatch();

    return isAuth ? (
        <div>Welcome
            <button onClick={() => dispatch(removeUser())}>log out from {email} </button>
        </div>
    ) : (
        <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    )
}

export default HomePage