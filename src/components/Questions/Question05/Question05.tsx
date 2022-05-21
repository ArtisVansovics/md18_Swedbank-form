import React, { FC } from 'react';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question05Props = {
  selectedEducation: string;
  errorMessage: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onSelection: (value: string) => void;
}

const educationCategories = ['Primary', 'Secondary', 'Vocational', 'Higher education', 'College'];

const Question05:FC<Question05Props> = ({
  onNextClick, onPreviousClick, onSelection, errorMessage, selectedEducation,
}) => (
  <div className="form">
    <h3 className="small-title">
      Fifth question
    </h3>
    <div className="form__group form__group--narrow">
      <label htmlFor="educationId" className="label">
        Education level
        <br />
        <select
          className={`select ${errorMessage && 'error-input'}`}
          name="educationSelect"
          id="educationId"
          value={selectedEducation}
          onChange={(e) => onSelection(e.target.value)}
        >
          <option
            disabled
            label="Select your education"
          />
          {educationCategories.map((education) => (
            <option
              key={education}
              value={education}
            >
              {education}
            </option>
          ))}
        </select>
      </label>
      {errorMessage && <p className="error">{errorMessage}</p>}
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

export default Question05;
