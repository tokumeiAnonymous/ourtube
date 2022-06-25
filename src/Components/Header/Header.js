import { GrMenu, GrYoutube } from 'react-icons/gr';
import Search from '../Search/Search';
import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      {/**
       * Menu
       * Logo
       * Search
       * Right
          icons and profile
       */}
      <div className='right'>
        <GrMenu />
        <div className='header__logo'>
          <GrYoutube />
          <div>OurTube</div>
        </div>
      </div>
      <div className="left">
        <Search />
        {/* Conditional render here user profile or login */}
        <button>Sign in</button>
      </div>
    </HeaderStyled>
  );
}
