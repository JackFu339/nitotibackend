import actions from "./orderActions";

const initState = {
  isLoading: false,
  errorMessage: false,
  modalActive: false,
  currentPage: 1,
  pageSize: 10,
  CountTotal: 0,
  orderList: [],
  order: {},
};

export default function orderReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LOAD_LIST:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case actions.LOAD_LIST_SUCCESS:
      console.log(payload.data);
      return {
        ...state,
        isLoading: false,
        errorMessage: false,
        modalActive: false,
        CountTotal: payload.data.ResponseData.CountTotal,
        orderList: payload.data.ResponseData.Data,
      };

    case actions.TOGGLE_HANDLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
      };

    case actions.CRUD:
      return {
        ...state,
        order: payload.data,
      };
    default:
      return state;
  }
}
