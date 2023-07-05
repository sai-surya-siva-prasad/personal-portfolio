import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ChatGPT_Blog from '../assets/portfolio/ChatGPT_Blog.png';
import car_rental from '../assets/portfolio/car_rental.png';
import Fitness_app from '../assets/portfolio/Fitness_app.png';
import chatGpt from '../assets/portfolio/chatGpt.png';
import socialMedia from '../assets/portfolio/socialMedia.png';
import personalPortfolio from '../assets/portfolio/personalPortfolio.png';

const MySuperPortfolio = () => {
  const portfolios = [
     {
      id: 1,
      src: ChatGPT_Blog,
      title: 'ChatGPT Blog',
      description: 'A blog allowing users to take help of ChatGPT to write the content',
      demoLink: 'https://gpt-powered-blog-app.vercel.app/',
      codeLink: 'https://github.com/sai-surya-siva-prasad/gpt-powered-blog-app'
    },
    {
      id: 2,
      src: car_rental,
      title: 'car Rental Website',
      description: 'Streamline your car rental experience with our effortless booking process.',
      demoLink: 'https://cars-showcase-ftmk.vercel.app/',
      codeLink: 'https://github.com/sai-surya-siva-prasad/e-commerce-website'
    },
   
    {
      id: 3,
      src: Fitness_app,
      title: 'Fitness App',
      description: 'A mobile app to track fitness activities and goals',
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/sai-surya-siva-prasad/Fitness-app'
    },
    {
      id: 4,
      src: chatGpt,
      title: 'ChatGPT Integration',
      description: 'Integration of ChatGPT into a messaging application',
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/sai-surya-siva-prasad/AI-BOT-in-chat-application'
    },
    {
      id: 5,
      src: socialMedia,
      title: 'Social Media Platform',
      description: 'A platform for connecting and sharing with friends',
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/sai-surya-siva-prasad/social-media-app-with-MERN'
    },
    {
      id: 6,
      src: personalPortfolio,
      title: 'Personal Portfolio',
      description: 'My personal portfolio website showcasing projects and skills',
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/sai-surya-siva-prasad/personal-portfolio'
    }
  ];

  const [isFlipped, setIsFlipped] = useState({});

  const handleButtonClick = (link) => {
    if (link === 'https://example.com') {
      alert('Coming soon!');
    } else {
      window.open(link, '_blank');
    }
  };

  const handleFlip = (id) => {
    setIsFlipped(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pg-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out my work here (click on the image for description)</p>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => (
            <ReactCardFlip isFlipped={isFlipped[portfolio.id] || false} flipDirection="horizontal">
              <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={portfolio.src} alt="" className="rounded-md duration-200 hover:scale-105" onClick={() => handleFlip(portfolio.id)} />
                <div className="flex items-center justify-center">
                  <button onClick={() => handleButtonClick(portfolio.demoLink)} className="w-1/2 px-6 py-3 m-4 hover:scale-105">Demo</button>
                  <button onClick={() => handleButtonClick(portfolio.codeLink)} className="w-1/2 px-6 py-3 m-4 hover:scale-105">Code</button>
                </div>
              </div>
              <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg" onClick={() => handleFlip(portfolio.id)}>
                <div className="p-4">
                  <h2 className="text-xl font-bold">{portfolio.title}</h2>
                  <p>{portfolio.description}</p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySuperPortfolio;
