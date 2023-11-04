import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants'

import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';

 const filterWork = [
  {title: 'Web Development', description: '', tag: 'UI/Ux', imgUrl: images.about01},
  {title: 'Graphic Designing', description: '',tag: 'Mobile App', imgUrl: images.about02},
  {title: 'Software Development', description: '', tag: 'Web App', imgUrl: images.about03},
  {title: 'Mobile Development', description: '', tag: 'Graphicx', imgUrl: images.about04},
  ]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1});
  const [ works, setWorks] = useState([]);
  //const [filterWork, setFilterWork] = useState();

  useEffect(() => {
    const query = '*[_type == "works]';
    
  }, [])
   

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setanimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setanimateCard([{y:0, opacity: 1}]);
    }, 500)
  }
  return (
    <>
    
     <h2 className='head-text'> My creative <span> Portfolio</span> Section</h2>

     <div className='app__work-filter'>
        {[ 'UI/UX', 'Web App', 'Mobile App', 'Software Dev', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
     </div>

     <motion.div
      animate={animateCard}
      transition={{ duration: 0.5, delayChildren: 0.5}}
       className='app__work-portfolio'
     >
      {filterWork.map((work, index) => (
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
          <img src={work.imgUrl} alt={work.title} />
            
          <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href='https://makosmusic.netlify.app/' target='https://albertonrecord.co.za/online-classifieds/classified/rn129326/' rel='https://albertonrecord.co.za/online-classifieds/classified/rn129326/r'>
              <motion.div
                whileInView={{scale: [0,1]}}
                whileHover={{ scale: [1, 0.9]}}
                transition={{ duration: 0.25 }}
                className='app__flex'
              >
                <AiFillEye/>
              </motion.div>
                </a>
                <a href='https://github.com/Mako-Tech01' target='_blank' rel='https://albertonrecord.co.za/online-classifieds/classified/rn129326/cd'>
              <motion.div
                whileInView={{scale: [0,1]}}
                whileHover={{ scale: [1, 0.9]}}
                transition={{ duration: 0.25 }}
                className='app__flex'
              >
                <AiFillGithub/>
              </motion.div>
                </a>
              </motion.div>
          </div>
          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>{work.title}</h4>
            <p className='p-text' style={{ marginTop: 10}}>{work.description}</p>

            <div app__work-tag app__flex> 
              <p className='p-text'>{filterWork.tag}</p>
            </div>
          </div>
        </div>
      ))}
      </motion.div>
      
    </>

  )
}
      

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
);
