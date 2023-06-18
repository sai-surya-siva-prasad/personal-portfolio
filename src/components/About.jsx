import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p>
          I am a Full Stack Developer with a passion for building beautiful and user-frienly websites. I have a strong understanding of both front end and 
          back-end development, and I am exicited to put my skills to use in a professional setting.I am a quick learner and a team player, and I am confident 
          that I can be a valuable asset to any wen development team.
        </p>
        <br />
        <p className="text-xl">
            Currently, I'm pursuing my Master's degree in Computer Science at Rutgers University, 
            where I am focusing on developing my understanding of complex algorithms and enhancing 
            my problem-solving skills.
            Prior to this, I was a Full Stack Web Developer at Accenture. Here, I was part of a dynamic 
            team where we built sophisticated healthcare products. My work mainly revolved around designing 
            and implementing robust algorithms and crafting intuitive user interfaces, ensuring a smooth 
            user experience
        </p>
      </div>
    </div>
  );
};

export default About;
