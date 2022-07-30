
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./form/Form"
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/redux-hooks';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch(console.error);
    }

    return (
        <Form title="register" handleClick={handleRegister} />
    )
}

export { SignUp }