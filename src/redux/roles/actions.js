const DOCUMENT = "ROLES_";

const actions = {
  /**向資料庫要資料 */
  LOAD: DOCUMENT + "LOAD",
  /**成功取得資料 */
  LOAD_SUCCESS: DOCUMENT + "LOAD_SUCCESS",
  /**取得資料發生錯誤 */
  LOAD_ERROR: DOCUMENT + "LOAD_ERROR",
  /**新增資料 */
  INSERT: DOCUMENT + "INSERT",
  /**新增資料錯誤 */
  INSERT_ERROR: DOCUMENT + "INSERT_ERROR",
  /**刪除資料 */
  DELETE: DOCUMENT + "DELETE",
  /**刪除資料發生錯誤 */
  DELETE_ERROR: DOCUMENT + "DELETE_ERROR",
  /**更新資料 */
  UPDATE: DOCUMENT + "UPDATE",
  /**更新資料發生錯誤 */
  UPDATE_ERROR: DOCUMENT + "UPDATE_ERROR",
  /**Modal開關 */
  TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

  load: () => {
    return { type: actions.LOAD };
  },

  loadSuccess: (data) => ({
    type: actions.LOAD_SUCCESS,
    payload: { data },
  }),

  loadError: (error) => ({
    type: actions.LOAD_ERROR,
    payload: { error },
  }),

  save: (data, actionName = "insert") => ({
    type: actions.INSERT,
    payload: { data, actionName },
  }),

  saveError: (error) => ({
    type: actions.INSERT_ERROR,
    payload: { error },
  }),

  update: (data) => ({
    type: actions.UPDATE,
    payload: { data },
  }),

  updateError: (error) => ({
    type: actions.UPDATE_ERROR,
    payload: { error },
  }),

  delete: (data) => ({
    type: actions.DELETE,
    payload: { data },
  }),

  deleteError: (error) => ({
    type: actions.DELETE_ERROR,
    payload: { error },
  }),

  toggleModal: (data = null) => ({
    type: actions.TOGGLE_MODAL,
    payload: { data },
  }),
};
export default actions;
