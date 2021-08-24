/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import PrismicDOM from "prismic-dom";
import SEO from "@/components/SEO";
import {
  AnimationContainer,
  CardImage,
  Container,
  ProjectTitle,
} from "@/styles/pages/projetos/ProjetosSlug.style";
import Header from "@/components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProjectProps {
  project: Document;
  images: string[];
}

const Project = ({ project, images }: ProjectProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <AnimationContainer>
      <Container>
        <SEO
          title={`${PrismicDOM.RichText.asText(
            project.data.title
          )} - Alice Costa`}
          shouldExcludeTitleSuffix
        />

        <Header />

        <Swiper
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          slidesPerView={1}
          spaceBetween={20}
          style={{
            alignItems: "center",
          }}
        >
          {images.map((item) => (
            <SwiperSlide key={item} className="swiper-slide-container">
              <CardImage
                src={item}
                style={{
                  borderRadius: 8,
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <ProjectTitle>
          {PrismicDOM.RichText.asText(project.data.title)}
        </ProjectTitle>

        <p
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(
              project.data.description_development
            ),
          }}
          style={{
            color: "#c0d2ff",
          }}
        />

        <br />

        <p
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(project.data.description),
          }}
        />
      </Container>
    </AnimationContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (context) => {
  const { slug } = context.params;

  const project = await client().getByUID("project", String(slug), {});

  const images = [];
  project.data.images.forEach((item) => {
    images.push(item.image.url);
  });

  return {
    props: {
      project: project,
      images,
    },
    revalidate: 60,
  };
};

export default Project;
