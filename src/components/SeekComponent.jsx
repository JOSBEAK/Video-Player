import videoInfo from "../../videoInfo.json";
import PropTypes from "prop-types";

const SeekComponent = ({ onSeek }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 w-full">
      {Object.entries(videoInfo).map(([tag, seconds]) => (
        <button
          key={tag}
          onClick={() => onSeek(seconds)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-words"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

SeekComponent.propTypes = {
  onSeek: PropTypes.func.isRequired,
};

export default SeekComponent;
