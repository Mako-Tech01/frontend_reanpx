import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const brand = [
  {name: 'React',  imgUrl: images.nb},
  {name: 'Node', imgUrl: images.skype},
  {name: 'Node', imgUrl: images.spotify},
  {name: 'Photoshop', imgUrl: images.bolt},
];

const testimonials = [
  {name: 'Sarah', imgUrl: images.html},
  {name: 'Sarah', imgUrl: images.css},
];

const Testimonial = () => {
  
  const handleClick = (index) => { setcurrentIndex(index)};
  const [currentIndex, setcurrentIndex] = useState([0])
  return (
    <>
      <div className='app__testimonial-item app__flex'>
      <img src={images.html}/>
      <div className='app__testimonial-content'>
        <p className='p-text'>Makomborero is an awesome developer, great team spirit. Keep it up.</p>
        <div>
          <h4 className='bold-text'>Nyasha</h4>
          <h5 className='p-text'>UNILEVER</h5>
        </div>
      </div>
      </div>
      
      <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            <HiChevronLeft/>
          </div>
          <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0: currentIndex + 1)}>
            <HiChevronRight/>
          </div>
      </div>

      <div className='app__testimonial-brands app__flex'>
        {brand.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween'}}
            key={brand.imgUrl}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  "app__primarybg"
);
