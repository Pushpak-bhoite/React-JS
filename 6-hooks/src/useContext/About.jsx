import React, { useContext } from 'react';
import myContext from './CreateContext';

const About = () => {
  const detail = useContext(myContext);
  console.log(detail)
  return (
    <div>
      This is  {detail.name} ; 
    </div>
   )
}

export default About ;

