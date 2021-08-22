import SEO from "@/components/SEO";
import Link from "next/link";
import { client } from "@/lib/prismic";
import { GetServerSideProps } from "next";
import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";
import PrismicDOM from "prismic-dom";
import { Title } from "../styles/pages/Home.style";

interface HomeProps {
  recommendedProducts: Document[];
}

const Home = ({ recommendedProducts }: HomeProps): JSX.Element => {
  return (
    <div>
      <SEO
        title="Home - Alice Costa"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <section>
        <Title>Products</Title>

        <Link href={`/projetos`}>
          <a>Projetos</a>
        </Link>
      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at("document.type", "project"),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    },
  };
};

export default Home;
