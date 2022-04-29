import { GetStaticProps } from 'next';
import * as prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import 'aos/dist/aos.css';

interface IExperiences {
  uid: string;
  year: string;
  title: string;
  description: string;
}
interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  experiences: IExperiences[];
  projects: IProject[];
}

export default function Home({ experiences, projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | My portfolio</title>
        <meta name="description" content="I am a FullStack Developer" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
        <Knowledge />
        <Contact />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

  const projectResponse = await client.get({
    predicates: prismic.predicate.at('document.type', 'project'),
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  });

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  const experienceResponse = await client.get({
    predicates: prismic.predicate.at('document.type', 'experience'),
    orderings: {
      field: 'my.experience.year',
      direction: 'desc'
    }
  });

  const experiences = experienceResponse.results.map(experience => ({
    uid: experience.uid,
    year: experience.data.year,
    title: experience.data.title,
    description: experience.data.description
  }));

  return {
    props: {
      experiences,
      projects
    },
    revalidate: 86400
  };
};
