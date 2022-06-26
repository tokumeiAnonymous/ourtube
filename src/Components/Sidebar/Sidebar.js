import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { GiAlarmClock } from 'react-icons/gi';
import { SidebarStyled } from './Sidebar.styled';

export default function Sidebar() {
  return (
    <SidebarStyled>
      <ul>
        <li><BiHomeAlt /> Home</li>
        <li><AiOutlineFire /> Trending</li>
        <li><MdSubscriptions /> Subscriptions</li>
        <li><GiAlarmClock /> Watch Later</li>
      </ul>
    </SidebarStyled>
  )
}
