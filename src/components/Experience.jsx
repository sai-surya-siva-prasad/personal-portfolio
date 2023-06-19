import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png"; 
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const [transformation, setTransformation] = useState({});
  const [isRotating, setIsRotating] = useState(true);

  const handleClick = (id) => {
    const newTrans = (transformation[id] || 0) + 360;
    setTransformation((prevTrans) => ({ ...prevTrans, [id]: newTrans }));
  };

  const toggleRotation = () => {
    setIsRotating((prevState) => !prevState);
  };

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="pt-6">These are the technologies I have worked with</p>
        </div>
        <div className="pb-4">
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded ${isRotating ? "opacity-100" : "opacity-50"}`}
            onClick={toggleRotation}
          >
            Rotate
          </button>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded ${!isRotating ? "opacity-100" : "opacity-50"}`}
            onClick={toggleRotation}
          >
            Flip
          </button>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              onClick={() => handleClick(id)}
              style={{
                transform: isRotating ? `rotate(${transformation[id] || 0}deg)` : `rotateY(${transformation[id] || 0}deg)`,
                transition: "0.5s",
              }}
            >
              <img src={src} alt={title} className={`w-20 mx-auto ${id <= 4 ? "shadow-lg" : ""}`} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
