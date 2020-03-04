import React, {Component} from "react";
import cls from './QuizList.module.scss';
import {NavLink} from "react-router-dom";

class QuizList extends Component {
    renderQuizes() {
        return [1,2,3].map((quiz, idx)=> {
            return (
                <li key={idx}>
                    <NavLink to={'/quiz/' + quiz}>Quiz {quiz}</NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={cls.QuizList}>
                <div>
                    <h1>Quiz list</h1>
                </div>

                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>
        )
    }
};

export default QuizList;
