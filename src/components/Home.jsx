import React, { useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import video from '../assets/space video.mp4'; // ensure path is correct

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => {
      if (videoElement.currentTime === videoElement.duration) {
        videoElement.currentTime = 0; // Reset to the beginning
        videoElement.playbackRate = 1; // Set back to normal playback
      }
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div name="home" className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute z-10 w-full h-full object-cover"
        style={{
          top: 0,
          left: 0,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-20 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white fade-in">
            Hi there! I'm Surya
          </h2>
          <p className="text-white py-4 max-w-md fade-in">
            I am a Full Stack Web Developer based in New Brunswick, New Jersey.
          </p>
          <div className="flex space-x-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer button-grow"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href="https://leetcode.com/Surya2316/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 cursor-pointer button-grow"
            >
              Leetcode
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 flex items-center justify-center">
        <Link
          to="about"
          smooth
          duration={500}
          className="text-white text-2xl transition duration-300 transform hover:scale-110"
        >
          Scroll Down
        </Link>
      </div>
    </div>
  );
};

export default Home;
