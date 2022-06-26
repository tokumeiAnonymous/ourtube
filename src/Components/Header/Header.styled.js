import styled from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 0.5rem;
    gap: 0.5rem;
    color: ${({theme}) => theme.colors.mainFont};
    font-weight: 700;
    font-size: 2rem;

    .header__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${({theme}) => theme.colors.main};
      }
    }
  }
  .left {
    display: flex;
    flex-grow: 1;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

export { HeaderStyled };