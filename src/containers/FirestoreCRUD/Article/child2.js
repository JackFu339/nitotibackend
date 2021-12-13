import React from "react";
import { useDispatch, useSelector } from "react-redux";
import articleActions from "@iso/redux/articles/actions";
import Input, { Textarea, InputSearch } from "@iso/components/uielements/input";

import Select, {
  SelectOption as Option,
} from "@iso/components/uielements/select";
import Modal from "@iso/components/Feedback/Modal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import Popconfirms from "@iso/components/Feedback/Popconfirm";
import { Row, Col, Form, Upload, message, Button, Icon } from "antd";
import DatePicker from "@iso/components/uielements/datePicker";

import EditorFunc from "@iso/components/uielements/editorfunc";
import ExcelReader from "../../../library/excel/ExcelReader";
const {
  loadFromFireStore,
  resetFireStoreDocuments,
  saveIntoFireStore,
  toggleModal,
  update,
} = articleActions;
const { forwardRef, useRef, useImperativeHandle } = React;
// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const Child2 = forwardRef((props, ref) => {
  const { articles, article, modalActive, isLoading } = useSelector(
    (state) => state.Articles
  );
  const handleChange = (value) => {
    console.log(value);
  };

  const dataSource = [];
  Object.keys(articles).map((article, index) => {
    return dataSource.push({
      ...articles[article],
      key: article,
    });
  });

  const dispatch = useDispatch();
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    getAlert(look) {},
    getconsole() {
      console.log(ref);
    },
  }));
  return (
    <>
      <Modal
        visible={modalActive}
        onClose={() => dispatch(toggleModal(null))}
        title={article.key ? "更新" : "新增"}
        okText={"存檔"}
        cancelText={"取消"}
        onOk={() => dispatch(toggleModal(null))}
        onCancel={() => dispatch(toggleModal(null))}
        width="70%"
      >
        這是child2
      </Modal>
    </>
  );
});
export default Child2;
