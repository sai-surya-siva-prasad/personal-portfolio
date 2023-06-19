import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const SocialLinks = () => {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      name: 'LinkedIn',
      href: 'http://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      name: 'Github',
      href: 'http://github.com',
    },
    {
      id: 3,
      icon: <HiOutlineMail size={30} />,
      name: 'Mail',
      href: 'mailto:foo@gmail.com',
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={30} />,
      name: 'Resume',
      href: '/resume Apex.pdf',
      style: 'rounded-br-md',
      download: true,
    },
    {
      id: 5,
      icon: <BsInstagram size={30} />,
      name: 'Instagram',
      href: 'https://instagram.com/r_saisurya_2316?igshid=MzNlNGNkZWQ4Mg==',
    },
  ];

  const handleLinkHover = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="social-links-container fixed top-[50%] transform -translate-y-1/2 right-0 p-4 z-50">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}
            onMouseEnter={() => handleLinkHover(link.id)}
            onMouseLeave={() => handleLinkHover(null)}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white relative"
              download={link.download ? '' : undefined}
              target={link.download ? '_blank' : undefined}
              rel={link.download ? 'noreferrer' : undefined}
            >
              <span className="icon">{link.icon}</span>
              <span className={`name ${activeLink === link.id ? 'open' : ''}`}>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
