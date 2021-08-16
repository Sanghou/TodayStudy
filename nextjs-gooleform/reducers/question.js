/*
{
		questionType: "radio", 
		title: "제일 잘 알고 있는 기술을 한가지 선택해주세요" 
		subtitle: "온니 원",
		uuid: "1f12-1ssf2f-d111f-vsdf1"
		options: [
			{text: "react", uuid: "2dsf-kjh12-a1nv-wjsdf"},
			{text: "Node JS", uuid: "3dsf-kjh12-a1nv-wjdsdf"},
			{text: "GraphQL", uuid: "4dsf-8888-19dn-1jsd3"},		
		]
	}
*/

const CREATE = "CREATE";
const DELETE = "DELETE";
const EDIT = "EDIT";

export const createQuestion = (question) => ({
  type: CREATE,
  payload: question,
});

export const deleteQuestion = (uuid) => ({
  type: DELETE,
  payload: uuid,
});

export const editQuestion = (question) => ({
  type: EDIT,
  payload: question,
});

const initialState = {
  questions: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case DELETE:
      const idx = state.questions.findIndex(
        (elem) => elem.uuid === action.payload
      );
      return {
        ...state,
        questions: [
          ...state.questions.slice(0, idx),
          ...state.questions.slice(idx + 1),
        ],
      };
    case EDIT:
      const target = state.questions.findIndex(
        (elem) => elem.uuid === action.payload.uuid
      );
      state.questions[target] = { ...action.payload };
      return {
        ...state,
        questions: [...state.questions],
      };
    default:
      return {
        ...state,
      };
  }
};

export default questionsReducer;
