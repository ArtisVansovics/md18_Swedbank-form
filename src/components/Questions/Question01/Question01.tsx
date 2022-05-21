import React, { FC } from 'react';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question01Props = {
  name: string;
  errorMessage: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onInputName: (value: string) => void;
}

const Question01:FC<Question01Props> = ({
  onNextClick, onPreviousClick, onInputName, name, errorMessage,
}) => (
  <div className="form">
    <h3 className="small-title">
      Step one
    </h3>
    <div className="form__group">
      <label htmlFor="nameId" className="label">
        Full name
        <br />
        <input
          className={`input ${errorMessage && 'error-input'}`}
          type="text"
          id="nameId"
          value={name}
          onChange={(e) => onInputName(e.target.value)}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
      </label>
    </div>
    <div className="button-row">
      <ButtonSecondary
        title="Previous"
        onClick={onPreviousClick}
      />
      <ButtonPrimary title="Next step" onClick={onNextClick} />
    </div>
  </div>
);

export default Question01;
