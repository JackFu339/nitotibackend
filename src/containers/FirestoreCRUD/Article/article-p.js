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
import Child from "./child";
import Child2 from "./child2";
import {
  ActionBtn,
  Fieldset,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  StatusTag,
} from "../../../library/tablecolumn/table.style";
const { useRef } = React;
const {
  loadFromFireStore,
  resetFireStoreDocuments,
  saveIntoFireStore,
  toggleModal,
  update,
} = articleActions;
const channeldata = [
  { key: "0010", name: "momo" },
  { key: "0020", name: "博客來" },
  { key: "0030", name: "生活好物" },
  { key: "0040", name: "pchome" },
];
export default function Articles() {
  const props = {
    name: "file",
    action: "//jsonplaceholder.typicode.com/posts/",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(info.file.name + " 上傳成功");
      } else if (info.file.status === "error") {
        message.error(info.file.name + " 上傳失敗！");
      }
    },
  };

  const handleChange = (value) => {
    console.log(value);
  };

  const [form] = Form.useForm();
  const { articles, article, modalActive, isLoading } = useSelector(
    (state) => state.Articles
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadFromFireStore());
  }, [dispatch]);

  const handleRecord = (actionName, article) => {
    if (article.key && actionName !== "delete") actionName = "update";
    dispatch(saveIntoFireStore(article, actionName));
    console.log(article);

    // dispatch(toggleModal(null));
  };
  const resetRecords = () => {
    dispatch(resetFireStoreDocuments());
  };

  const handleModal = (article = null) => {
    form.resetFields();
    dispatch(toggleModal(article));
  };
  const searchHandel = (value) => {
    console.log(value);
  };
  const onRecordChange = (event, key) => {
    if (key) article[key] = event.target.value;

    dispatch(update(article));
  };

  // function onChangeDate(date, name, article) {
  //   if (date !== null) {
  //     article[name] = date._d.toLocaleDateString();
  //     dispatch(update(article));
  //   }
  //   console.log(date, article);
  // }

  const onSelectChange = (key, value) => {
    if (key) article[key] = value;
    dispatch(update(article));
  };

  const dataSource = [];
  Object.keys(articles).map((article, index) => {
    return dataSource.push({
      ...articles[article],
      key: article,
    });
  });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "200px",
      sorter: (a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split(" ");
          if (resultArray.length > 7) {
            resultArray = resultArray.slice(0, 7);
            result = resultArray.join(" ") + "...";
          }
          return result;
        };

        return trimByWord(row.title);
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "360px",
      sorter: (a, b) => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split(" ");
          if (resultArray.length > 20) {
            resultArray = resultArray.slice(0, 20);
            result = resultArray.join(" ") + "...";
          }
          return result;
        };

        return trimByWord(row.description);
      },
    },
    {
      title: "Excerpt",
      dataIndex: "excerpt",
      key: "excerpt",
      width: "220px",
      sorter: (a, b) => {
        if (a.excerpt < b.excerpt) return -1;
        if (a.excerpt > b.excerpt) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = (sentence) => {
          let result = sentence;
          let resultArray = result.split(" ");
          if (resultArray.length > 8) {
            resultArray = resultArray.slice(0, 8);
            result = resultArray.join(" ") + "...";
          }
          return result;
        };

        return trimByWord(row.excerpt);
      },
    },
    {
      title: "Slugs",
      dataIndex: "slug",
      width: "170px",
      key: "slug",
      sorter: (a, b) => {
        if (a.slug < b.slug) return -1;
        if (a.slug > b.slug) return 1;
        return 0;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      className: "noWrapCell",
      key: "status",
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },

      render: (text, row) => {
        let className;
        if (row.status === ("draft" || "Draft" || "DRAFT")) {
          className = "draft";
        } else if (row.status === ("publish" || "Publish" || "PUBLISH")) {
          className = "publish";
        }
        return <StatusTag className={className}>{row.status}</StatusTag>;
      },
    },
    {
      title: "Actions",
      key: "action",
      width: "60px",
      className: "noWrapCell",
      render: (text, row) => {
        return (
          <ActionWrapper>
            <a onClick={() => handleModal(row)} href="# ">
              <i className="ion-android-create" />
            </a>

            <Popconfirms
              title="Are you sure to delete this article？"
              okText="Yes"
              cancelText="No"
              placement="topRight"
              onConfirm={() => handleRecord("delete", row)}
            >
              <a className="deleteBtn" href="# ">
                <i className="ion-android-delete" />
              </a>
            </Popconfirms>
          </ActionWrapper>
        );
      },
    },
  ];
  const childRef = useRef();
  const childRef2 = useRef();
  return (
    <LayoutContentWrapper>
      <Box>
        <Child ref={childRef} />
        <Child2 ref={childRef} />
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          <Row gutter={[16, 16]}>
            <Col flex={4}>
              <ContentHolder>文章</ContentHolder>
            </Col>
            <Col flex={4}>
              <ContentHolder>
                <InputSearch placeholder="搜尋" onSearch={searchHandel} />
              </ContentHolder>
            </Col>
            <Col flex={1}>
              <ContentHolder>
                {/* <ActionBtn type="primary" onClick={() => handleModal(null)}> */}
                <ActionBtn
                  type="primary"
                  onClick={() =>
                    childRef.current.getAlert(dispatch(toggleModal(true)))
                  }
                >
                  新增
                </ActionBtn>
                <ActionBtn
                  type="primary"
                  onClick={() => childRef.current.getconsole(props)}
                >
                  console
                </ActionBtn>
              </ContentHolder>
            </Col>
          </Row>

          <TableWrapper
            rowKey="key"
            rowSelection={rowSelection}
            columns={columns}
            bordered={true}
            dataSource={dataSource}
            loading={isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,
              total: dataSource.length,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${dataSource.length} Results`;
              },
            }}
          />
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}

// Editor.propTypes = {
//   placeholder: PropTypes.string,
// };
