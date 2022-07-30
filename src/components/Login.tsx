
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/redux-hooks';
import { Form } from "./form/Form";
import styled from 'styled-components';
import bgimg from '../assets/images/bg.jpg'


const Header = styled.header`
    background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.75), 
                rgba(0, 0, 0, 0.09)
                ),
                url(${bgimg});
                height: 100vh;
    @media (max-width: 1000px) {
      height: 90vh;
    }
`;

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate('/')
            })
            .catch(() => alert('invalid user'));
    }
    return (
        <>
            <Header>
                {/* <Nav /> */}
                <Form title="sign in" handleClick={handleLogin} />
            </Header>
        </>
    )
}

export { Login }