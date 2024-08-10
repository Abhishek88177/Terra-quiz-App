import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../assets/question.css';
import '../assets/homepage.css'
import Result from "./Result";
import Navbar from "./Navbar";

const QuestionsPage = () => {

    const { id } = useParams();
    const [questionList, setQuestionList] = useState([]);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [count, setCount] = useState(0);
    const [finalSubmit, setFinalSubmit] = useState(false);

    const [correctOption , setCorrectOption] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [resultList, setResultList] = useState([""]);
    const [showAnswer , setShowAnswer] = useState(false);

//     const [time, setTime] = useState(-20); // Initial 20 seconds for the first question

//   useEffect(() => {
//     // Add 20 seconds whenever the questionIndex changes
//     setTime(prevTime => prevTime + 20);
//     if(time===0){
//         setCurrentIndex(prevIndex => prevIndex + 1)
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     // Update the timer every second
//     const timer = setInterval(() => {
//       setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
//     }, 1000);

//     // Clear the interval when the component is unmounted or time is 0

//     return () => clearInterval(timer);
//   }, []);

    useEffect(() => {
        axios.get(`http://localhost:8086/api/questions/skill/${id}`).then(function (response) {
            setQuestionList(response.data)
            console.log(questionList)
        })
    }, [])

    const handleAnswerSelection = (event) => {
        setSelectedAnswer(event.target.value);
        console.log('Selected Answer:', event.target.value);
        
    };

    const handleSubmitAnswer = () => {
        const selectedQuestion = questionList.find(item => item.option1 === selectedAnswer || item.option2 === selectedAnswer || item.option3 === selectedAnswer || item.option4 === selectedAnswer);
        if (selectedQuestion) {
            console.log(questionList[selectedQuestion.id]);
            console.log('Selected Question ID:', selectedQuestion.id);

        axios.get(`http://localhost:8086/api/questions/correctoption/${selectedQuestion.id}`).then(function (response) {
            const correctOptionFromServer = response.data;
            console.log("correct answer = " + correctOptionFromServer);

            if (correctOptionFromServer.toString() === selectedAnswer.toString()) {
                setCount(count+ 1);
                console.log(count);
                console.log("last option")
            } else {
                setWrongCount(wrongCount +1);
                console.log("wrong");
            }
        }).catch(function (error) {
            // Handle error
            console.error('Error fetching correct option:', error);
        });

        } 
        else {
            console.log('No question selected.');
        }

        // setCurrentIndex(prevIndex => prevIndex + 1);

        
        
    };



    const openNextQuestion = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        handleSubmitAnswer();
        setCorrectOption()
    };

    const openPrevQuestion = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
        if(count > 0){
            setCount(count- 1);
        }
        if(wrongCount > 0){
            setWrongCount(wrongCount -1);
        }
        setCorrectOption()

    };

    const finalResult = () => {
        
        handleSubmitAnswer(); 
        setFinalSubmit(true);

        console.log(resultList)
    }

    const printCorrectOption = (id) => {
      let checkItem = questionList.find(item => item.id == id)
      console.log(checkItem.correctOption); 
      setCorrectOption(checkItem.correctOption);
    }
    return (
        <div className='col-md-12 p-4'>
    <div className='main-section position-relative bg-dark pb-5'>

        <Navbar />

        <h2 className="text-center text-light">{id} QUIZ</h2>


            <div className="container">
                <div className="col-md-8 mx-auto questionbox ">

                {
                    finalSubmit ? 
                    <Result 
                    correct={count}
                    wrong = {wrongCount}
                    skill = {id}
                    />
                        :
                        <>
                    {questionList.length > 0 && (
                        <div className="mt-4">
                            <p>• {questionList[currentIndex].question}</p>
                            <div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="answer"
                                        id="answer1"
                                        value={questionList[currentIndex].option1}
                                        checked={selectedAnswer === questionList[currentIndex].option1}
                                        onChange={handleAnswerSelection}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="answer1">{questionList[currentIndex].option1}</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="answer"
                                        id="answer2"
                                        value={questionList[currentIndex].option2}
                                        checked={selectedAnswer === questionList[currentIndex].option2}
                                        onChange={handleAnswerSelection}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="answer2">{questionList[currentIndex].option2}</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="answer"
                                        id="answer3"
                                        value={questionList[currentIndex].option3}
                                        checked={selectedAnswer === questionList[currentIndex].option3}
                                        onChange={handleAnswerSelection}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="answer3">{questionList[currentIndex].option3}</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="answer"
                                        id="answer4"
                                        value={questionList[currentIndex].option4}
                                        checked={selectedAnswer === questionList[currentIndex].option4}
                                        onChange={handleAnswerSelection}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="answer4">{questionList[currentIndex].option4}</label>
                                </div>
                            </div>

                            <div className="buttonsset">
                                <button
                                    // onClick={handleSubmitAnswer}
                                    onClick={openPrevQuestion}
                                    className="btn btn-dark my-2"
                                    disabled={currentIndex === 0}
                                >Previous</button>

                                    <button
                                            onClick={() => printCorrectOption(questionList[currentIndex].id)}
                                            // onClick={openNextQuestion} 
                                            className="btn btn-dark my-2 me-5"

                                        >
                                            Check
                                        </button>

                                {
                                    currentIndex === questionList.length-1 ? (
                                        <button
                                            onClick={finalResult}
                                            // onClick={openNextQuestion} 
                                            className="btn btn-dark my-2 me-5"

                                        >
                                            Submit Answer
                                        </button>
                                    ) : (
                                        
                                        <button
                                            // onClick={handleSubmitAnswer}
                                            onClick={openNextQuestion}
                                            className="btn btn-dark my-2 me-5"
                                        // disabled={currentIndex === questionList.length - 1}
                                        >
                                            Next
                                        </button>

                                    )
                                }

                            </div>

                            {
                                correctOption ? <h3>Correct Option : {correctOption}</h3>
                                :
                                <></>
                            }


                        </div>
                    )}
</>
}

                </div>
               
            </div>
        </div>
        </div>
    )
}

export default QuestionsPage;