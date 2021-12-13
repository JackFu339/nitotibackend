import actions from "./actions";

const initState = {
  isLoading: false,
  errorMessage: false,
  modalActive: false,
  roles: {
    id: 0,
    title: "supervisor",
    excerpt: "",
    active: true,
    description: "",
    created_at: new Date().getTime(),
  },
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LOAD:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case actions.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        roles: payload.data,
        errorMessage: false,
      };
    case actions.LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: "哦！載入出現問題！",
      };

    case actions.UPDATE:
      return {
        ...state,
        roles: payload.data,
      };
    case actions.UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: "哦！更新資料出現問題！",
      };
    case actions.INSERT:
      return {
        ...state,
        roles: payload.data,
      };
    case actions.INSERT_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: "哦！新增資料出現問題！",
      };
    case actions.TOGGLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
        roles: payload.data == null ? initState.roles : payload.data,
      };
    default:
      return state;
  }
}
