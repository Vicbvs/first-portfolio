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
            <span className="comment">//Minha apresentação</span>
            <span className="purple">//Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Victor,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Borsatto</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Cargo</span>
            <span className="purple">//Infos</span> {'\u007B'}
            <div>
              Função: <span className="blue">FullStack,</span>
            </div>
            <div>
              Empresa: <span className="blue">Valtech</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
