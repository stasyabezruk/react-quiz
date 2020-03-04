import React, {Component} from "react";
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    state = {
            results: {}, //{[id]: success || error}
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            quiz: [
                {
                    id: 1,
                    question: 'WHat color?',
                    rightAnswerId: 2,
                    answers: [
                        { text: 'Black', id: 1 },
                        { text: 'Red', id: 2 },
                        { text: 'Yellow', id: 3 },
                        { text: 'Green', id: 4 },
                        { text: 'Blue', id: 5 }

                    ]
                },
                {
                    id: 2,
                    question: 'When is Dnipro ?',
                    rightAnswerId: 3,
                    answers: [
                        { text: '1500', id: 1 },
                        { text: '1670', id: 2 },
                        { text: '1776', id: 3 },
                        { text: '1843', id: 4 },
                        { text: '1875', id: 5 }

                    ]
                }
            ]
        };

    onAnswerClickHandlers = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') return
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState(()=> {
                return {
                    answerState: {
                        [answerId]: 'success'
                    },
                    results
                }
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                   this.setState(()=> {
                       return {
                           isFinished: true
                       }
                   })
                } else {
                    this.setState((state, props)=> {
                        return {
                            activeQuestion:  state.activeQuestion + 1,
                            answerState: null
                        }
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState(()=> {
                return {
                    answerState: {
                        [answerId]: 'error'
                    },
                    results
                }
            });
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    };

    retryHandler = () => {
        this.setState((prevState) => {
            return {
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {}

            }
        })
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>

                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            /> :
                            <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                activeAnswers={this.state.quiz[this.state.activeQuestion].answers}
                                click={this.onAnswerClickHandlers}
                                quizLegnth={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                answerState={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;

