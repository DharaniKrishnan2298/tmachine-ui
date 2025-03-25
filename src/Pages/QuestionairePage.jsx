import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./QuestionairePage.css";

const QuestionairePage = () => {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timer, setTimer] = useState(30);
    const location = useLocation();
    const [mergeStep] = useState(location.state?.mergeStep || 0); 
    console.log("Current mergeStep in QuestionairePage:", mergeStep);

   
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        if (answer === currentQuestion.answer) {
            console.log("✅ Correct Answer");
        } else {
            console.log("❌ Incorrect Answer");
        }
    };

    const questionaires = [
        { question: "The CPU is responsible for executing instructions for the computer.", answer: true },
        { question: "Python is a statically typed language.", answer: false },
        { question: "Tuples in Python are immutable.", answer: true },
        { question: "Machine learning does not use statistics.", answer: false },
    ];
    const currentQuestion = questionaires[mergeStep % questionaires.length];

    const handleNext = () => {
        const isCorrect = selectedAnswer === currentQuestion.answer;
        const newMergeStep = isCorrect ? mergeStep + 1 : mergeStep;

        navigate("/chapter/1/1/1", { 
            state: { 
                mergeStep: newMergeStep, 
                showNewContent: isCorrect 
            } 
        });
    };

    return (
        <div className="true-false-container">
            <div className="sidebar">
                <h2>Python Course</h2>
                <div className="chapter-list">
                    <div className="chapter-item chapter-active">1</div>
                    <div className="chapter-item">2</div>
                    <div className="chapter-item">3</div>
                    <div className="chapter-item">4</div>
                    <div className="chapter-item">5</div>
                </div>
            </div>

            
            <div className="content">
                <div className="breadcrumb">
                    <span>Chapter - 1: Evaluate Mathematical Expressions &gt; </span>
                    <span>Topic - 1: Merge Two Lists Without Using... &gt; </span>
                    <span>Subtopic - 1: Combine two lists using loops...</span>
                </div>

                <div className="question-section">
                    <h2 className="true-false-header">True / False</h2>

                    <div className="question-box">
                        <p>{currentQuestion.question}</p>
                    </div>

                    <div className="progress-section">
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(timer / 30) * 100}%` }}></div>
                        </div>
                        <div className="timer">
                        <div 
    className="timer-circle" 
    style={{ 
        background: `conic-gradient(
            ${timer > 20 ? "#4caf50" : timer > 10 ? "#ffea00" : "#ff3d00"} 
            ${(timer / 30) * 360}deg, 
            #ddd ${(timer / 30) * 360}deg)`
    }}>
    <span>{timer}</span>
</div>

                        </div>
                    </div>

                    <div className="answer-buttons">
                        <button 
                            className={`answer-btn ${selectedAnswer === true ? "selected" : ""}`} 
                            onClick={() => handleAnswerSelection(true)}
                        >
                            True
                        </button>
                        <button 
                            className={`answer-btn ${selectedAnswer === false ? "selected" : ""}`} 
                            onClick={() => handleAnswerSelection(false)}
                        >
                            False
                        </button>
                    </div>
                    <button className="next-btn" disabled={selectedAnswer === null} onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionairePage;