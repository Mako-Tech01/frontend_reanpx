import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants'

import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';

const skills = [
  {name: 'React', bgColor: '#edf2f8',  icon: images.figma},
  {name: 'Node', bgColor: '#edf2f8',  icon: images.sass},
  {name: 'Photoshop', bgColor: '#edf2f8',  icon: images.photoshop},
  {name: 'C#', bgColor: '#edf2f8',  icon: images.csharp},
  {name: 'Git', bgColor: '#edf2f8',  icon: images.git},
]

const experience = [
  {name: 'Web Developer',year: '2020',company: 'Whirlstone Energy', description: 'I was responsible for improving the website at Whirlstone Energy and well as managing day to day information of the site.'},
  {name: 'Software Developer',year: '2021', company: 'ZPCS', description: 'I led a team of four junior developers in proposing and partially developing a management system for the Zimbabwe Prisons And Correctional Services.'},
  {name: 'Graphic Designer',year: '2022', company: 'Aglocal Pvt Ltd', description: 'I developed a number artworks under Aglocal Private Limited.'},
  {name: 'React Developer',year: '2022', company: 'MSU', description: 'I have a number of React applications to my good name. They include an online music player application, a gymn web management system as well as a number of individual portfolios.'},
]

const Skills = () => {
  //const [experience, setExperience] = useState([]);
  //const [skills, setSkills] = useState([]);
  return (
    <>
    <h2 className='head-text'>Skills & Experience</h2>

    <div app__skills-container>
      <motion.div className='app__skills-list'>
        {skills?.map((skill, index) => (
          
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{ duration: 0.5}}
            className='app__skills-item app__flex'
            key={skills.name + index}
            >
              <div className='app__flex' style={{backgroundColor:'#edf2f8'}}>
                <img src={skill.icon} alt={skill.name} />
                
              </div>
              <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className='app__skills-exp'>
          {experience?.map((experience, index) => (

            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
              </div>
            <motion.div className='app__skills-exp-works'>
              <motion.div
                  whileInView={{opacity: [0, 1]}}
                  transition={{ duration: 0.5}}
                  className='app__skills-exp-work'
                  data-tip
                  data-for={experience.name}
                  key={experience.name }
                  >
                    <h4 className='p-text'>{experience.name}</h4>
                    <p className='p-text'>{experience.company}</p>
                 </motion.div>
                  <div
                    id={experience.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                 >
                  <p className='p-text'>{experience.description}</p>
                  </div>
                </motion.div>
              
            </motion.div>
            ))}
            
          
      </motion.div>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);
