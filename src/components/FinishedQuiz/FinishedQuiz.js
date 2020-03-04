import React from "react";
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = ({results, quiz, onRetry}) => {
    const successCount = Object.keys(results).reduce((total, key)=> {
        if (results[key] === 'success') {
            total++
        }
        return total;
    }, 0);

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {quiz.map((quizItem, idx)=> {
                    const cls = [
                        'fa',
                        results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[results[quizItem.id]]
                    ];
                    return (
                        <li key={idx} className={cls.join(' ')}>
                            <strong>{idx +1}</strong>.&nbsp;
                            {quizItem.question}
                        </li>
                    )
                })}
            </ul>

            <p>Correct {successCount} out {quiz.length}</p>

            <div>
                <Button onClick={onRetry} type="primary">Repeat</Button>
                <Link to="/">
                    <Button  type="success">To list of test</Button>
                </Link>

            </div>
        </div>
    )
};

export default FinishedQuiz;
