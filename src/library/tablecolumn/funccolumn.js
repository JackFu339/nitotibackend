import React from "react";
import { ActionWrapper } from "./table.style";
import Popconfirms from "@iso/components/Feedback/Popconfirm";
import { Button } from "antd";
import Modals from "@iso/components/Feedback/Modal";
const confirm = Modals.confirm;

export const CommonCol = (Col, FieldLen) => {
  return {
    title: Col.title,
    dataIndex: Col.dataIndex,
    width: Col.width,
    key: Col.key,

    sorter: (a, b) => {
      if (a.Zip < b.Zip) return -1;
      if (a.Zip > b.Zip) return 1;
      return 0;
    },

    render: (text, row) => {
      if (FieldLen > 0) {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split("");

          if (resultArray.length > FieldLen) {
            resultArray = resultArray.slice(0, FieldLen);
            result = resultArray.join("") + "...";
          }
          return result;
        };

        return trimByWord(text);
      } else {
        return text;
      }
    },
  };
};

export const CommonDelete = (props) => {
  return {
    title: "",
    key: "action",
    width: "60px",
    className: "noWrapCell",
    render: (text, row) => {
      // console.log(props);
      return (
        <ActionWrapper>
          <Popconfirms
            title="確定刪除嗎？"
            okText="Yes"
            cancelText="No"
            placement="topRight"
            onConfirm={() => props(row)}
          >
            <a className="deleteBtn" href="# ">
              <i className="ion-android-delete" />
            </a>
          </Popconfirms>
        </ActionWrapper>
      );
    },
  };
};

export const ConfirmDelete = (props) => {
  // console.log(props);
  return {
    title: "",
    key: "action",
    width: "60px",
    className: "noWrapCell",
    render: (text, row) => {
      return (
        <ActionWrapper>
          <div className="isoInvoiceBtnView">
            <Button
              className="invoiceDltBtn"
              onClick={() => showConfirm(props, row)}
            >
              <i className="ion-android-delete" />
            </Button>
          </div>
        </ActionWrapper>
      );
    },
  };
};

function showConfirm(props, row) {
  confirm({
    title: "刪除",
    content: "確定刪除嗎？",
    onOk() {
      console.log(row);
      props(row);
    },
    onCancel() {},
    okText: "確認",
    cancelText: "取消",
  });
}

export const CommonEdit = (props) => {
  return {
    title: "選取",
    dataIndex: "view",
    rowKey: "view",
    width: "80px",
    render: (text, row) => (
      <div className="isoInvoiceBtnView">
        <Button
          color="primary"
          className="invoiceViewBtn"
          onClick={() => props(row)}
        >
          <i className="icon ion-edit" />
        </Button>
      </div>
    ),
  };
};
