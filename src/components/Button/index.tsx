import React, { LinkHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = LinkHTMLAttributes<HTMLLinkElement>;

const Button: React.FC<ButtonProps> = ({ children }) => (
  <Container>
    <a href="http://localhost:3000">{children}</a>
  </Container>
);

export default Button;
