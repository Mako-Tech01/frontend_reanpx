import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';

const abouts = [
  {title: 'Software Engineer', description: 'I have an Upper Second Class Degree in Software Engineering', imgUrl: images.about03},
  {title: 'Graphic Designer', description: 'I have a 4 years professional experience in Graphic Designing using Adobe Products, Photoshop, Illustrator and Adobe AE', imgUrl: images.about02},
  {title: 'Web Developer', description: 'My work in web development speaks for itself.', imgUrl: images.about01},
  {title: 'Mobile Developer', description: 'Get in touch for some of the most amazing modern mobile applications.', imgUrl: images.about04},
]

const About = () => {
  //const [abouts, setAbouts] = useState([]);

  //useEffect(() => {
   // const query = '* [_type == "abouts"]';

    //client.fetch(query)
    //  .then((data) =>  setAbouts(data));
      
 // }, []);

  return (
    <>
      <h2 className='head-text'> I Know that <span> Good Development</span><br />means <span> Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);
