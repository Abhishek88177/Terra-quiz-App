import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Questions = () => {

    const {skill} = useParams();
    console.log(skill)
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8086/api/questions/skill/${skill}`).then(function (response) {
            setQuestionList(response.data)
            console.log(questionList)
        })
    }, [])

    return(
        <>
    <h1 className="text-center text-dark my-4">{skill} Answers</h1>
        <div className="container">
            <div className="col-md-6 mx-auto">

         
             <div className="mt-4">
                    {
                        questionList.map((item,index) => {
                            return(
                                <>
                                    <p># <b>{item.question}</b></p>
                                    <p className="ms-3">1. {item.option2}</p>
                                    <p className="ms-3">2. {item.option1}</p>
                                    <p className="ms-3">3. {item.option3}</p>
                                    <p className="ms-3">4. {item.option4}</p>
                                    <h5>Correct Option : {item.correctOption}</h5>
                                    <hr className="my-4"/>
                                </>
                            )
                        })
                    }
            <div>
               
            </div>

            <Link to='/dashboard'>
                <button className="btn btn-dark mb-5">
                    Back
                </button>
            </Link>
                    </div>

                    </div>
        </div>
        </>
    )
}

export default Questions;