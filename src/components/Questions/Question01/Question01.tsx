import React, { FC } from 'react';
import Button from '../../Button/Button';

type Question01Props = {
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const Question01:FC<Question01Props> = ({ onNextClick, onPreviousClick }) => (
  <div className="box">
    <h1>01: Your name</h1>
    <input
      type="text"
      placeholder="Enter your first name"
      required
    />
    <div className="box__row">
      <Button title="Previous" onClick={onPreviousClick} />
      <Button title="Next" onClick={onNextClick} />
    </div>
  </div>
);

export default Question01;
