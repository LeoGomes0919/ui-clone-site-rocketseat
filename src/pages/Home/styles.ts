import styled from 'styled-components';
import { lighten } from 'polished';

import arrowDown from '../../assets/arrow-down.svg';
import spoilerAlert from '../../assets/spoiler.svg';

// HEADER
export const Header = styled.header`
  padding: 32px 0px 0px;
  margin: 0px 24px;
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const LogoLink = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  align-items: center;
`;

export const Link = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #737380;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActionLogon = styled.div`
  a {
    font-size: 14px;
  }
`;

// MAIN
export const Main = styled.main`
  padding: 0px 24px;
`;

export const SectionSlogan = styled.section`
  padding: 120px 0px 0px;
  max-width: 615px;
  width: 100%;
  margin: 0 auto;

  header {
    h1 {
      font-size: 64px;
      color: #e1e1e6;
      text-align: center;
      font-weight: 700;
      line-height: 1;
      width: 100%;

      span {
        color: #04d361;
      }
    }
  }
`;

export const Aside = styled.aside`
  max-width: 665px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 0px 120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    color: #a8a8b3;
    text-align: right;
    flex-basis: 320px;
    line-height: 156%;
  }

  a {
    font-size: 16px;
    flex-basis: 345px;
    width: 100%;
    height: 64px;
    line-height: 26px;
  }
`;

export const SectionBanner = styled.section`
  max-width: 1120px;
  width: 100%;
  max-height: 507px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

export const SectionContent = styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(-25%);
    width: 100%;
    height: 100%;
    z-index: -1;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #8257e6 0%,
      rgba(18, 18, 20, 0) 100%
    );
    opacity: 0.4;
  }

  img {
    width: 100%;
  }
`;

export const SectionCompanies = styled.section`
  margin: 160px auto 0 auto;
  max-width: 876px;
  width: 100%;

  header h1 {
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    max-width: 400px;
    width: 100%;
    color: #e1e1e6;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Companies = styled.div`
  padding-top: 80px;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-column-gap: 64px;
  align-items: center;
`;

export const SectionConections = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 240px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    order: 1;
    max-width: 460px;
    width: 100%;

    div {
      width: 40px;
      height: 2px;
      background: #04d361;
    }

    h1 {
      font-size: 54px;
      color: #e1e1e6;
      line-height: 107%;
      font-weight: 700;
      width: 100%;
      padding: 40px 0px 24px 0px;
    }

    p {
      font-size: 18px;
      line-height: 167%;
      color: #a8a8b3;
    }
  }
`;

export const SectionContentConections = styled.div`
  position: relative;
  max-width: 580px;
  width: 100%;
  height: 100%;
  order: 0;

  &::before {
    content: '';
    position: absolute;
    top: -64px;
    left: 0;
    width: 100%;
    height: 48px;
    background: url(${arrowDown}) center no-repeat;
  }

  img {
    max-width: 580px;
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -64px;
    left: 0;
    width: 100%;
    height: 48px;
    transform: rotate(180deg);
    background: url(${arrowDown}) center no-repeat;
  }
`;

export const SectionRewards = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 240px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    max-width: 460px;
    width: 100%;

    div {
      width: 40px;
      height: 2px;
      background: #04d361;
    }

    h1 {
      font-size: 54px;
      line-height: 107%;
      font-weight: 700;
      color: #e1e1e6;
      width: 100%;
      padding: 40px 0px 24px 0px;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      line-height: 167%;
    }
  }
`;

export const SectionRewardsContent = styled.div`
  max-width: 580px;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const SectionCommunity = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 240px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  header {
    max-width: 560px;
    width: 100%;
    order: 1;

    div {
      width: 40px;
      height: 2px;
      background: #04d361;
    }

    h1 {
      font-size: 54px;
      line-height: 107%;
      font-weight: 700;
      color: #e1e1e6;
      width: 100%;
      padding: 40px 0px 24px 0px;
    }

    p {
      max-width: 448px;
      width: 100%;
      font-size: 18px;
      color: #a8a8b3;
      line-height: 167%;
    }
  }
`;

export const SectionCommunityContent = styled.div`
  max-width: 472px;
  width: 100%;
  order: 0;

  img {
    width: 100%;
  }
`;

export const SectionAlertSpoiler = styled.section`
  margin: 240px auto 0 auto;
  padding-top: 50px;
  background-size: contain;
  background: url(${spoilerAlert}) top center no-repeat;
  position: relative;
  width: 100%;
  height: 100%;

  header {
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100px;
      height: 100px;
      transform: translateY(-50%);
    }

    h1 {
      font-size: 54px;
      line-height: 58px;
      text-align: center;
      color: #e1e1e6;
      font-weight: 700;
      padding-top: 40px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
      max-width: 510px;
      width: 100%;
      margin: 0 auto;
      padding-top: 24px;
      color: #a8a8b3;
      text-align: center;
    }
  }

  strong {
    font-size: 14px;
    line-height: 24px;
    padding-top: 40px;
    text-align: center;
    display: block;
    color: #fd951f;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const SectionEvolution = styled.section`
  margin: 240px auto 240px auto;
  max-width: 1120px;
  width: 100%;

  header {
    h1 {
      font-size: 54px;
      font-weight: 700;
      line-height: 117%;
      color: #e1e1e6;
      max-width: 480px;
      width: 100%;
    }

    p {
      max-width: 361px;
      width: 100%;
      color: #a8a8b3;
      font-weight: normal;
      font-size: 18px;
      line-height: 156%;
      margin-top: 24px;
    }
  }
`;

export const EvolutionCards = styled.article`
  margin-top: 80px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  background: #202024;
  border-radius: 5px;
  flex: 0 1 23%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:last-child::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    margin: -1.4px;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(18, 18, 20, 0) 0%, #fd951f 100%);
  }

  &:last-child::after {
    content: 'Em breve';
    position: absolute;
    width: 208px;
    height: 436px;
    background: linear-gradient(180deg, rgba(18, 18, 20, 0) 0%, #fd951f 100%);
    border-radius: 5px;
    right: -24px;
    bottom: -40px;
    z-index: -5;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #121214;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  header {
    order: 1;
    padding: 32px;

    h2 {
      font-size: 32px;
      line-height: 119%;
      color: #e1e1e6;
      font-weight: 700;
    }

    h3 {
      padding: 24px 0px;
      color: #04d361;
      font-weight: 500;
      font-size: 24px;
      line-height: 125%;
    }

    p {
      font-size: 18px;
      line-height: 156%;
      color: #a8a8b3;
    }
  }

  div {
    padding: 24px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    order: 0;
    border-bottom: 1px solid #323238;

    strong {
      font-size: 10px;
      line-height: 12px;
      padding: 6px 12px;
      background: #323238;
      border-radius: 13px;
      color: #fff;
      text-transform: uppercase;
    }

    span {
      font-size: 16px;
      line-height: 19px;
      color: #41414d;
      font-weight: 700;
    }
  }
`;

export const SectionStudents = styled.section`
  position: relative;
  margin-top: 415px;
`;

export const StudentsContent = styled.div`
  max-width: 1120px;
  width: 100%;
  background: #202024;
  margin: 0 auto;
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 80px;

  header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: 24px;

    h1 {
      font-size: 54px;
      line-height: 56px;
      font-weight: 700;
      color: #e1e1e6;
      width: 100%;

      b {
        color: #04d361;
      }
    }
  }

  aside {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 18px;
      color: #a8a8b3;
      line-height: 156%;
      max-width: 430px;
    }

    a {
      position: relative;
      font-size: 16px;
      max-width: 271px;
      width: 100%;
      height: 64px;
      text-transform: uppercase;

      img {
        position: absolute;
        top: -97px;
        right: 135px;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
  }
`;

export const Footer = styled.footer`
  background: #0d0d0f;
  width: 100%;
  height: 100%;
  padding: 256px 0px 80px 0px;
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0;

  .bottom-logo-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      align-items: center;

      li {
        list-style: none;
        &:not(:last-child) {
          margin-right: 24px;
        }
        a {
          text-decoration: none;
          font-size: 14px;
          line-height: 16px;
          color: #a8a8b3;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;

    .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-basis: 380px;

      ul {
        display: flex;
        align-items: center;

        li {
          list-style: none;
          background-color: #202024;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          transition: 0.5s background-color;
          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: ${lighten(0.1, '#202024')};
          }

          &:not(:last-child) {
            margin-right: 8px;
          }

          & > a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              font-size: 18px;
              color: #8257e6;
            }
          }
        }
      }

      & > a {
        text-decoration: none;
        color: #9466ff;
        font-size: 16px;
        line-height: 1;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .button-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-basis: 170px;

      p {
        font-size: 14px;
        line-height: 24px;
        color: #04d361;
      }

      button {
        border: none;
        outline: none;
        background-color: #202024;
        width: 40px;
        height: 40px;
        transition: 0.5 background-color;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: ${lighten(0.1, '#202024')};
        }
      }
    }
  }
`;

// MEDIA QUERIES
