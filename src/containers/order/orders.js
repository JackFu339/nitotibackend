import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";
import IntlMessages from "@iso/components/utility/intlMessages";
import Modal from "@iso/components/Feedback/Modal";

import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";

import orderActions from "@iso/redux/orders/orderActions.js";
import { Form } from "antd";

import { payload } from "@iso/lib/payload/single.js";

import {
  CommonCol,
  CommonEdit,
  ConfirmDelete,
} from "../../library/tablecolumn/funccolumn";

import { SearchAndNew } from "../../components/Header/SearchAndNew";
import { TableWrapper } from "../../library/tablecolumn/table.style";
const { loadlist, toggleModal, crud } = orderActions;

export function Orders() {
  const dispatch = useDispatch();
  let [isEdit, SetisEdit] = useState(false);
  let [actionCommand, SetactionCommand] = useState("");

  const [form] = Form.useForm();
  const { modalActive, orderList, isLoading, order, CountTotal } = useSelector(
    (state) => state.order
  );

  React.useEffect(() => {
    dispatch(loadlist(payload));
  }, [dispatch]);

  const confirmData = () => {
    var formData = form.getFieldsValue();
    insertUpdateData(actionCommand, formData);
  };

  const insertUpdateData = (Keyword, table) => {
    processCRUD(Keyword, table);
    processDisplay("Order");
  };

  //處理新增、修改、刪除
  const processCRUD = (Keyword, tableObject) => {
    console.log(Keyword, tableObject);
    payload.Keyword = Keyword;
    payload.Getdata.Apiurl = "/Order/CRUD";
    payload.Data = tableObject;
    dispatch(crud(payload));
  };

  //顯示資料列
  const processDisplay = (tableName) => {
    payload.Keyword = "Search";
    payload.Getdata.Table = tableName;
    payload.Getdata.Apiurl = "/Order/Search";
    console.log(payload, order);
    dispatch(loadlist(payload));
  };
  const searchHandel = (value) => {
    payload.Getdata.QueryOptionKeyWord = value;
    dispatch(loadlist(payload));
  };

  function onChange(pagination, filters, sorter, extra) {
    payload.Keyword = "Search";
    payload.Getdata.Table = "Order";
    payload.Getdata.Apiurl = "/Order/Search";
    payload.Getdata.pagesize = pagination.pageSize;
    payload.Getdata.pagecount = pagination.current;
    console.log(sorter.columnKey === "undefined" ? "Id" : sorter.columnKey);
    // payload.Getdata.Orderby =
    //   sorter.column.key === "undefined" ? "Id" : sorter.column.key;
    dispatch(loadlist(payload));
    // console.log(payload, pagination, sorter.column.key, sorter, extra);
  }

  //定義Column欄位屬性
  const OrderNo = {
    title: "訂單編號",
    dataIndex: "OrderNo",
    key: "OrderNo",
    width: "190px",
  };

  const OrderDate = {
    title: "訂單日期",
    dataIndex: "OrderDate",
    width: "100px",
    key: "OrderDate",
  };
  const MemberName = {
    title: "會員名稱",
    dataIndex: "MemberName",
    width: "100px",
    key: "MemberName",
  };
  const Amount = {
    title: "應收",
    dataIndex: "Amount",
    width: "120px",
    key: "Amount",
  };
  const ARAmount = {
    title: "實收",
    dataIndex: "ARAmount",
    key: "ARAmount",
    width: "360px",
  };

  const BonusRedeem = {
    title: "紅利點數",
    dataIndex: "BonusRedeem",
    key: "BonusRedeem",
    width: "120px",
  };
  const CoupponRedeem = {
    title: "優惠券",
    dataIndex: "CoupponRedeem",
    key: "CoupponRedeem",
    width: "120px",
  };

  const getUpdateData = (member) => {
    SetactionCommand((actionCommand) => (actionCommand = "Update"));
    SetisEdit(true);
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
  const getDeleteData = (member) => {
    processCRUD("Delete", member);
    processDisplay("Member");
  };

  const columns = [
    CommonEdit(getUpdateData), //編輯欄位
    CommonCol(OrderNo),
    CommonCol(OrderDate),
    CommonCol(MemberName),
    CommonCol(Amount),
    CommonCol(ARAmount),
    CommonCol(BonusRedeem),
    CommonCol(CoupponRedeem),
    ConfirmDelete(getDeleteData), //刪除資料
  ];
  return (
    <LayoutContentWrapper style={{ height: "100vh" }}>
      <LayoutContent>
        <h1>
          <IntlMessages id="sidebar.ordermanager" /> /{" "}
          <IntlMessages id="sidebar.ordersearch" />
        </h1>
      </LayoutContent>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {/**搜尋與新增*/}
          <SearchAndNew
            searchHandel={searchHandel}
            // getNewData={getNewData}
            breadcrumbs={{
              root: "sidebar.ordermanager",
              path: "sidebar.ordersearch",
            }}
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
            {/* <MemberModal member={member} form={form} /> */}
          </Modal>

          {/**-----資料列表--------*/}
          <TableWrapper
            rowKey="Id"
            onChange={onChange}
            columns={columns}
            bordered={true}
            dataSource={orderList}
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
}
export default Orders;
