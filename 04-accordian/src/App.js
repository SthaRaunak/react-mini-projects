import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  const [questions, setQuestions] = useState(data);
  const [curOpen, setCurOpen] = useState(null);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {
            questions.map(
              (question,index) => (
                <SingleQuestion key={question.id} {...question} num={index+1} curOpen={curOpen} setCurOpen={setCurOpen}/>
              )

            )
          }
        </section>
      </div>
    </main>
  )
}

export default App;
