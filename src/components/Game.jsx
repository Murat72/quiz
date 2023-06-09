import React from 'react';

const Game = ({step, question, onClickVariant, questionsLength}) => {
    const percentage = Math.round((step / questionsLength) * 100)
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) =>
                        <li onClick={() => onClickVariant(index)} key={index}>{text}</li>)
                }
            </ul>
        </>
    );
};

export default Game;