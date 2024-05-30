import React, { useState } from "react";
import PlayButton from "../../images/PlayButton.svg";
import style from "./hero.module.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 backdrop-blur-2xl">
      <button
        className="absolute top-6 right-6 m-4 w-12 h-12 rounded-full text-white"
        onClick={onClose}
      >
        <IoMdCloseCircleOutline size={40} />
      </button>
      <iframe
        width="350"
        height="250"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-3xl drop-shadow-md md:drop-shadow-xl md:h-3/4 md:w-3/5 mr-10 md:mr-0"
      ></iframe>
    </div>
  );
};

const Thumbnail = ({ thumbnailUrl, onClick }) => {
  return (
    <div
      className="relative cursor-pointer w-72 h-auto overflow-hidden rounded-t-3xl"
      onClick={onClick}
    >
      <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-full" />
    </div>
  );
};

const VideoPreviewer = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className={`flex flex-col items-center md:w-72 ${style.player}`}>
      {showVideo ? (
        <VideoPlayer
          videoUrl="https://www.youtube.com/embed/EIxyNAIgmq8?si=0dySW36v_TdbYNTi"
          onClose={handleCloseVideo}
        />
      ) : (
        <div className="w-full">
          <Thumbnail
            thumbnailUrl="https://img.youtube.com/vi/EIxyNAIgmq8/maxresdefault.jpg"
            onClick={handleThumbnailClick}
          />
          <div className="flex justify-between items-center text-white bg-[#262342] text-md p-3">
            <h2 className="font-nexabold mr-0 md:mr-4 ml-2 w-44 tracking-wide">Aaruush'24 Main Video</h2>
            <div className={`flex z-10 w-16 h-16 ${style.playbutton}`}>
              <img
                src={PlayButton}
                alt="Play Button"
                className="flex rounded-full transition-transform duration-300 transform hover:scale-125"
                onClick={handleThumbnailClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPreviewer;


