import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer: FC = () => (
  <FooterContainer>
    <span style={{ marginLeft: "15%", fontSize: "1.25rem" }}>
      Questions? <Link to="#"> Call 1-877-742-1335</Link>
    </span>
    <div className="footer-columns">
      <ul>
        <li>
          <Link to="#">FAQ</Link>
        </li>
        <li>
          <Link to="#">Investor Relations</Link>
        </li>
        <li>
          <Link to="#">Ways to Watch</Link>
        </li>
        <li>
          <Link to="#">Corporate Information</Link>
        </li>
        <li>
          <Link to="#">Netflix Originals</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="#">Help Center</Link>
        </li>
        <li>
          <Link to="#">Jobs</Link>
        </li>
        <li>
          <Link to="#">Terms of Use</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="#">Account</Link>
        </li>
        <li>
          <Link to="#">Redeem Gift Cards</Link>
        </li>
        <li>
          <Link to="#">Privacy</Link>
        </li>
        <li>
          <Link to="#">Speed Test</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="#">Media Center</Link>
        </li>
        <li>
          <Link to="#">Buy Gift Cards</Link>
        </li>
        <li>
          <Link to="#">Cookie Preferences</Link>
        </li>
        <li>
          <Link to="#">Legal Notices</Link>
        </li>
      </ul>
    </div>
  </FooterContainer>
)

export default Footer;

const FooterContainer = styled.div`
  background: #000;
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 75%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  /* Language Button */
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8.125rem;
    margin: 2rem 0 1rem 15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
     margin: 2rem 0 0; 
  }

  /* Toggle Language Content */
  .lang-toggle {
    margin-left: 15%;
  }

  .lang-toggle ul {
    padding-inline-start: 0;
    margin-block-start: -1rem;
  }

  .lang-toggle ul li {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
