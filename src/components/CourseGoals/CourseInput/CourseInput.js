import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl=styled.div`
{
  margin: 0.5rem 0;
}

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=>props.valid ? 'red': 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>props.valid ? 'red': '#ccc'};
  background:${props=>props.valid ? '#fad0ec': 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
const [valid,setValid]=useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setValid(false)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl >
        <label className={`form-control ${!valid ? 'invalid':''}`}>Course Goal</label>
        <input style={{borderColor:!valid ? 'red':'#ccc',background:!valid ? 'salmon':'transparent'}} type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
