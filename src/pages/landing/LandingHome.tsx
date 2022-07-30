import { FC } from 'react';
import Header from './Header/Header'
import Footer from 'components/footer/Footer';
// import Header from 'components/header/Header';
import styled from 'styled-components';
import bgimg from '../../assets/images/bg.jpg'

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

const LandingHome: FC = () => {
    return (
        <Wrapper className='wrapper'>
            <Header />
            <Footer />
        </Wrapper>
    )
}
export default LandingHome;