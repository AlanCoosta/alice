/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Link from "next/link";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import SEO from "@/components/SEO";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import {
  AnimationContainer,
  Container,
  ProjectTitle,
  CardImage,
  Contact,
  Footer,
} from "@/styles/pages/projetos/Projetos.style";
import Header from "@/components/Header/Header";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
interface IProject {
  categories: {
    recentProjectsCategory: Document;
    highlightsCategory: Document;
    relevantCategory: Document;
  };
  projects: {
    recentProjects: Document[];
    highlights: Document[];
    relevant: Document[];
  };
}

const Projects = ({ categories, projects }: IProject) => {
  const breakpoints = {
    "640": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "1024": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <AnimationContainer>
      <Container>
        <SEO
          title="Projetos - Alice Costa"
          image="boost.png"
          shouldExcludeTitleSuffix
        />

        <Header />

        <ProjectTitle>
          {PrismicDOM.RichText.asText(
            categories.recentProjectsCategory.data.title
          )}
        </ProjectTitle>

        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={breakpoints}
          loop
        >
          {projects.recentProjects.map((project) => (
            <SwiperSlide key={project.uid} style={{ height: 256 }}>
              <Link href={`/projetos/${project.uid}`}>
                <a>
                  <CardImage
                    src={project.data.images[0].image.url}
                    alt={project.data.images[0].image.alt}
                    style={{
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <ProjectTitle>
          {PrismicDOM.RichText.asText(categories.highlightsCategory.data.title)}
        </ProjectTitle>

        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={breakpoints}
          loop
        >
          {projects.highlights.map((project) => (
            <SwiperSlide key={project.uid} style={{ height: 256 }}>
              <Link href={`/projetos/${project.uid}`}>
                <a>
                  <CardImage
                    src={project.data.images[0].image.url}
                    alt={project.data.images[0].image.alt}
                    style={{
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <ProjectTitle>
          {PrismicDOM.RichText.asText(categories.relevantCategory.data.title)}
        </ProjectTitle>

        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={breakpoints}
          loop
        >
          {projects.relevant.map((project) => (
            <SwiperSlide key={project.uid} style={{ height: 256 }}>
              <Link href={`/projetos/${project.uid}`}>
                <a>
                  <CardImage
                    src={project.data.images[0].image.url}
                    alt={project.data.images[0].image.alt}
                    style={{
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Contact>
          <p>Para obter acesso ao currículo envie um email para:</p>

          <p>alice2320@hotmail.com</p>
        </Contact>

        <Footer>Designer by Alice Costa | Developed by Alan Costa</Footer>
      </Container>
    </AnimationContainer>
  );
};

export const getStaticProps: GetStaticProps<IProject> = async (context) => {
  const recentProjectsCategory = await client().getByUID(
    "category",
    "recent",
    {}
  );
  const highlightsCategory = await client().getByUID(
    "category",
    "highlights",
    {}
  );
  const relevantCategory = await client().getByUID("category", "relevant", {});

  const recentProjects = await client().query([
    Prismic.Predicates.at("document.type", "project"),
    Prismic.Predicates.at("my.project.category", recentProjectsCategory.id),
  ]);

  const highlights = await client().query([
    Prismic.Predicates.at("document.type", "project"),
    Prismic.Predicates.at("my.project.category", highlightsCategory.id),
  ]);

  const relevant = await client().query([
    Prismic.Predicates.at("document.type", "project"),
    Prismic.Predicates.at("my.project.category", relevantCategory.id),
  ]);

  return {
    props: {
      categories: {
        recentProjectsCategory,
        highlightsCategory,
        relevantCategory,
      },
      projects: {
        recentProjects: recentProjects.results,
        highlights: highlights.results,
        relevant: relevant.results,
      },
    },
  };
};

export default Projects;
