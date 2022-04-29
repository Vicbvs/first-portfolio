import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

interface IExperiences {
  uid: string;
  year: string;
  title: string;
  description: string;
}

interface ExperiencesProps {
  experiences: IExperiences[];
}

function Experiences({ experiences }: ExperiencesProps) {
  // eslint-disable-next-line prefer-spread
  const year = Math.min.apply(
    Math,
    experiences.map(e => e.year)
  );

  const currentYear = new Date().getFullYear();
  const experienceYears = `${currentYear - year} Anos`;

  return (
    <Container>
      <SectionTitle title={experienceYears} description="de experiência" />

      <section>
        {experiences.map(experience => (
          <ExperienceItem
            key={experience.uid}
            year={experience.year}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </section>
    </Container>
  );
}

export default Experiences;
