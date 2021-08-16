import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  createQuestion,
  deleteQuestion,
  editQuestion,
} from "../../reducers/question";

const CreatePage = () => {
  // const [questions, setQuestions] = useState([]);

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  const createDefaultQuestion = () => {
    return {
      uuid: uuid(),
      title: "",
      questionType: "text",
    };
  };

  const addQuestion = () => {
    dispatch(createQuestion(createDefaultQuestion()));
  };

  const removeQuestion = (uuid) => {
    dispatch(deleteQuestion(uuid));
  };

  const onQuestionUpdate = (question, type, data) => {
    const updated = { ...question, [type]: data };
    dispatch(editQuestion(data));
  };

  return (
    <div>
      <div className="buttons">
        <button onClick={(e) => addQuestion(e)}> create </button>
      </div>
      {questions.map((question) => {
        return (
          <div key={question.uuid}>
            <button onClick={() => removeQuestion(question.uuid)}>
              Delete
            </button>
            <div className="id"> {question.uuid} </div>
            <textarea
              onChange={() =>
                onQuestionUpdate(question, "title", e.target.value)
              }
              className="title"
            >
              {question.title || "default title"}
            </textarea>
            <textarea
              className="subtitle"
              onChange={() =>
                onQuestionUpdate(question, "title", e.target.value)
              }
              value={question.subtitle}
            />

            <div className="options"> {question.option}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CreatePage;
