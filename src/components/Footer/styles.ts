import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${props => props.theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${props => props.theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;

      //Implementado opcional
      &:hover {
        color: ${props => props.theme.primary};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${props => props.theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${props => props.theme.primary};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
