import React, { FC } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/all';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../ButtonSecondary/ButtonSecondary';

type Question02Props = {
  address: string;
  errorMessage: string;
  hideHint: boolean;
  onPreviousClick: () => void;
  onNextClick: () => void;
  onInputAddress: (value: string) => void;
  onHint: () => void;
}

const Question02:FC<Question02Props> = ({
  onNextClick, onPreviousClick, onInputAddress, onHint, hideHint, address, errorMessage,
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
        <div className="hint" onClick={onHint}>
          <button className="hint__button">
            <MdOutlineKeyboardArrowDown />
            More information
          </button>
          <p className="hint__text" hidden={hideHint}>
            Please provide the accurate real estate address
            (country, parish or city/town, street, house and apartment number or house title).
            <br />
            1. If you wish to buy the property, please provide its address.
            <br />
            2. If you wish to renovate the property that you already own, please provide its address.
          </p>
        </div>
      </label>
    </div>
    <div className="button-row">
      <ButtonSecondary title="Previous" onClick={onPreviousClick} />
      <ButtonPrimary title="Next step" onClick={onNextClick} />
    </div>
  </div>
);

export default Question02;
