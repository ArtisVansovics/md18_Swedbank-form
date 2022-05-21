import React, { useState } from 'react';
import './App.scss';

import Intro from './components/Intro/Intro';
import Question01 from './components/Questions/Question01/Question01';

const initialFormData = {
  name: '',
  gender: '',
};

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handlePrevious = () => {
    setError('');
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleNext = (value: string) => {
    setError('');

    if (!value) {
      setError('This field is mandatory');

      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  console.log(formData);

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              {currentQuestion === 0 && (
                <Intro onClick={() => setCurrentQuestion(currentQuestion + 1)} />
              )}
              {currentQuestion !== 0 && (
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                  <div className="box">
                    {currentQuestion === 1 && (
                    <Question01
                      name={formData.name}
                      errorMessage={error}
                      onInputName={(value) => {
                        setFormData({ ...formData, name: value });
                      }}
                      onPreviousClick={() => handlePrevious()}
                      onNextClick={() => handleNext(formData.name)}
                    />
                    )}
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
