import React from 'react'
import './index.css'
import { Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const HeavyCard = ({Imge, title, disc, to}) => {
  const navigate = useNavigate();
  const handleJoinclick = () => {
    navigate(to);
    // console.log("I have been clicked");
  }

  return (
    <div className='wraper'>
        {/* Images ka div */}
      <div className='imageContainer'>
        <img src={require(`./${Imge}`)} alt='this should be an image'/>
      </div>
      {/* content ka div */}
      <div className='Coursecontent'>
        <span>{title}</span>
        <p>{disc}</p>
      </div>
      {/* buttons ka div */}
      <div className="Coursebuttons">
        <button onClick={handleJoinclick}>
          Join
        </button>
        <p>or</p>
        <a>Explore Course</a>
      </div>
    </div>
  )
}

export default HeavyCard
