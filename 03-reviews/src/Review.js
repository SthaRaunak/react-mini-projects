import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  
  const [index, setIndex] = useState(0);
  console.log(people.length)
  const { name, job, image, text } = people.at(index)

  const handleSurprise = () => {
    const randomGen = Math.floor(Math.random() * people.length);
    if (randomGen == index) {
      return handleSurprise();
    } else {
      setIndex(randomGen)
    }
  }

  return (
    <>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => setIndex((index) => index == 0 ? (people.length - 1) : index - 1)}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => setIndex((index) => index >= (people.length - 1) ? 0 : index + 1)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={(handleSurprise)}>suprise me</button>
      </article>

    </>
  )
};

export default Review;

