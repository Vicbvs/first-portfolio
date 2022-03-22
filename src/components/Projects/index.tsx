import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import Link from 'next/link';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" description="" />

      <section>
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
