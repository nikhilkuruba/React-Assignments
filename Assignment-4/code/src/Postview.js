import React from 'react';
import './Postview.css';
import Logo from './images/logo.png';
import Camera from './images/camera.png';
import heart from './images/heart.png';
import options from './images/more.png';
import tag from './images/tag.png';

import { useState } from 'react';
import axios from 'axios';

const Postview = () => {
  const [post, setPost] = useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3004/user').then(res => {
      setPost(res.data)
    })
  }, [])

  const date = new Date().toDateString();
  return (
    <div className="site-container">

      <header>
        <div className='title'>
          <img id='logo' src={Logo} height='40px' alt='logo' />
          <h1>Instaclone</h1>
        </div>
        <img id='camera' src={Camera} height='40px' alt='camera' />
      </header>

      <div className='content'>
        {post.map(item => {
          return (
            <div className='card'>

              
              <div className='info'>
                <h3 className='name'>{item.name}<span className='location'>{item.location}</span></h3>
                <img src={options} alt='options' />
              </div>
              
              <img className='user-img' src={item.PostImage} alt='user-posted-img' />
              
              <div className='post-info'>
                <div><div><img className='icons' src={heart} alt='heart' />
                  <img className='icons' src={tag} alt='tag' /></div>
                  <span>{item.likes} likes</span></div>
                <div><p className="date">{date}</p></div>
              </div>

              <div className='description'>{item.description}</div>


            </div>
          )
        })}

      </div>

    </div>
  );
}

export default Postview;
