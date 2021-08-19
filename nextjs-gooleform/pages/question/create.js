import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  createQuestion,
  deleteQuestion,
  editQuestion,
} from "../../reducers/question";

import style from "../../style/selector.module.css";
import bg from "../../style/background.module.css";

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
    <div classNAme={bg.wrapper}>
      <div className="buttons">
        <button onClick={(e) => addQuestion(e)}> create </button>
      </div>
      {questions.map((question) => {
        return (
          <div key={question.uuid}>
            <div className="form">
              <div className="id"> {question.uuid} </div>
              <textarea
                onChange={() =>
                  onQuestionUpdate(question, "title", e.target.value)
                }
                className={style.question_title}
              >
                {question.title || "default title"}
              </textarea>
              {/* <textarea
                className="subtitle"
                onChange={() =>
                  onQuestionUpdate(question, "title", e.target.value)
                }
                value={question.subtitle}
              /> */}
              <div className="options"> {question.options}</div>
            </div>
            <div className="additionalForm">
              <button onClick={() => removeQuestion(question.uuid)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreatePage;
