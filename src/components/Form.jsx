import React from "react";

const Form = () => {
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [gradingSystem, setGradingSystem] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  const handleQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleGradingSystemChange = (event) => {
    setGradingSystem(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quiz Name:
        <input type="text" value={quizName} onChange={handleQuizNameChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Points/Grading System:
        <input
          type="text"
          value={gradingSystem}
          onChange={handleGradingSystemChange}
        />
      </label>
      <br />
      <label>
        Time Limit (in minutes):
        <input
          type="number"
          value={timeLimit}
          onChange={handleTimeLimitChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
