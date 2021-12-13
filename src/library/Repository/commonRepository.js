// import { __esModule } from "styled-theme";
import Repository, { baseUrl } from "./Repository";

const commonRepository = () => ({
  async getDataList(payload) {
    console.log(payload);

    const savePath = payload.Getdata.Apiurl; //一般處理
    // const savePath = "/Page/PageCRUD";  //版位拖拉

    const reponse = await Repository.post(`${baseUrl}${savePath}`, payload)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
  },
});
export default commonRepository();
