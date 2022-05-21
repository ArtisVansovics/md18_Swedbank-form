import React, { FC } from 'react';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question03Props = {
  isPurchaseChecked: boolean;
  isRenovationChecked: boolean;
  errorMessage: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onRadioSelection: (value: string) => void;
}

const Question03:FC<Question03Props> = ({
  onNextClick, onPreviousClick, onRadioSelection, errorMessage, isPurchaseChecked, isRenovationChecked,
}) => (
  <div className="form">
    <h3 className="small-title">
      Third question
    </h3>
    <div className="form__group form__group--narrow">
      <p>Loan purpose</p>
      <label htmlFor="purchaseId" className="label label--radio">
        <input
          className={`label--radio__input ${errorMessage && 'error-input'}`}
          type="radio"
          name="radioPurpose"
          id="purchaseId"
          value="Purchase of housing"
          onChange={(e) => onRadioSelection(e.target.value)}
          checked={isPurchaseChecked}
        />
        Purchase of housing
      </label>
      <label htmlFor="renovationId" className="label label--radio">
        <input
          className={`label--radio__input ${errorMessage && 'error-input'}`}
          type="radio"
          name="radioPurpose"
          id="renovationId"
          value="Housing renovation or repair"
          onChange={(e) => onRadioSelection(e.target.value)}
          checked={isRenovationChecked}
        />
        Housing renovation or repair
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

export default Question03;
