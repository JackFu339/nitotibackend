// import { __esModule } from "styled-theme";
import Repository, { baseUrl } from "./Repository";

const commonRepository = () => ({
  async getDataList(payload) {
    console.log(payload);

    // const savePath = "/Page/PageCRUD";  //版位拖拉
    // if (payload.data.Keyword === "Search" || payload.Keyword === "Create") {
    if (payload.Keyword === "Create") {
      const savePath = payload.Getdata.Apiurl; //一般處理
      const reponse = await Repository.post(
        `${baseUrl}${savePath}`,
        payload.Data
      )
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
      return reponse;
    }
  },
});
export default commonRepository();
