import styled from 'styled-components';

const VideoCardStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .description {
    margin-top: 1rem;
    display: flex;
    max-width: 250px;
    color: #898989;
    img {
      width: 36px;
      height: 36px;
      margin-right: 1rem;
      border-radius: 18px;
    }
    h3 {
      margin: 0;
      color: black;
    }
    .detail {
      div {
        font-size: 0.8rem;
      }
    }
  }
`

export { VideoCardStyled };