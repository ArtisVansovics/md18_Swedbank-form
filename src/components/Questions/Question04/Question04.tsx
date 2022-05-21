import React, { FC } from 'react';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question04Props = {
  isChildrenChecked: boolean;
  isDependantsChecked: boolean;
  errorMessage: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onOptionSelection: (value: string) => void;
}

const Question04:FC<Question04Props> = ({
  onNextClick, onPreviousClick, onOptionSelection, errorMessage, isDependantsChecked, isChildrenChecked,
}) => (
  <div className="form">
    <h3 className="small-title">
      Fourth question
    </h3>
    <div className="form__group form__group--narrow">
      <p>Information on household</p>
      <label htmlFor="childrenId" className="label label--checkbox tooltip">
        <input
          className={`label--checkbox__input ${errorMessage && 'error-input'}`}
          type="checkbox"
          name="checkboxHousehold"
          id="childrenId"
          value="Household has children"
          onChange={(e) => onOptionSelection(e.target.value)}
          checked={isChildrenChecked}
        />
        Household has children
        <p className="tooltip__text">Children up to 18 years of age</p>
      </label>
      <label htmlFor="dependantsId" className="label label--checkbox">
        <input
          className={`label--checkbox__input ${errorMessage && 'error-input'}`}
          type="checkbox"
          name="checkboxHousehold"
          id="dependantsId"
          value="Household has dependants"
          onChange={(e) => onOptionSelection(e.target.value)}
          checked={isDependantsChecked}
        />
        Household has dependants
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

export default Question04;
