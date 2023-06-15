import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat impedit excepturi, in fugiat voluptates blanditiis. Culpa nam adipisci necessitatibus facilis fugiat quos illum! Odit accusantium maiores possimus blanditiis reprehenderit doloremque, repudiandae alias placeat iusto magnam nesciunt cumque, voluptatem itaque impedit quibusdam! Libero facere labore veniam eaque accusamus, possimus obcaecati?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit inventore hic laboriosam, dolor sed quas culpa aliquam. Minus ex officia beatae temporibus animi neque praesentium aliquam, laborum itaque. Iste sed saepe, sit libero, aliquid voluptatem dicta nobis ducimus dolores fugit explicabo excepturi dolor modi, iure nostrum dolorum debitis assumenda beatae!
        </p>
      </div>
    </div>
  );
};

export default About;
