import styled from 'styled-components';

const SearchStyled = styled.div`
  display: flex;
  height: 2rem;
  margin-right: auto;
  border-color: #C6C6C6;
  input[type="text"] {
    width: 400px;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  input[type="text"]:focus {
    opacity: 1;
  }
`

export { SearchStyled };