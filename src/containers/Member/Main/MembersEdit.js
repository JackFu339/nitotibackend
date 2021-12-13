import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "antd";
import Modal from "@iso/components/Feedback/Modal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import memberActions from "@iso/redux/members/member/memberActions";
import { payload } from "@iso/lib/payload/single.js";
import { getYearList } from "@iso/lib/Uitilities/Common";
import {
  CommonCol,
  CommonEdit,
  ConfirmDelete,
} from "@iso/lib/tablecolumn/funccolumn";
import { MemberModal } from "./MemberModal";
import { SearchAndNew } from "@iso/components/Header/SearchAndNew";
import { TableWrapper } from "@iso/lib/tablecolumn/table.style";

const { loadlist, toggleModal, crud } = memberActions;
const MembersEdit = () => {
  const dispatch = useDispatch();
  let [isEdit, setIsEdit] = useState(false);
  let [actionCommand, setActionCommand] = useState("");

  const [form] = Form.useForm();
  const { modalActive, memberList, isLoading, member, CountTotal } =
    useSelector((state) => state.member);

  React.useEffect(() => {
    getYearList();
    // payload.Keyword = "Search";
    // payload.CountTotal = 0;
    dispatch(loadlist(payload));
  }, [dispatch]);

  const confirmData = () => {
    var formData = form.getFieldsValue();
    insertUpdateData(actionCommand, formData);
  };

  const searchHandel = (value) => {
    payload.Getdata.QueryOptionKeyWord = value;
    dispatch(loadlist(payload));
  };
  var today = new Date();
  /**新增 */
  const getNewData = () => {
    setActionCommand((actionCommand) => (actionCommand = "Create"));
    setIsEdit(false);
    form.resetFields();
    form.setFieldsValue({
      CreateDate: today.toISOString().substring(0, 19),
      CreateId: "123",
      UpdateDate: null,
      UpdateId: null,
    });
    dispatch(toggleModal(modalActive));
  };

  //保留
  // const rowSelection = {
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     console.log(selectedRowKeys, selectedRows);
  //   },
  // };

  /**取得單筆資料 */
  const getUpdateData = (member) => {
    setActionCommand((actionCommand) => (actionCommand = "Update"));
    setIsEdit(true);

    form.setFieldsValue({
      Id: member.Id,
      MemberName: member.MemberName,
      Mobile: member.Mobile,
      Email: member.Email,
      BOD_Y: member.BOD_Y,
      BOD_M: member.BOD_M,
      BOD_D: member.BOD_D,
      Address: member.Address,
      Area: member.Area,
      City: member.City,
      Zip: member.Zip,
      Gender: member.Gender,
      Memo: member.Memo,
      Password: member.Password,
      CreateDate: member.CreateDate,
      CreateId: member.CreateId,
      UpdateDate: member.UpdateDate,
      UpdateId: 123,
    });
    dispatch(toggleModal(modalActive));
  };

  /**新增、更新一筆資料 */
  const insertUpdateData = (Keyword, table) => {
    processCRUD(Keyword, table);
    processDisplay("Member");
  };

  /**刪除一筆資料 */
  const getDeleteData = (member) => {
    processCRUD("Delete", member);
    processDisplay("Member");
  };

  //處理新增、修改、刪除
  const processCRUD = (Keyword, tableObject) => {
    console.log(Keyword, tableObject);
    payload.Keyword = Keyword;
    payload.Getdata.Apiurl = "/Member/CRUD";
    payload.Data = tableObject;
    dispatch(crud(payload));
  };

  //顯示資料列
  const processDisplay = (tableName) => {
    payload.Keyword = "Search";
    payload.Getdata.Table = tableName;
    payload.Getdata.Apiurl = "/Member/Search";
    console.log(payload, member);
    dispatch(loadlist(payload));
  };

  function onChange(pagination, filters, sorter, extra) {
    payload.Keyword = "Search";
    payload.Getdata.Table = "Member";
    payload.Getdata.Apiurl = "/Member/Search";
    payload.Getdata.pagesize = pagination.pageSize;
    payload.Getdata.pagecount = pagination.current;
    console.log(sorter.columnKey === "undefined" ? "Id" : sorter.columnKey);
    // payload.Getdata.Orderby =
    //   sorter.column.key === "undefined" ? "Id" : sorter.column.key;
    dispatch(loadlist(payload));
    // console.log(payload, pagination, sorter.column.key, sorter, extra);
  }
  //定義Column欄位屬性
  const MemberName = {
    title: "姓名",
    dataIndex: "MemberName",
    key: "MemberName",
    width: "200px",
  };

  const Zip = {
    title: "ZIP",
    dataIndex: "Zip",
    width: "100px",
    key: "Zip",
  };

  const City = {
    title: "縣市",
    dataIndex: "City",
    width: "100px",
    key: "City",
  };

  const Area = {
    title: "鄉鎮區",
    dataIndex: "Area",
    width: "120px",
    key: "Area",
  };

  const Email = {
    title: "電子郵件",
    dataIndex: "Email",
    key: "Email",
    width: "360px",
  };

  const Address = {
    title: "地址",
    dataIndex: "Address",
    key: "Address",
    width: "360px",
  };

  //將欄位屬性加入colnums陣列中
  const columns = [
    CommonEdit(getUpdateData), //編輯欄位
    CommonCol(MemberName, 8), //如果超過8個字元就斷字
    CommonCol(Email, 40),
    CommonCol(Zip),
    CommonCol(City),
    CommonCol(Area),
    CommonCol(Address, 30),
    ConfirmDelete(getDeleteData), //刪除資料
  ];

  return (
    <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {/**搜尋與新增*/}
          <SearchAndNew
            searchHandel={searchHandel}
            getNewData={getNewData}
            breadcrumbs={{ root: "sidebar.member", path: "sidebar.memberedit" }}
          />

          {/**開啟資料視窗*/}
          <Modal
            visible={modalActive}
            onClose={() => dispatch(toggleModal(null))}
            title={isEdit ? "修改" : "新增"}
            okText={"存檔"}
            onOk={() => confirmData(form)}
            onCancel={() => dispatch(toggleModal(null))}
            width="70%"
          >
            <MemberModal member={member} form={form} />
          </Modal>

          {/**-----資料列表--------*/}
          <TableWrapper
            rowKey="Id"
            onChange={onChange}
            columns={columns}
            bordered={true}
            dataSource={memberList}
            loading={isLoading}
            className="isoSimpleTable"
            pagination={{
              hideOnSinglePage: false,
              total: CountTotal,
              onChange: (pageSize, current) => {
                payload.Getdata.pagesize = current;
                payload.Getdata.pagecount = pageSize;
                console.log(pageSize, current, payload);
                dispatch(loadlist(payload));
              },
              showTotal: (total, range) => {
                return `${range[0]}-${range[1]} 總筆數 ${CountTotal}  `;
              },
            }}
          />
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
};
export default MembersEdit;
