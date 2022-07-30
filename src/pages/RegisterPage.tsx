import Header from 'components/header/Header'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../components/SignUp'
import bgimg from '../assets/images/bg.jpg'
import styled from 'styled-components';

const Wrapper = styled.div`
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

const RegisterPage: FC = () => {
    return (
        <Wrapper className='wrapper'>
            <Header />
            <SignUp />
            <p>Already have an account ?  <Link to="/login">Sign in</Link></p>
        </Wrapper>
    )
}

export default RegisterPage