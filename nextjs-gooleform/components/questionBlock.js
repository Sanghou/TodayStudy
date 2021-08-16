import React from "react";

const QuestionBlock = ({ question }) => {
  // questionType: "radio",
  // title: "제일 잘 알고 있는 기술을 한가지 선택해주세요"
  // subtitle: "온니 원",
  // uuid: "1f12-1ssf2f-d111f-vsdf1"
  // options: [
  //   {text: "react", uuid: "2dsf-kjh12-a1nv-wjsdf"},
  //   {text: "Node JS", uuid: "3dsf-kjh12-a1nv-wjdsdf"},
  //   {text: "GraphQL", uuid: "4dsf-8888-19dn-1jsd3"},
  // ]

  console.log(question);

  return (
    <div>
      <div className="title">{question.title}</div>
      <div className="subtitle"> {question.subtitle}</div>
      <div className="options"> {question.option}</div>
    </div>
  );
};

export default QuestionBlock;
