import React, { useState } from 'react';
import './App.scss';
import Intro from './components/Intro/Intro';
import Question01 from './components/Questions/Question01/Question01';
import Question02 from './components/Questions/Question02/Question02';
import Question03 from './components/Questions/Question03/Question03';
import Question04 from './components/Questions/Question04/Question04';

const initialFormData = {
  name: '',
  address: '',
  purpose: '',
  householdInfo: [] as string[],
  employment: '',
};

const textErrorMessage = 'This field is mandatory';
const selectionErrorMessage = 'You must choose an option';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [hideHint, setHideHint] = useState(true);

  const filterOut = (value: string) => (
    setFormData({
      ...formData,
      householdInfo: [
        ...formData.householdInfo.filter((savedValue) => savedValue !== value)],
    })
  );

  const handleOptionSelection = (value: string) => {
    if (formData.householdInfo.includes(value)) {
      filterOut(value);
    } else setFormData({ ...formData, householdInfo: [...formData.householdInfo, value] });
  };

  const handlePrevious = () => {
    setError('');

    setHideHint(true);

    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = (value: string | string[], errorMessage: string) => {
    setError('');

    if (!value || value.length === 0) {
      setError(errorMessage);

      return;
    }

    setHideHint(true);

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
                      onPreviousClick={() => handlePrevious()}
                      onNextClick={() => handleNext(formData.name, textErrorMessage)}
                      onInputName={(value) => {
                        setFormData({ ...formData, name: value });
                      }}
                    />
                    )}
                    {currentQuestion === 2 && (
                      <Question02
                        address={formData.address}
                        errorMessage={error}
                        hideHint={hideHint}
                        onHint={() => setHideHint(!hideHint)}
                        onPreviousClick={() => handlePrevious()}
                        onNextClick={() => handleNext(formData.address, textErrorMessage)}
                        onInputAddress={(value) => {
                          setFormData({ ...formData, address: value });
                        }}
                      />
                    )}
                    {currentQuestion === 3 && (
                      <Question03
                        errorMessage={error}
                        onPreviousClick={() => handlePrevious()}
                        onNextClick={() => handleNext(formData.purpose, selectionErrorMessage)}
                        onRadioSelection={(value) => {
                          setFormData({ ...formData, purpose: value });
                        }}
                      />
                    )}
                    {currentQuestion === 4 && (
                      <Question04
                        errorMessage={error}
                        onPreviousClick={() => handlePrevious()}
                        onNextClick={() => handleNext(formData.householdInfo, selectionErrorMessage)}
                        onOptionSelection={(value) => handleOptionSelection(value)}
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
