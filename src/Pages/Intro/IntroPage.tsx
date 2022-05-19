import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
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
                onClick={() => navigate('/question=1')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
