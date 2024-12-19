import "./PlayVideo.css";

import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import userProfile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            <img src={dislike} alt="" />
            <img src={share} alt="" />
            <img src={save} alt="" />
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more Tutorials on web Development </p>

        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>{" "}
              <p>
                A global computer network providing a variety of information of
                interconnected networks by using standardized communication
                protocols.
              </p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
