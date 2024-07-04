import vid from "../assets/dummy.mp4";
import PropTypes from "prop-types";

const VideoComponent = ({ videoRef }) => {
  return (
    <video ref={videoRef} width="100%" controls>
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
VideoComponent.propTypes = {
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
export default VideoComponent;
