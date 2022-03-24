/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Victor</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <spam className="comment">//Minha apresentação</spam>
            <spam className="purple">//Infos</spam> {'\u007B'}
            <div>
              Nome: <spam className="blue">Victor,</spam>
            </div>
            <div>
              Sobrenome: <spam className="blue">Borsatto</spam>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <spam className="comment">//Cargo</spam>
            <spam className="purple">//Infos</spam> {'\u007B'}
            <div>
              Função: <spam className="blue">FullStack,</spam>
            </div>
            <div>
              Empresa: <spam className="blue">Valtech</spam>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
