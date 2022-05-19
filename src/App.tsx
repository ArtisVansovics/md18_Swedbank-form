import React, { useState } from 'react';
import './App.scss';

import Intro from './components/Intro/Intro';
import Question01 from './components/Questions/Question01/Question01';

const initialFormData = {
  name: '',
  surname: '',
  gender: '',
};

const App = () => {
  const [questionNr, setQuestionNr] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  console.log(questionNr);

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              {questionNr === 0 && (
                <Intro onClick={() => setQuestionNr(questionNr + 1)} />
              )}
              {questionNr === 1 && (
                <Question01
                  onPreviousClick={() => setQuestionNr(questionNr - 1)}
                  onNextClick={() => setQuestionNr(questionNr + 1)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
