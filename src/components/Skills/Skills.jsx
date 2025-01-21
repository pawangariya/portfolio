import React from 'react';
import './Skills.css';
import UIDesign from '../../Assets/ui-design.png'
import WebDesign from '../../Assets/calendar.png'
import Api from '../../Assets/browser.png'
const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className="skillDesc">I am a skilled web development with experience in creating visually appealing and user friendly websites Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perferendis.</span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="" className='skillBarImg' />
            <div className="skillBarText">
                <h2>UI Design</h2>
                <p>This is a demo text, you can write your own content here.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="" className='skillBarImg' />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>This is a demo text, you can write your own content here.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={Api} alt="" className='skillBarImg' />
            <div className="skillBarText">
                <h2>API Integration</h2>
                <p>This is a demo text, you can write your own content here.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
