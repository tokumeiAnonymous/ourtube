import { FaRegFolder, FaFireAlt, FaHome } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function Navigation() {
  // use navlinks
  // use theme context
  return (
    <IconContext.Provider value={{color: '#898989'}}>
      <ul>
        <li>
          <FaHome />Home
        </li>
        <li>
          <FaFireAlt />Trending
        </li>
        <li>
          <MdSubscriptions />Subscription
        </li>
        <li>
          <FaRegFolder />Library
        </li>
      </ul>
    </IconContext.Provider>
  )
}
