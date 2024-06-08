import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h1 className="text-5xl font-extrabold inline border-b-4 border-gray-500">About Me</h1>
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Hello! I am Surya Raghavarapu, a passionate and innovative full stack developer with a solid foundation in computer science. I hold a Master’s degree from Rutgers University and a Bachelor’s degree from Amrita University. I have a proven track record of delivering high-impact solutions in various domains, including mental health, cloud services, and enterprise applications.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise spans both front-end and back-end development. I am proficient in languages and technologies such as Java, Python, JavaScript (ES6), Typescript, HTML, and CSS. I have extensive experience with frameworks like React, Next.js, Spring Boot, and Django, and I am skilled in database management systems including MySQL, PostgreSQL, and MongoDB. Additionally, I have hands-on experience with cloud platforms like Microsoft Azure and tools like Docker, Kubernetes, and Git.
          </p>
          <p className="text-lg leading-relaxed">
            Over the course of my career, I have worked with industry leaders such as Microsoft and Accenture, as well as innovative startups like Zant. At Zant, I developed an AI-powered Mental Health Assistant and optimized backend infrastructure, significantly enhancing client satisfaction and system performance. At Microsoft, I boosted Azure PostgreSQL performance and implemented robust cloud services, improving reliability and reducing latency. As a Senior Analyst at Accenture, I developed high-performance Java backend services and engineered responsive front-end applications, consistently enhancing user experience and system efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
