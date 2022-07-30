import { FC } from 'react';
import SectionPitch from '../Pitch/Pitch'
import bgimg from '../../../assets/images/bg.jpg'
import styled from 'styled-components';
import Header from 'components/header/Header';

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

const header = () => {
  return (
    <Wrapper>
      <Header />

      <SectionPitch />
    </Wrapper>
  )
}

export default header;