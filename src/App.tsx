import React, { useState } from 'react';
import ReactGA from 'react-ga';
import {
  AppDiv,
  SocialButton,
  SocialContainer,
  FloatButton,
  IconButton,
} from './commons/components';
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
