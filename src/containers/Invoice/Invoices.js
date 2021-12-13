import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import notification from "@iso/components/Notification";
import HelperText from "@iso/components/utility/helper-text";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import Scrollbars from "@iso/components/utility/customScrollBar";
import { Button } from "antd";
import invoiceActions from "@iso/redux/invoice/actions";
import CardWrapper, { Box, StatusTag } from "./Invoice.styles";
import TableWrapper from "../Tables/AntTables/AntTables.styles";
import Modals from "@iso/components/Feedback/Modal";

const { initData, deleteInvoice } = invoiceActions;

export default function Invoices() {
  const [Selected, setSelected] = React.useState([]);
  const { initialInvoices, invoices } = useSelector((state) => state.Invoices);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const confirm = Modals.confirm;
  /**
    console.log(match)結果如下
    path: "/dashboard/invoice"
    url: "/dashboard/invoice/" 
  */
  React.useEffect(() => {
    if (!initialInvoices) {
      dispatch(initData());
    }
  }, [dispatch, initialInvoices]);

  function showConfirm(invoice) {
    confirm({
      title: "刪除",
      content: "確定刪除嗎？",
      onOk() {
        notification("error", "一個資料刪除");
        dispatch(deleteInvoice([invoice.key]));
        setSelected([]);
      },
      onCancel() {},
      okText: "確認",
      cancelText: "取消",
    });
  }
  const columns = [
    {
      title: "",
      dataIndex: "view",
      rowKey: "view",
      width: "10%",
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link to={`${match.path}/${invoice.id}`}>
            {/* {console.log(`${match.path}/${invoice.id}`)} */}
            <Button color="primary" className="invoiceViewBtn">
              <i className="icon ion-edit" />
            </Button>
          </Link>
        </div>
      ),
    },
    {
      title: "編號",
      dataIndex: "number",
      rowKey: "number",
      width: "15%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "賣方",
      dataIndex: "billFrom",
      rowKey: "billFrom",
      width: "25%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "買受人",
      dataIndex: "billTo",
      rowKey: "billTo",
      width: "22%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "總價",
      dataIndex: "totalCost",
      rowKey: "totalCost",
      width: "15%",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "狀態",
      dataIndex: "orderStatus",
      rowKey: "orderStatus",
      width: "13%",
      render: (text, orderStatus) => {
        let className;
        if (text === "已發貨") {
          className = "shipped";
        } else if (text === "已交付") {
          className = "delivered";
        } else if (text === "待處理") {
          className = "pending";
        }

        return <StatusTag className={className}>{text}</StatusTag>;
      },
    },
    {
      title: "",
      dataIndex: "view",
      rowKey: "view",
      width: "10%",
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Button
            className="invoiceDltBtn"
            onClick={() => {
              showConfirm(invoice);
            }}
          >
            <i className="ion-android-delete" />
          </Button>
        </div>
      ),
    },
  ];
  const getnewInvoiceId = () => new Date().getTime(); //發票編號

  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="sidebar.invoice" />
      </PageHeader>
      <Box>
        <div className="isoInvoiceTableBtn">
          <Link to={`${match.path}/${getnewInvoiceId()}`}>
            <Button type="primary" className="mateAddInvoiceBtn">
              新增
            </Button>
          </Link>
        </div>

        <CardWrapper title="Invoices">
          {invoices.length === 0 ? (
            <HelperText text="無資料" />
          ) : (
            <div className="isoInvoiceTable">
              <Scrollbars
                style={{ width: "100%", height: "calc(100vh - 10px)" }}
              >
                <TableWrapper
                  // rowSelection={rowSelection}
                  dataSource={invoices}
                  columns={columns}
                  pagination={{ pageSize: 5 }}
                  className="isoSortingTable"
                />
              </Scrollbars>
            </div>
          )}
        </CardWrapper>
      </Box>
    </LayoutWrapper>
  );
}
