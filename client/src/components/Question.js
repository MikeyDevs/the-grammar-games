import React from 'react'
import "./question.css"

const Button = {
  textAlign: 'center',
  margin: 20,
  backgroundColor: '#A0B9BF',
  color: 'white',
  fontFamily: 'Crimson Text'
}

const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit
}) => {
  return (
    <div>
      <h3 id="questiontext">{question.question}</h3>
      <ol type="a">
      {question.answers.map((answer, i) =>
        <li key={`${index}-${i}`}>
          <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
          {' '}
          <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
        </li>
      )}
      </ol>
      <button style={Button} className='btn' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Question