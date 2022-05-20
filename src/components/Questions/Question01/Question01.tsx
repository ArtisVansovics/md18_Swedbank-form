import React, { FC } from 'react';
import ButtonPrimary from '../../Button/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question01Props = {
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const Question01:FC<Question01Props> = ({ onNextClick, onPreviousClick }) => (
  <div className="box">
    <h1 className="title">
      01: Your name
    </h1>
    <input
      type="text"
      placeholder="Enter your first name"
      required
    />
    <div className="box__row">
      <ButtonSecondary title="Previous" onClick={onPreviousClick} />
      <ButtonPrimary title="Next" onClick={onNextClick} />
    </div>
  </div>
);

export default Question01;
