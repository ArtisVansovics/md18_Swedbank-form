import React, { FC } from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

type SummaryProps = {
  name: string;
  address: string;
  purpose: string;
  householdInfo: string[];
  education: string;
  onPreviousClick: () => void;
}

const Summary:FC<SummaryProps> = ({
  householdInfo, education, name, purpose, address, onPreviousClick,
}) => (
  <div className="summary">
    <h2 className="sub-title">
      Summary of your application
    </h2>
    <ul className="summary__list">
      <li className="summary__item">
        <div className="summary__row">
          <p>
            Full name
          </p>
          <p>
            {name}
          </p>
        </div>
      </li>
      <li className="summary__item">
        <div className="summary__row">
          <p>
            Real estate address
          </p>
          <p>
            {address}
          </p>
        </div>
      </li>
      <li className="summary__item">
        <div className="summary__row">
          <p>
            Loan purpose
          </p>
          <p>
            {purpose}
          </p>
        </div>
      </li>
      <li className="summary__item">
        <div className="summary__row">
          <p>
            Information on household
          </p>
          <div className="summary__box">
            {householdInfo.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </li>
      <li className="summary__item">
        <div className="summary__row">
          <p>
            Education level
          </p>
          <p>
            {education}
          </p>
        </div>
      </li>
    </ul>
    <div className="button-row">
      <ButtonSecondary
        title="Previous"
        onClick={onPreviousClick}
      />
      <ButtonPrimary title="Submit" />
    </div>
  </div>
);

export default Summary;
