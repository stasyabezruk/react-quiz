import React from "react";
import AnswerItem from "./AnswerItem";

const AnswersList = ({answers, onAnswerClick, answerState}) => (
    <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0
    }}>
        {answers.map((answer, idx) => {
            return (
                <AnswerItem
                    key={idx}
                    answer={answer}
                    onAnswerClick={onAnswerClick}
                    answerState={answerState ? answerState[answer.id] : null}
                />
            )
        })}
    </ul>
);

export default AnswersList;
