import { useRef } from "react";
import VideoComponent from "./components/VideoComponent";
import SeekComponent from "./components/SeekComponent";

function App() {
  const videoRef = useRef(null);

  const handleSeek = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
    }
  };

  return (
    <div className="w-full max-w-2xl h-screen mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Video Player with Seeking</h1>

      <VideoComponent videoRef={videoRef} />
      <SeekComponent onSeek={handleSeek} />
    </div>
  );
}

export default App;
