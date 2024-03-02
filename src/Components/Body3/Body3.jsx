import React from 'react'
import './body3.css'
import {CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect,useState } from 'react';
function Body3() {
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the percentage value gradually
      setPercentage(prevPercentage => {
        const newValue = prevPercentage + 30;
        return newValue > 100 ? 100 : newValue;
      });
      setPercentage2(prevPercentage => {
        const newValue = prevPercentage + 30;
        return newValue > 100 ? 73 : newValue;
      });
     
      setPercentage3(prevPercentage => {
        const newValue = prevPercentage + 70;
        return newValue > 100 ? 35 : newValue;
      });
    }, 1000); // Update every second
    const interval2 = setInterval(() => {
      // Increase the percentage value gradually
      setPercentage4(prevPercentage => {
        const newValue = prevPercentage + 60;
        return newValue > 100 ? 60 : newValue;
      });
    }, 1000); // Update every second
   



    // // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='container mt-5 bg-dark'>
        <div>
        <h1 className='skills'>Our Company Skills</h1>
        <p className='para3 mt-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat est quis lorem tristique aliquet<br></br> cras quis tristique felis vitae eleifend sapien.</p>
        </div>
        <div>
        <div className='barcontainer'>
        <div className='progressbar'>
      <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={{
                            path: { stroke: 'orangered'}, 
                            trail: { stroke: '#d6d6d6' }, 
                            text: { fill: '#999999', fontSize: '16px' } 
                        }}/>
      <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={{
                            path: { stroke: 'orangered'}, 
                            trail: { stroke: '#d6d6d6' }, 
                            text: { fill: '#999999', fontSize: '16px' } 
                        }}/>
      <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={{
                            path: { stroke: 'orangered'}, 
                            trail: { stroke: '#d6d6d6' }, 
                            text: { fill: '#999999', fontSize: '16px' } 
                        }}/>
      <CircularProgressbar value={percentage4} text={`${percentage4}%`} styles={{
                            path: { stroke: 'orangered'}, 
                            trail: { stroke: '#d6d6d6' }, 
                            text: { fill: '#999999', fontSize: '16px', height:100, width:100} 
                        }}/>


    </div>
</div>
        </div>
    </div>
  )
}

export default Body3