import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,handleDelete}) => {
  const [ readMore ,setReadMore] = useState(false)
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}</h4>
  
      </div>
      <p>{readMore ? info : info.split(" ").slice(0,35).join(" ")}...
      
      <button onClick={()=>setReadMore((readMore)=> !readMore)}>{readMore ? "Show Less" : "Read More"}</button></p><button className='delete-btn' onClick={()=>handleDelete(id)}>Not interested</button>
    </footer>
  </article>;
};

export default Tour;
