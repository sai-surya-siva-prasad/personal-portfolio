import React,{useState} from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import graphql from '../assets/graphql.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import javascript from '../assets/javascript.png';


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
    {
      id: 6,
      src: nextjs,
      title: 'Nextjs',
      style: 'shadow-white'
    },
    {
      id: 7,
      src: graphql,
      title: 'Graphql',
      style: 'shadow-pink-400'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    }
  ];


  const [transformation, setTransformation] = useState({});
  
  // State to hold whether we are flipping or rotating. Initial state is 'rotate'.
  const [option, setOption] = useState('rotate');

  const handleClick = (id) => {
    setTransformation((prevTrans) => {
      const newTrans = (prevTrans[id] || 0) + 360;
      if(newTrans >= 900) {
        return { ...prevTrans, [id]: 0 };
      } else {
        return { ...prevTrans, [id]: newTrans };
      }
    });
  };

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <div className="flex items-center py-4">
            <p>Rotate</p>
            <label className="switch ml-4">
              <input type="checkbox" onChange={(e) => setOption(e.target.checked ? 'flip' : 'rotate')} />
              <span className="slider round"></span>
            </label>
            <p>Flip</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} onClick={() => handleClick(id)} style={{ transform: option === 'rotate' ? `rotate(${transformation[id] || 0}deg)` : `rotateY(${transformation[id] || 0}deg)`, transition: '1s' }}>
              <img src={src} alt={title} className={`w-20 mx-auto ${id <= 4 ? 'shadow-lg' : ''}`} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


