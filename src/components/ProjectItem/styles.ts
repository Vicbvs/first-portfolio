import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${props => props.theme.primary};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;

      h1 {
        color: ${props => props.theme.primary};
        font-size: 1.5rem;
      }

      h2 {
        color: ${props => props.theme.secondary};
        font-weight: 300;
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.gradient};
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`;
