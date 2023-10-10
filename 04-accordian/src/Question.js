import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info, curOpen, setCurOpen, num }) => {

  const Open = num === curOpen;

  const handleShow = () => {
    setCurOpen(Open ? null : num)
  }
  return (
    <article className='question'>
      <header><h4>{title}</h4> <button className='btn' onClick={handleShow}>{Open ? <AiOutlineMinus /> : <AiOutlinePlus />}</button></header>
      <p> {Open && info}</p>
    </article>
  )
};

export default Question;
