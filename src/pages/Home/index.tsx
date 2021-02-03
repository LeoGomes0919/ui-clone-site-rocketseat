import React, { useCallback } from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaAngleUp,
} from 'react-icons/fa';

import Globo from '../../components/Icons/Globo';
import Zup from '../../components/Icons/Zup';
import Neon from '../../components/Icons/Neon';
import Zenvia from '../../components/Icons/Zenvia';
import Vanhack from '../../components/Icons/Vanhack';

import {
  Header,
  HeaderContent,
  LogoLink,
  Link,
  ActionLogon,
  Main,
  SectionSlogan,
  Aside,
  SectionBanner,
  SectionContent,
  SectionCompanies,
  Companies,
  SectionConections,
  SectionContentConections,
  SectionRewards,
  SectionRewardsContent,
  SectionCommunity,
  SectionCommunityContent,
  SectionAlertSpoiler,
  SectionEvolution,
  EvolutionCards,
  Card,
  SectionStudents,
  StudentsContent,
  Footer,
  FooterContent,
} from './styles';

import Button from '../../components/Button';

import logoImage from '../../assets/logo.svg';
import globoImg from '../../assets/globo.svg';
import zupImg from '../../assets/zup.svg';
import neonImg from '../../assets/neon.svg';
import vanhackImg from '../../assets/vanhack.svg';
import zenviaImg from '../../assets/zenvia.svg';
import alert from '../../assets/alert.svg';
import line from '../../assets/line.svg';

import headline from '../../assets/headline.png';
import profile from '../../assets/profile.png';
import gamification from '../../assets/gamification.png';
import community from '../../assets/community.png';

const Home: React.FC = () => {
  const handleGoToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header>
        <HeaderContent>
          <LogoLink>
            <a href="http://localhost:3000">
              <img src={logoImage} alt="Logo Rocketseat" />
            </a>
            <Link href="http://localhost:3000">Manifesto</Link>
          </LogoLink>
          <ActionLogon>
            <Button href="http://localhost:3000">ENTRAR</Button>
            <div className="mobile-menu-icon">
              <div />
            </div>
          </ActionLogon>
        </HeaderContent>
      </Header>
      <Main>
        <SectionSlogan>
          <header>
            <h1>
              Evolua rápido como a tecnologia<span>.</span>
            </h1>
          </header>
        </SectionSlogan>

        <Aside>
          <p>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos.
          </p>
          <Button href="http://localhost:3000">EMBARCAR NO FOGUETE</Button>
        </Aside>

        <SectionBanner>
          <SectionContent>
            <img src={headline} alt="headline" />
          </SectionContent>
        </SectionBanner>

        <SectionCompanies>
          <header>
            <h1>Empresas que confiam no nosso trabalho</h1>
          </header>
          <Companies>
            <Globo />
            <Zup />
            <Neon />
            <Vanhack />
            <Zenvia />
          </Companies>
        </SectionCompanies>

        <SectionConections>
          <header>
            <div />
            <h1>Conexão é a chave para as maiores oportunidades</h1>
            <p>
              Uma comunidade incrível e todo o ecossistema de tecnologia na
              mesma plataforma.
            </p>
          </header>
          <SectionContentConections>
            <img src={profile} alt="Perfil" />
          </SectionContentConections>
        </SectionConections>

        <SectionRewards>
          <header>
            <div />
            <h1>Conquiste novas habilidades e seja reconhecido</h1>
            <p>
              Uma jornada de aprendizado contínuo, desafios e recompensas que
              vão te levar para o próximo nível.
            </p>
          </header>
          <SectionRewardsContent>
            <img src={gamification} alt="Ramificação recompensas" />
          </SectionRewardsContent>
        </SectionRewards>

        <SectionCommunity>
          <header>
            <div />
            <h1>Devs melhores, aplicações melhores, um mundo melhor</h1>
            <p>
              Uma experiência com propósito para impulsionar sua carreira e
              transformar o mundo.
            </p>
          </header>
          <SectionCommunityContent>
            <img src={community} alt="Comunidade" />
          </SectionCommunityContent>
        </SectionCommunity>

        <SectionAlertSpoiler>
          <header>
            <img src={alert} alt="Imagem de alerta" />
            <h1>Spoiler alert!</h1>
            <p>
              As funcionalidades serão liberadas ao longo dos próximos meses.
              Embarque porque o foguete está decolando.
            </p>
          </header>
          <strong>Novidades a caminho</strong>
        </SectionAlertSpoiler>

        <SectionEvolution>
          <header>
            <h1>Jornada de evolução contínua</h1>
            <p>
              Conheça as órbitas de aprendizado que vão impulsionar cada etapa
              da sua carreira.
            </p>
          </header>

          <EvolutionCards>
            <Card>
              <header>
                <h2>Discover</h2>
                <h3>Sua jornada começa aqui.</h3>
                <p>Um curso completo de desenvolvimento web do zero.</p>
              </header>
              <div>
                <strong>Iniciante</strong>
                <span>01</span>
              </div>
            </Card>

            <Card>
              <header>
                <h2>Next Level Week</h2>
                <h3>Avance para o próximo nível.</h3>
                <p>Um evento incrível para toda a comunidade evoluir junto.</p>
              </header>
              <div>
                <strong>Intermediario</strong>
                <span>02</span>
              </div>
            </Card>

            <Card>
              <header>
                <h2>Ignite</h2>
                <h3>Acelere sua carreira.</h3>
                <p>
                  Treinamentos intensivos para ficar alinhado com o mercado.
                </p>
              </header>
              <div>
                <strong>Intermediario</strong>
                <span>03</span>
              </div>
            </Card>

            <Card>
              <header>
                <h2>ExpertsClub</h2>
                <h3>Sua evolução nao pode parar.</h3>
                <p>Aulas direto ao ponto em assuntos específicos.</p>
              </header>
              <div>
                <strong>Avançado</strong>
                <span>04</span>
              </div>
            </Card>
          </EvolutionCards>
        </SectionEvolution>

        <SectionStudents>
          <StudentsContent>
            <header>
              <h1>
                Mais de <b>200 mil devs</b> <br /> já se conectaram.
              </h1>
            </header>
            <aside>
              <p>
                Embarque nesse foguete e comece a avançar agora mesmo na direção
                dos seus objetivos.
              </p>
              <Button href="http://localhost:3000">
                Criar minha conta
                <img src={line} alt="Linha" />
              </Button>
            </aside>
          </StudentsContent>
        </SectionStudents>
      </Main>
      <Footer>
        <FooterContent>
          <div className="bottom-logo-menu">
            <img src={logoImage} alt="Logo Rocketseat" />
            <ul>
              <li>
                <a href="http://localhost:3000">Direitos autorais</a>
              </li>
              <li>
                <a href="http://localhost:3000">Termos de uso</a>
              </li>
              <li>
                <a href="http://localhost:3000">Políticas de privacidade</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <div className="links">
              <ul>
                <li>
                  <a href="https://www.facebook.com/leo.gomes.0919/">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/leonardo._gs/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="http:localhost:3000">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
              <a href="http://locahost:3000">Central de Ajuda</a>
            </div>

            <div className="button-top">
              <p>Boost yourself</p>
              <button type="button" onClick={handleGoToTop}>
                <FaAngleUp size={13} color="#8257e6" />
              </button>
            </div>
          </div>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Home;
