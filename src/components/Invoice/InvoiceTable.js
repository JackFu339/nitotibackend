import React from "react";
import Input from "../uielements/input";
import Button from "../uielements/button";
import { stringToPosetiveInt } from "@iso/lib/helpers/utility";
import Table from "./TableStyle";

const viewColumns = [
  {
    title: "#",
    dataIndex: "key",
    width: "10%",
    rowKey: "key",
  },
  {
    title: "商品名稱",
    dataIndex: "itemName",
    width: "40%",
    rowKey: "itemName",
  },
  {
    title: "單價",
    dataIndex: "costs",
    width: "15%",
    rowKey: "costs",
  },
  {
    title: "數量",
    dataIndex: "qty",
    width: "15%",
    rowKey: "qty",
  },
  {
    title: "小計",
    dataIndex: "price",
    width: "20%",
    rowKey: "price",
  },
];

const ViewTable = ({ invoiceList }) => (
  <Table columns={viewColumns} dataSource={invoiceList} pagination={false} />
);

const EditTable = ({ editableInvoice, editInvoice, updateValues }) => {
  const { invoiceList } = editableInvoice;
  const editColumns = [
    {
      title: "#",
      dataIndex: "key",
      rowKey: "key",
      width: "10%",
      render: (text, singleInvoice) => <span>{singleInvoice.key}</span>,
    },
    {
      title: "商品名稱",
      dataIndex: "itemName",
      rowKey: "itemName",
      width: "40%",
      render: (text, singleInvoice) => (
        <Input
          placeholder="商品名稱"
          value={singleInvoice.itemName}
          onChange={(event) => {
            editableInvoice.invoiceList[singleInvoice.key - 1].itemName =
              event.target.value;
            editInvoice(editableInvoice);
          }}
        />
      ),
    },
    {
      title: "單價成本",
      dataIndex: "costs",
      rowKey: "costs",
      width: "20%",
      render: (text, singleInvoice) => (
        <Input
          placeholder="單價"
          value={singleInvoice.costs}
          onChange={(event) => {
            editableInvoice.invoiceList[
              singleInvoice.key - 1
            ].costs = stringToPosetiveInt(
              event.target.value,
              singleInvoice.costs
            );
            editInvoice(updateValues(editableInvoice));
          }}
        />
      ),
    },
    {
      title: "數量",
      dataIndex: "qty",
      rowKey: "qty",
      width: "10%",
      render: (text, singleInvoice) => (
        <Input
          placeholder="數量"
          value={singleInvoice.qty}
          onChange={(event) => {
            editableInvoice.invoiceList[
              singleInvoice.key - 1
            ].qty = stringToPosetiveInt(event.target.value, singleInvoice.qty);
            editInvoice(updateValues(editableInvoice));
          }}
        />
      ),
    },
    {
      title: "小計",
      dataIndex: "price",
      rowKey: "price",
      width: "10%",
    },
    {
      title: "",
      dataIndex: "delete",
      rowKey: "delete",
      width: "10%",
      render: (text, singleInvoice) =>
        invoiceList.length === 1 ? (
          ""
        ) : (
          <Button
            onClick={() => {
              const newInvoiceList = [];
              invoiceList.forEach((invoice, i) => {
                if (i !== singleInvoice.key - 1) {
                  newInvoiceList.push(invoice);
                }
              });
              editableInvoice.invoiceList = newInvoiceList;
              editInvoice(updateValues(editableInvoice));
            }}
          >
            刪除
          </Button>
        ),
    },
  ];
  return (
    <Table columns={editColumns} dataSource={invoiceList} pagination={false} />
  );
};
export { ViewTable, EditTable };
