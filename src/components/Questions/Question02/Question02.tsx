import React, { FC } from 'react';
import ButtonPrimary from '../../Button/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question02Props = {
  address: string;
  errorMessage: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onInputAddress: (value: string) => void;
}

const Question02:FC<Question02Props> = ({
  onNextClick, onPreviousClick, onInputAddress, address, errorMessage,
}) => (
  <div className="form">
    <h3 className="small-title">
      Step two
    </h3>
    <div className="form__group">
      <label htmlFor="addressId" className="label">
        Real estate address
        <br />
        <textarea
          className={`input input--textarea ${errorMessage && 'error-input'}`}
          id="addressId"
          value={address}
          onChange={(e) => onInputAddress(e.target.value)}
          rows={2}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
      </label>
    </div>
    <div className="button-row">
      <ButtonSecondary title="Previous" onClick={onPreviousClick} />
      <ButtonPrimary title="Next" onClick={onNextClick} />
    </div>
  </div>
);

export default Question02;
