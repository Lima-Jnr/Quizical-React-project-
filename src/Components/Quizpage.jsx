import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(null);
  

  const fetchUrl = localStorage.getItem('fetchUrl');
  const fetchObj = JSON.parse(fetchUrl);
  const [timeLeft, setTimeLeft] = useState(fetchObj.timeNeeded * 60);
  
  //Using Useeffect to fetch the Questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${fetchObj.numberOfQuestion}&category=${fetchObj.category}&difficulty=${fetchObj.difficulty}&type=${fetchObj.type}`
        );

        setQuestions(
          response.data.results.map((question) => ({
            ...question,
            choices: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
          }))
        );
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

//Timer fx
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      endQuiz();
      setTimeLeft(0);
    }
  }, [timeLeft]);


//End Quiz fx
  const endQuiz = () => { 
  setCurrentQuestion(currentQuestion.length + 1);
  setTimeLeft(0)
         };


//To select  an swer from the choices
  const handleAnswerClick = (selectedAnswer) => {
    if (answerSelected === null) {
      if (selectedAnswer === questions[currentQuestion].correct_answer) {
        setScore(score + 1);
      }

      setAnswerSelected(selectedAnswer);
    }
  };

  //Previous and next button
  const previous = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswerSelected(null);
    }
    
  };

  const next = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerSelected(null);
    }
       if(currentQuestion > questions.length){
      endQuiz();
     }
  };

//Fx for Try again button so E go fit reload
  const tryAgain = () => {
    window.location.reload();
  };


  return (
    <div className='display'>
      {timeLeft > 0 ? <div className='timer'>Time Left: {timeLeft} seconds</div> : <div className='timer'>Time Exhausted!!!</div>  }
      <div>
        {currentQuestion < questions.length ? (
          <div className='question-container'>
            <h2>Question {currentQuestion + 1} / {questions.length} </h2>
            <h1 className='question'>{questions[currentQuestion].question}</h1>
            <ul className='answer'>
              {questions[currentQuestion].choices.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  className={answer === answerSelected ? 'selected' : 'ans'}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div>
             
              <button className='quiz-btn' onClick={() => previous()}>
                Previous
              </button>
              <button className='quiz-btn' onClick={() => next()}>
                Next
              </button>
            </div>
          </div>
        ) : (
        
          <div>
            <endQuiz/>
            <h2 className='question'>Quiz Completed!</h2>
            
            <h3>Your Score: </h3>
            <h2>
              {score} / {questions.length}
            </h2>
            <button className='firstpage-btn' onClick={tryAgain}>
              Try again!
            </button>
            <Link to={'/'}>
              <button className='firstpage-btn'>Homepage</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;


