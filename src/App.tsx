import { useState } from 'react'
import { questions } from './questions';

type QuestionProps = {
  question: string,
  answer: string
}

const Question = ({question, answer} : QuestionProps) =>  {
  const [hide, toggleHidden] = useState(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${hide ? 'blurred':'visible'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!hide)}>Toggle Answer</button>
      </footer>
    </article>
  );
}

function App() {

  return (
    <main>
      {questions.map(q => <Question key={q.id} question={q.question} answer={q.answer}/>) }
    </main>
  )
}

export default App
