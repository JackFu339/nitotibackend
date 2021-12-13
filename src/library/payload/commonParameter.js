export const payload = {
  operateAction: "Search", //Insert Update Search Delete
  paramData: {
    apiUrl: "/Member/Search",
    tableName: "Member", //資料表名稱
    pageSize: 5, //每頁顯示幾個元素
    pageCount: 1, //預設第一頁
    queryOption: "", //SQL查詢條件參數
    orderBy: "Id", //排序欄位，預設為Id
  },
  data: {
    master: {}, //master主檔資料，單檔資料存放區
    detail: [], //detail明細資料，內部存放者是0~多個物件
  },
  countTotal: 0, //總筆數
};
