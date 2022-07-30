import { FC } from 'react';

import Header from 'components/header/Header';
import SectionPitch from './Pitch/Pitch';
import Footer from 'components/footer/Footer';

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
        <>
            <Wrapper className='wrapper'>
                <Header />
                <SectionPitch />
            </Wrapper>
            <Footer />
        </>
    )
}
export default LandingHome;