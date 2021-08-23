import { GetStaticProps } from "next";
import Link from "next/link";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import SEO from "@/components/SEO";

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
  return (
    <div>
      <SEO
        title="Projetos - Alice Costa"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <Link href="/">ALICE COSTA</Link>

      <h1>
        {PrismicDOM.RichText.asText(
          categories.recentProjectsCategory.data.title
        )}
      </h1>

      <div style={{ display: "flex" }}>
        {projects.recentProjects.map((project) => (
          <Link key={project.uid} href={`/projetos/${project.uid}`}>
            <a href={`/projetos/${project.uid}`}>
              <img
                src={project.data.images[0].image.url}
                alt={project.data.images[0].image.alt}
              />
            </a>
          </Link>
        ))}
      </div>

      <h1>
        {PrismicDOM.RichText.asText(categories.highlightsCategory.data.title)}
      </h1>

      <div style={{ display: "flex" }}>
        {projects.highlights.map((project) => (
          <Link key={project.uid} href={`/projetos/${project.uid}`}>
            <a href={`/projetos/${project.uid}`}>
              <img
                src={project.data.images[0].image.url}
                alt={project.data.images[0].image.alt}
              />
            </a>
          </Link>
        ))}
      </div>

      <h1>
        {PrismicDOM.RichText.asText(categories.relevantCategory.data.title)}
      </h1>

      <div style={{ display: "flex" }}>
        {projects.relevant.map((project) => (
          <Link key={project.uid} href={`/projetos/${project.uid}`}>
            <a href={`/projetos/${project.uid}`}>
              <img
                src={project.data.images[0].image.url}
                alt={project.data.images[0].image.alt}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
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
