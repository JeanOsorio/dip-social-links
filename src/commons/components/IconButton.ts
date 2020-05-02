import styled from 'styled-components';

interface IconButtonProps {
  light: boolean;
  src: string;
}

const IconButton = styled.img<IconButtonProps>`
  width: 1.125em;
  font-size: 1.4em;
`;

export default IconButton;
