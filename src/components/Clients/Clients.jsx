import React from 'react';
import './Clients.css'
import Walmart from '../../Assets/Walmart1.png';
import Adobe from '../../Assets/adobe.png';
import Microsoft from '../../Assets/microsoft.png';
import FacebookIcon from '../../Assets/facebook_5968764.png'
import TwitterIcon from '../../Assets/twitter_3670151.png'
import YoutubeIcon from '../../Assets/youtube_3670147.png'
import InstagramIcon from '../../Assets/instagram_2111463.png'

const Clients = () => {
  return (
    <section id='contactPage'>
    <div className="clients">
      <h1 className="contactPageTitle">My Clients</h1>
      <p className="clientDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta necessitatibus praesentium, quod quae ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, alias?
      </p>
      <div className="clientImgs">
          <img src={Walmart} alt="" className="clientImg" />
          <img src={Adobe} alt="" className="clientImg" />
          <img src={Microsoft} alt="" className="clientImg" />
      </div>
    </div>
    <div className="contact">
        <div className="contactPageTitle">Contact Me</div>
        <span className="contactDesc">Please fill out the for below to discuss any work opportunities.</span>
        <form className='contactForm'>
            <input type="text" className='name' placeholder='Your Name' />
            <input type="email" className='email' placeholder='Your Email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="" className="link" />
                <img src={TwitterIcon} alt="" className="link" />
                <img src={YoutubeIcon} alt="" className="link" />
                <img src={InstagramIcon} alt="" className="link" />
            </div>
        </form>
    </div>
  </section>
  )
}

export default Clients
