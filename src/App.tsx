import React, { useState } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {
  MoonIcon,
  SunIcon,
  logo,
  logoBlack,
  instagramIcon,
  instagramBlackIcon,
  facebookIcon,
  facebookBlackIcon,
  youtubeIcon,
  youtubeBlackIcon,
  githubIcon,
  githubBlackIcon,
  blogIcon,
  blogBlackIcon,
} from './Icons';
import './App.css';

interface AppProps {
  light: boolean;
}

interface IconButtonProps {
  light: boolean;
  src: string;
}

const AppDiv = styled.div<AppProps>`
  background-color: ${(props) => (props.light ? 'white' : 'black')};
`;

const IconButton = styled.img<IconButtonProps>`
  width: 1.125em;
  font-size: 1.4em;
`;

const FloatButton = styled.button`
  position: fixed;
  width: 30px;
  height: 30px;
  bottom: 40px;
  right: 40px;
  background-color: #fff;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 5px 2px 5px 0px rgba(0, 0, 0, 0.23);
  touch-action: none;
`;

const SocialContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const SocialButton = styled.button<AppProps>`
  width: 120px;
  height: 120px;
  display: flex;
  font-size: 1em;
  margin-bottom: 20px;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${(props) => (props.light ? 'black' : 'white')};
  color: ${(props) => (props.light ? 'white' : 'black')};
  border-radius: 60px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.5);
  text-align: center;
  justify-content: center;
  touch-action: none;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 20%,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 30%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 10%,
        ${(props) => (props.light ? 'black' : 'white')} 15%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      );
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        transparent 10%,
        ${(props) => (props.light ? 'black' : 'white')} 15%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      ),
      radial-gradient(
        circle,
        ${(props) => (props.light ? 'black' : 'white')} 20%,
        transparent 20%
      );
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
      20% 20%;
    //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken(
      ${(props) => (props.light ? 'black' : 'white')},
      5%
    );
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.5);
  }
`;

const defaultState = {
  currentIcon: MoonIcon,
  isLight: true,
};

function initializeReactGA() {
  ReactGA.pageview('/');
}

function App() {
  initializeReactGA();
  const [elements, setElements] = useState(defaultState);
  const turnLight = () => {
    setElements({
      ...elements,
      currentIcon: elements.isLight ? SunIcon : MoonIcon,
      isLight: !elements.isLight,
    });
  };

  const handleClick = (e) => {
    const element = e.target.dataset.name || e.target.name;
    ReactGA.event({
      category: 'Social',
      action: element,
    });
    switch (element) {
      case 'youtube':
        window.open('https://www.youtube.com/channel/UC9Od_aN6wKrM0HpkOHNXJEQ');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/developerinpixels');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/developerinpixels');
        break;
      case 'github':
        window.open('https://github.com/JeanOsorio');
        break;
      case 'blog':
        break;
    }
  };

  return (
    <AppDiv light={elements.isLight}>
      <header className="App-header">
        {elements.isLight && <img src={logo} className="App-logo" alt="logo" />}
        {!elements.isLight && (
          <img src={logoBlack} className="App-logo" alt="logo" />
        )}
        <SocialContainer>
          <SocialButton
            light={elements.isLight}
            onClick={handleClick}
            name="youtube"
          >
            <IconButton
              src={elements.isLight ? youtubeIcon : youtubeBlackIcon}
              light={elements.isLight}
              data-name="youtube"
            />
          </SocialButton>
          <SocialButton
            light={elements.isLight}
            onClick={handleClick}
            name="instagram"
          >
            <IconButton
              src={elements.isLight ? instagramIcon : instagramBlackIcon}
              light={elements.isLight}
              data-name="instagram"
            />
          </SocialButton>
          <SocialButton
            light={elements.isLight}
            onClick={handleClick}
            name="facebook"
          >
            <IconButton
              src={elements.isLight ? facebookIcon : facebookBlackIcon}
              light={elements.isLight}
              data-name="facebook"
            />
          </SocialButton>
          <SocialButton
            light={elements.isLight}
            onClick={handleClick}
            name="github"
          >
            <IconButton
              src={elements.isLight ? githubIcon : githubBlackIcon}
              light={elements.isLight}
              data-name="github"
            />
          </SocialButton>
          <SocialButton
            light={elements.isLight}
            onClick={handleClick}
            name="blog"
          >
            <IconButton
              src={elements.isLight ? blogIcon : blogBlackIcon}
              light={elements.isLight}
              data-name="blog"
            />
          </SocialButton>
        </SocialContainer>
      </header>
      <FloatButton onClick={turnLight}>{elements.currentIcon}</FloatButton>
    </AppDiv>
  );
}

export default App;
