import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p>
      Surya Raghavarapu is a dedicated and innovative full stack developer with a strong foundation in computer science, holding a Master's degree from Rutgers University and a Bachelor's degree from Amrita University. Surya has a proven track record of delivering high-impact solutions in various domains, including mental health, cloud services, and enterprise applications.
        </p>
        <br />
          <p className="text-xl">
          Surya excels in both front-end and back-end development, proficient in languages and technologies such as Java, Python, JavaScript (ES6), Typescript, HTML, and CSS. His expertise extends to frameworks like React, Next.js, Spring Boot, and Django, as well as database management systems including MySQL, PostgreSQL, and MongoDB. Surya is also skilled in using cloud platforms like Microsoft Azure, and has hands-on experience with tools and frameworks such as Docker, Kubernetes, and Git.
        
        </p>
        <p className="text-xl">
          Throughout his career, Surya has worked with industry leaders like Microsoft and Accenture, as well as innovative startups like Zant. At Zant, he developed an AI-powered Mental Health Assistant and optimized the backend infrastructure, significantly improving client satisfaction and system performance. At Microsoft, he enhanced Azure PostgreSQL performance and implemented robust cloud services, increasing reliability and reducing latency. As a Senior Analyst at Accenture, Surya developed high-performance Java backend services and engineered responsive front-end applications, consistently improving user experience and system efficiency.
        </p>
      </div>
    </div>
  );
};

export default About;
