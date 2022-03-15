import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import resume from '../../assets/andritanu-resume-ats.pdf';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Andri</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
          </div>
          <a href={resume} className="text-decoration:none" target="_blank" rel="noopener noreferrer" download="andritanu_resume.pdf">
            <div className="tag-btn app__flex">
            <p className="p-text">Download CV</p>
            </div>
          </a>
          {/* <button className="tag-cmp app__flex" onClick={resume}>
            Downlod CV
          </button> */}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.profileheader} alt="profile_bg"
        />
        {/* <img src={images.profileheader} alt="profile_bg" /> */}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>


      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
       {[images.react, images.angular, images.html].map((circle, index) => (
         <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
         </div>
       ))} 
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');