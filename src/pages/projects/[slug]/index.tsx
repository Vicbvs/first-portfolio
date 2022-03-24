import { GetStaticPaths, GetStaticProps } from 'next';
import * as prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getPrismicClient();

  const projects = await client.get({
    predicates: prismic.predicate.at('document.type', 'project')
  });

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const client = getPrismicClient();
  const { slug } = context.params;

  const response = await client.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
