import { BsSearch } from 'react-icons/bs';
import { SearchStyled } from './Search.styled';

export default function Search() {
  return (
    <SearchStyled>
      <input type="text" placeholder="  Search"/>
      <button><BsSearch /></button>
    </SearchStyled>
  )
}
