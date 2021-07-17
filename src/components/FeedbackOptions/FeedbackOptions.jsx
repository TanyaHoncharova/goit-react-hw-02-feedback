import React from 'react';

const FeedbackOptions = ({onHandleGoodBtn, onHandleNeutralBtn, onHandleBadBtn}) => {
    return (
            <div className="BtnContainer">
                    <button type="button" onClick={onHandleGoodBtn} className="statBtn"> Good</button>
                <button type="button" onClick={onHandleNeutralBtn} className="statBtn"> Neutral</button>
                <button type="button" onClick={onHandleBadBtn} className="statBtn"> Bad </button>
            </div>
    )
};

export default FeedbackOptions;