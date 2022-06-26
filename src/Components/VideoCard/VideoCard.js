import { VideoCardStyled } from './VideoCard.styled';

export default function VideoCard({ data }) {
  const { title, creator, src, creatorProfile, views } = data;
  return (
    <VideoCardStyled>
      {
      /**
       * thumbnail
       * creator icon
       * title
       * creator
       * views
       * duration
       */
       }
      <img src={src} alt={title} />
      <div className="description">
        <img src={creatorProfile} alt={creator} />
        <div className="detail">
          <h3>{title}</h3>
          <div>{creator}</div>
          <div>{views} views</div>
        </div>
      </div>
    </VideoCardStyled>
  )
}
