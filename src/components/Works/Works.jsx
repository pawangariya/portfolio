import React from 'react';
import './Works.css'
import portfolio from '../../Assets/portfolio.jpg'
import portfolio1 from '../../Assets/portfolio1.jpg'
import portfolio2 from '../../Assets/portfolio2.jpg'
import portfolio3 from '../../Assets/portfolio3.jpg'
import portfolio4 from '../../Assets/portfolio4.jpg'
import portfolio5 from '../../Assets/portfolio5.jpg'


const Works = () => {
  return (
    <section id='works'>
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='worksDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere ipsam debitis, doloremque dignissimos laboriosam doloribus amet minima dicta est nisi illo, non ea, ullam quibusdam sint facilis blanditiis. Quibusdam!</span>
        <div className="worksImgs">
            <img src={portfolio} alt="" className="worksImg" />
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            <img src={portfolio4} alt="" className="worksImg" />
            <img src={portfolio5} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works
