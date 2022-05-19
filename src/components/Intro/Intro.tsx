import React, { FC } from 'react';
import Button from '../Button/Button';

type IntroProps = {
  onClick: () => void;
}

const Intro:FC<IntroProps> = ({ onClick }) => (
  <div className="box">
    <h1 className="page__title">
      Home Small loan
    </h1>
    <h2>For renovating or buying a property</h2>
    <p>Until 31.05.2022. loan agreement fee free of charge.</p>
    <ul>
      <li>Loan from 5000 to 20 000 EUR</li>
      <li>No mortgage placed on real estate</li>
      <li>No down payment required</li>
      <li>Money available in your account immediately after signing the contract</li>
    </ul>
    <Button
      title="Fill out the application"
      onClick={onClick}
    />
  </div>
);

export default Intro;
