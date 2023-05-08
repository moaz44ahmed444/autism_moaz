
import axios from "axios";
import React , {useState , useEffect} from "react";
import Footer from "../Footer/index.js";
import styled from "styled-components";
import { Body , Textbox , Form , Banner , InputRadio , LabelRadio  , Span  , Button , BtnBlock , Container , Question , AnswerOption , RadioInput  } from'./Style.js';


const Questionnaire = () => {

  const [ questions , setQuestions ] = useState([])
  const [ answers , setAnswers] = useState([]);

  const handleAnswerChange = (questionId, optionId) => {
    const newAnswers = [...answers];
    const index = newAnswers.findIndex((a) => a.questionId === questionId);
    if (index === -1) {
      newAnswers.push({ questionId, optionId });
    } else {
      newAnswers[index].optionId = optionId;
    }
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log('Answers:', answers);
    // Send answers to server, etc.
  };

  useEffect ( ()=> {
    axios.get('js/data.json').then(res =>{setQuestions(res.data.questions)})
  } , [] )

  const autismQuestions = questions.map( (questionItem) => {
    return(
      <fieldset>
        <legend>Questions</legend>
     
        <Container>
          <div key={questionItem.id}>
            <Question>{questionItem.question}</Question>
            {questionItem.options.map((o) => (
              <AnswerOption key={o.id}>
                <RadioInput
                  type="radio"
                  name={`question-${questionItem.id}`}
                  value={o.id}
                  checked={
                    answers.find((a) => a.questionId === questionItem.id)?.optionId === o.id
                  }
                  onChange={() => handleAnswerChange(questionItem.id, o.id)}
                />
                <Span>{o.text}</Span>
                
              </AnswerOption>
            ))}
          </div>
      </Container>
          
        </fieldset>
    )
  } )

  return (
  <React.Fragment>
    <Body>
    <Textbox>
      <Form action="/">
        <Banner></Banner>
        <br/>
        {autismQuestions}
        <BtnBlock>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </BtnBlock>
      </Form>
    </Textbox>
    </Body>
    <Footer/>
  </React.Fragment>
  );
}

export default Questionnaire;


/**
 *  const autismQuestions = questions.map( (questionItem) => {
    return(
      <fieldset>
          <legend>Questions</legend>
     
          <div className="question"  key={questionItem.id}>
            <Question>{questionItem.question}</Question>
            {questionItem.options.map((o) => (
              <div className="question-answer" key={o.id}>
                <div>
                  <InputRadio type="radio" name="physician" id={o.id} value="none"
                    checked={
                      answers.find((a) => a.questionId === questionItem.id)?.optionId === o.id
                    }
                    onChange={() => handleAnswerChange(questionItem.id, o.id)}
                  />
                  <LabelRadio htmlFor={o.id} ><Span>{o.text}</Span></LabelRadio>
                </div>
              </div>
            ))}
          </div>
          
        </fieldset>
    )
  } )
 */