import React from "react";
import "../styles/Form.css"

const Form = () => {

    const handleSubmit =(e)=>{
     e.preventDefault();
     console.log(e.target.children[0].children[0].value);
    }
  return (
     <div className="form-container">

        <h2>Quiz-Form</h2>
      <form className="form-data" onSubmit={handleSubmit}>
        <label>
          QuizName : <input type="text" required />
        </label>
        <label >
           Description : <textarea name="" required id="" cols="20" rows="5"></textarea> 
        </label>
        <label >
          Points/grading system : <input type="text" required />  
        </label>
        <label>
            time limit: <input type="number" required />
        </label>
         <input type="submit" value="create-quiz" />
      </form>
     </div>
    
  );
};

export default Form;
