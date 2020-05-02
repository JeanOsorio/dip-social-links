import styled from 'styled-components';

interface AppProps {
  light: boolean;
}

const AppDiv = styled.div<AppProps>`
  background-color: ${(props) => (props.light ? 'white' : 'black')};
`;

export default AppDiv;
