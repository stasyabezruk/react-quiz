import React from "react";
import AnswersList from "./AnswersList/AnswersList";
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = ({activeAnswers, question, click, quizLegnth, answerNumber, answerState}) => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{answerNumber}. {question}</strong>
            </span>
            <small>{answerNumber} из {quizLegnth}</small>
        </p>
        <AnswersList
            answerState={answerState}
            answers={activeAnswers}
            onAnswerClick={click}
        />
    </div>
);

export default ActiveQuiz;
