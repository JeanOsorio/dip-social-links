import styled from 'styled-components';

interface SocialButtonProps {
  light: boolean;
}

const SocialButton = styled.button<SocialButtonProps>`
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
  align-items: center;

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

export default SocialButton;
