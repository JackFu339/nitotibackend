import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./memberActions";
// import omit from "lodash/omit";
import commonRepository from "../../../library/Repository/commonRepository";

function* loadFromDB(MyData) {
  try {
    let obj = MyData.payload.data;
    let data = yield call(commonRepository.getDataList, obj);
    console.log(MyData, data);
    yield put(
      actions.loadlistSuccess(yield call(commonRepository.getDataList, obj))
    );
  } catch (error) {
    console.log(error);
    yield put(actions.loadError(error));
  }
}

//傳member進來->刪除一筆->取回前10筆
function* crudToDB(payload) {
  console.log(payload.payload);
  try {
    yield call(commonRepository.getDataList, payload.payload.data);
    yield loadFromDB(payload);
  } catch (error) {
    console.log(error);
    yield put(actions.loadError(error));
  }
}

/**
 function* saveColumnsToDB(payload) {
  console.log(payload.payload);
  try {
    yield call(commonRepository.getDataList, payload.payload);
  } catch (error) {
    console.log(error);
    // yield put(actions.loadError(error));
  }
}
 */

export default function* rootSaga() {
  yield all([takeEvery(actions.LOAD_LIST, loadFromDB)]);
  yield all([takeEvery(actions.CRUD, crudToDB)]);
}
