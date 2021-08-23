/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import PrismicDOM from "prismic-dom";
import SEO from "@/components/SEO";

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
    <div>
      <SEO
        title={`${PrismicDOM.RichText.asText(
          project.data.title
        )} - Alice Costa`}
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <div>
        {images.map((item) => {
          return <img key={item} src={item} alt="" />;
        })}
      </div>

      <h1>{PrismicDOM.RichText.asText(project.data.title)}</h1>

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
    </div>
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
