import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Project 01"
        type="Website"
        imgUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
          tincidunt risus id pharetra. Maecenas dictum vehicula pulvinar. Sed
          eget arcu elit.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
