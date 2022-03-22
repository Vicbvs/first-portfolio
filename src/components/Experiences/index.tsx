import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 Anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2022"
          title="Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia tincidunt risus id pharetra. Maecenas dictum vehicula pulvinar. Sed eget arcu elit."
        />
        <ExperienceItem
          year="2021"
          title="FrontEnd Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia tincidunt risus id pharetra. Maecenas dictum vehicula pulvinar. Sed eget arcu elit."
        />
        <ExperienceItem
          year="2020"
          title="BackEnd Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia tincidunt risus id pharetra. Maecenas dictum vehicula pulvinar. Sed eget arcu elit."
        />
        <ExperienceItem
          year="2019"
          title="FullStack Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia tincidunt risus id pharetra. Maecenas dictum vehicula pulvinar. Sed eget arcu elit."
        />
      </section>
    </Container>
  );
}

export default Experiences;
