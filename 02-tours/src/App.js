import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {

    try {
      setLoading(true)
      const res = await fetch(url)
      const tours = await res.json();
      console.log(tours);
      setTours(tours);
      setLoading(false);

    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button onClick={()=>fetchTours()} className="btn">Refresh</button>
        </div>
      </main>
    )
  }

    const handleDelete = (id) => {
      console.log(id)
      const filteredTours = tours.filter((tour)=> tour.id != id);
      setTours(filteredTours)
    }
  
  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete}/>
    </main>
  );
}

export default App
