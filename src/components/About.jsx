import React from 'react';
import weic2039a from '../assets/weic2309a.jpg'; // make sure to adjust the path

const About = () => {
  return (
    <div 
      name="about" 
      className="w-full h-screen text-white"
      style={{
        backgroundImage: `url(${weic2039a})`,
        backgroundPosition: 'center bottom',  // adjust background position
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-left" style={{ maxWidth: '40ch', textAlign: 'justify' }}>
          I am a Full Stack Developer with a passion for building beautiful and user-friendly websites. 
          I have a strong understanding of both front end and back-end development. I am excited to put my skills to use in a professional setting. 
          I am a quick learner and a team player. I am confident that I can be a valuable asset to any web development team.
        </p>
        <br />
        <p className="text-left" style={{ maxWidth: '40ch', textAlign: 'justify' }}>
          Currently, I'm pursuing my Master's degree in Computer Science at Rutgers University. 
          Here, I am focusing on developing my understanding of complex algorithms and enhancing my problem-solving skills.
          Prior to this, I was a Full Stack Web Developer at Accenture. In this role, I was part of a dynamic team where we built sophisticated healthcare products. 
          My work mainly revolved around designing and implementing robust algorithms and crafting intuitive user interfaces to ensure a smooth user experience.
        </p>
      </div>
    </div>
  );
};

export default About;
