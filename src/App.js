import './index.scss'
import Game from "./components/Game";
import Result from "./components/Result";
import {useState} from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const question = questions[step];

  const onClickVariant = (index) => {
    if(question.correct === index) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setStep(step + 1);
  }


  return (
    <div className="App">
      { step !== questions.length ? (
          <Game step={step} question={question} onClickVariant={onClickVariant} questionsLength={questions.length}/>
      ) : (
          <Result countCorrectAnswers={correctAnswers} questionsLength={questions.length}/>
      )}
    </div>
  );
}

export default App;
