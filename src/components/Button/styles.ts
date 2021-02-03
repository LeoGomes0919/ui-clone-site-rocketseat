import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  a {
    background-color: #8257e6;
    color: #fff;
    padding: 12px 32px;
    text-decoration: none;
    transition: 0.5s background-color;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;

    &:hover {
      background-color: ${lighten(0.1, '#8257e6')};
    }
  }
`;
