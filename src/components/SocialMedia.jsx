import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {

  const handleClick = () => {
    window.open("https://linkedin.com/in/andri-tanuwijaya");
  };
  
  return (
    <div className="app__social">
        <a href="https://github.com/andritanu28" rel="noopener noreferrer" target="_blank" >
          <div>
              <FaGithub />
          </div>
        </a>
        <a href="https://linkedin.com/in/andri-tanuwijaya" rel="noopener noreferrer" target="_blank" >
          <div >
              <BsLinkedin />
          </div>
        </a>
        <a href="https://www.instagram.com/andritanuuu/" rel="noopener noreferrer" target="_blank">
          <div>
              <BsInstagram />
          </div>
        </a>
    </div>
  )
}

export default SocialMedia