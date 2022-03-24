import { GetStaticProps } from 'next';
import * as prismic from '@prismicio/client';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
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

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
