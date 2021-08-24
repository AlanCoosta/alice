/* eslint-disable @next/next/no-html-link-for-pages */
import SEO from "@/components/SEO";
import Link from "next/link";
import Image from "next/image";
import AvatarAlice from "../assets/images/avatar.png";
import {
  AnimationContainer,
  Container,
  Header,
  Content,
  Name,
  Description,
  About,
  Contact,
  Footer,
  ImageContainer,
} from "../styles/pages/Home.style";
import LinkFolder from "@/components/LinkFolder/LinkFolder";

const Home = (): JSX.Element => {
  return (
    <div>
      <SEO
        title="Home - Alice Costa"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <AnimationContainer>
        <Container>
          <Header>
            <Link href="/projetos">
              <LinkFolder href="/projetos" />
            </Link>
          </Header>

          <Content>
            <ImageContainer>
              <Name>
                <h1>ALICE</h1>
                <h1>COSTA</h1>
              </Name>

              <Image src={AvatarAlice} alt="Alice Costa Foto" />
            </ImageContainer>

            <Description>
              <p>Publicitária</p>
              <p>Designer</p>
              <p>Diretora de Arte</p>
              <p>Criativa</p>
            </Description>

            <About>
              <p>
                Atualmente, contratada pela Rádio 93FM, empresa do Grupo MK de
                Comunicação. Trabalho com elaboração de marcas, identidade
                visual e comunicação para redes sociais, campanhas, concursos
                projetos e eventos.
              </p>

              <p>
                Atendo também, de forma isolada e excepcional, as outras
                empresas do Grupo, como a Gravadora MK Music, portal de notícias
                Pleno.News e MK Network.
              </p>
            </About>

            <Link href="/projetos">
              <LinkFolder href="/projetos" />
            </Link>

            <Contact>
              <p>Para obter acesso ao currículo envie um email para:</p>

              <p>alice2320@hotmail.com</p>
            </Contact>

            <Footer>Designer by Alice Costa | Developed by Alan Costa</Footer>
          </Content>
        </Container>
      </AnimationContainer>
    </div>
  );
};

export default Home;
