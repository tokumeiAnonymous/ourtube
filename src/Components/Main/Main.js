import { useEffect, useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import { MainStyled } from './Main.styled';
import { v4 as uuidv4 } from 'uuid';

export default function Main() {
  const [data, setData] = useState([]);
  // tempdata
  useEffect(() => {
    setData([
      {
        id: uuidv4(),
        title: 'Testasdfasdfasd 1',
        creator: 'Kaya',
        src: 'https://via.placeholder.com/250x200',
        creatorProfile: 'https://via.placeholder.com/36x36',
        views: 30
      },
      {
        id: uuidv4(),
        title: 'Testasdfasdfasd 1',
        creator: 'Kaya',
        src: 'https://via.placeholder.com/250x200',
        creatorProfile: 'https://via.placeholder.com/36x36',
        views: 30
      },
      {
        id: uuidv4(),
        title: 'Testasdfasdfasd 1',
        creator: 'Kaya',
        src: 'https://via.placeholder.com/250x200',
        creatorProfile: 'https://via.placeholder.com/36x36',
        views: 30
      },
      {
        id: uuidv4(),
        title: 'Testasdfasdfasd 1',
        creator: 'Kaya',
        src: 'https://via.placeholder.com/250x200',
        creatorProfile: 'https://via.placeholder.com/36x36',
        views: 30
      },
    ])
  },[])

  const videoList = data.map((element) => {
    return <VideoCard key={element.id} data={element} />
  })
  return (
    <MainStyled>
      {videoList}
    </MainStyled>
  )
}
