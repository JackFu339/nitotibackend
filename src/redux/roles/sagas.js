import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
// import omit from "lodash/omit";

function* load() {
  // try {
  //   const collectionRef = db
  //     .collection(COLLECTION_NAME)
  //     .where("deleted_at", "==", null)
  //     .orderBy(ORDER_BY, ORDER);
  //   const snapshots = yield call(rsf.firestore.getCollection, collectionRef);
  //   let data = yield call(convertCollectionsSnapshotToMap, snapshots);
  //   yield put(actions.load(data));
  // } catch (error) {
  //   console.log(error);
  //   yield put(actions.loadError(error));
  // }
}

function* insert({ payload }) {
  // const { data, actionName } = payload;
  // try {
  //   switch (actionName) {
  //     case "delete":
  //       yield call(
  //         rsf.firestore.setDocument,
  //         `${COLLECTION_NAME}/${data.key}`,
  //         {
  //           deleted_at: new Date().getTime(),
  //         }
  //       );
  //       break;
  //     case "update":
  //       yield call(
  //         rsf.firestore.setDocument,
  //         `${COLLECTION_NAME}/${data.key}`,
  //         {
  //           ...omit(data, ["key"]),
  //         }
  //       );
  //       break;
  //     default:
  //       yield call(rsf.firestore.addDocument, COLLECTION_NAME, data);
  //       break;
  //   }
  //   yield put({ type: actions.LOAD });
  // } catch (error) {
  // console.log(error);
  // yield put(actions.saveError(error));
  // }
}

function* update({ payload }) {
  // try {
  //   // yield call(deleteDocuments, COLLECTION_NAME);
  //   // yield call(addCollectionAndDocdatauments, COLLECTION_NAME, fakeDataList);
  //   // yield put({ type: actions.LOAD });
  // } catch (error) {
  //   console.log(error);
  // }
}

function* deleted({ payload }) {
  // try {
  //   // yield call(deleteDocuments, COLLECTION_NAME);
  //   // yield call(addCollectionAndDocuments, COLLECTION_NAME, fakeDataList);
  //   // yield put({ type: actions.LOAD });
  // } catch (error) {
  //   console.log(error);
  // }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD, load),
    takeEvery(actions.INSERT, insert),
    takeEvery(actions.UPDATE, update),
    takeEvery(actions.DELETE, deleted),
  ]);
}
