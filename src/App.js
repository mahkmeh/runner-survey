import React, { useState } from 'react';
import { ALL_QUESTIONS } from './components/Questions';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      city: '',
      weight: '',
      height: '',
      gender: '',
      dob: ''
    },
    answers: {}
  });

  const calculateProgress = () => {
    return ((step + 1) / ALL_QUESTIONS.length) * 100;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleAnswer = (questionId, answer) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  const renderWelcome = () => (
    <div className="welcome-container">
      <h1 className="question-title">{ALL_QUESTIONS[0].title}</h1>
      <p className="question-description">{ALL_QUESTIONS[0].description}</p>
      <button className="nav-button" onClick={() => setStep(1)}>
        Get Started
      </button>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="question-container">
      <h2 className="question-title">Personal Information</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        setStep(2);
      }}>
        {ALL_QUESTIONS[1].fields.map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            {field.type === 'radio' ? (
              <div className="radio-group">
                {field.options.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={field.name}
                      value={option}
                      checked={formData.personalInfo[field.name] === option}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                type={field.type}
                className="input-field"
                value={formData.personalInfo[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}
        <div className="navigation-buttons">
          <button type="button" className="nav-button" onClick={() => setStep(0)}>
            Back
          </button>
          <button type="submit" className="nav-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );

  const renderQuestion = (question) => {
    // Add safety checks for different question types
    if (!question) return null;

    // Handle different question types
    switch (question.type) {
      case 'INFO_PAGE':
        return (
          <div className="question-container">
            <button className="nav-button back" onClick={() => setStep(step - 1)}>
              Go back
            </button>
            <h2 className="question-title">{question.title}</h2>
            <div className="content">{question.content}</div>
            <div className="navigation-buttons">
              <button className="nav-button next" onClick={() => setStep(step + 1)}>
                Next
              </button>
            </div>
          </div>
        );

      case 'TEXT_INPUT':
      case 'NUMBER_INPUT':
      case 'DATE_INPUT':
        return (
          <div className="question-container">
            <button className="nav-button back" onClick={() => setStep(step - 1)}>
              Go back
            </button>
            <h2 className="question-title">{question.title}</h2>
            <input
              type={question.type === 'NUMBER_INPUT' ? 'number' : question.type === 'DATE_INPUT' ? 'date' : 'text'}
              className="input-field"
              value={formData.answers[question.id] || ''}
              onChange={(e) => handleAnswer(question.id, e.target.value)}
            />
            <div className="navigation-buttons">
              <button className="nav-button next" onClick={() => setStep(step + 1)}>
                Next
              </button>
            </div>
          </div>
        );

      case 'CHECKBOX_GROUP':
        return (
          <div className="question-container">
            <button className="nav-button back" onClick={() => setStep(step - 1)}>
              Go back
            </button>
            <h2 className="question-title">{question.title}</h2>
            <div className="options-container">
              {question.options?.map((option) => (
                <label key={option.value} className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={formData.answers[question.id]?.includes(option.value)}
                    onChange={(e) => {
                      const currentAnswers = formData.answers[question.id] || [];
                      const newAnswers = e.target.checked
                        ? [...currentAnswers, option.value]
                        : currentAnswers.filter(value => value !== option.value);
                      handleAnswer(question.id, newAnswers);
                    }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <div className="navigation-buttons">
              <button className="nav-button next" onClick={() => setStep(step + 1)}>
                Next
              </button>
            </div>
          </div>
        );

      default:
        // Handle regular single-choice questions
        return (
          <div className="question-container">
            <button className="nav-button back" onClick={() => setStep(step - 1)}>
              Go back
            </button>
            <h2 className="question-title">{question.title}</h2>
            {question.description && <p className="question-description">{question.description}</p>}
            <div className="options-container">
              {question.options?.map((option) => (
                <button
                  key={option.value}
                  className={`option-button ${formData.answers[question.id] === option.value ? 'selected' : ''}`}
                  onClick={() => handleAnswer(question.id, option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="navigation-buttons">
              <button className="nav-button next" onClick={() => setStep(step + 1)}>
                Next
              </button>
            </div>
          </div>
        );
    }
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return renderWelcome();
      case 1:
        return renderPersonalInfo();
      default:
        const question = ALL_QUESTIONS[step];
        return renderQuestion(question);
    }
  };

  return (
    <div className="main-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${calculateProgress()}%` }}
        />
      </div>
      {renderContent()}
    </div>
  );
}

export default App;