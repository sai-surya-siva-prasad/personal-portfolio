import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsInstagram } from "react-icons/bs";



const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/siyasurya/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/sai-surya-siva-prasad',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:suryaraghavarapu@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Resume June22g.pdf',
      style: 'rounded-br-md',
      download: true,
    },
    
      {
        id: 5,
        child: (
          <>
            Instagram <BsInstagram size={30} />
          </>
        ),
        href: 'https://instagram.com/r_saisurya_2316?igshid=MzNlNGNkZWQ4Mg==' ,
      },
  ];

  return ( 
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}>
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download ? '' : undefined}
              target={link.download ? '_blank' : undefined}
              rel={link.download ? 'noreferrer' : undefined}
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
