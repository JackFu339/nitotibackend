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

/**外部const 變數區 */
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
/**程式開始 */
const Articles = () => {
  /**內部const 變數區 */
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { articles, article, modalActive, isLoading } = useSelector(
    (state) => state.Articles
  );

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

  React.useEffect(() => {
    dispatch(loadFromFireStore());
  }, [dispatch]);

  /**function 區 */

  const handleChange = (value) => {
    console.log(value);
  };

  const handleRecord = (actionName, article) => {
    if (article.key && actionName !== "delete") actionName = "update";
    dispatch(saveIntoFireStore(article, actionName));
    console.log(article);

    dispatch(toggleModal(null));
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

  const onSelectChange = (key, value) => {
    if (key) article[key] = value;
    dispatch(update(article));
  };
  /**程式要用資料區 */
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
  /**欄位定位區 */
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

  return (
    <LayoutContentWrapper>
      <Box>
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
                <ActionBtn type="primary" onClick={() => handleModal(null)}>
                  新增
                </ActionBtn>
              </ContentHolder>
            </Col>
          </Row>
          {/**彈跳輸入框 */}
          <Modal
            visible={modalActive}
            onClose={() => dispatch(toggleModal(null))}
            title={article.key ? "更新" : "新增"}
            okText={"存檔"}
            cancelText={"取消"}
            onOk={() => handleRecord("insert", article)}
            onCancel={() => dispatch(toggleModal(null))}
            width="70%"
          >
            {/**輸入區 */}
            <Form form={form} name="control-hooks">
              {/**二個欄位為一組 */}
              <Row gutter={[16, 16]}>
                <Col flex={3}>
                  {/**抬頭 */}
                  <Fieldset>
                    <Label>抬頭</Label>
                    <Form.Item name="Title" rules={[{ required: true }]}>
                      <Input
                        label="抬頭"
                        placeholder="Enter Title"
                        value={article.title}
                        onChange={(e) => onRecordChange(e, "title")}
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
                <Col flex={3}>
                  <Fieldset>
                    {/**文章對象 */}
                    <Label>文章對象</Label>
                    <Form.Item name="slug" rules={[{ required: true }]}>
                      <Input
                        label="文章對象"
                        placeholder="Enter Slugs"
                        value={article.slug}
                        onChange={(e) => onRecordChange(e, "slug")}
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col flex={3}>
                  <Fieldset>
                    <Label>摘要</Label>
                    <Form.Item name="excerpt" rules={[{ required: true }]}>
                      <Textarea
                        label="摘要"
                        rows={5}
                        placeholder="Enter excerpt"
                        value={article.excerpt}
                        onChange={(e) => onRecordChange(e, "excerpt")}
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
                <Col flex={3}>
                  <Fieldset>
                    <Label>描述</Label>
                    <Form.Item name="description" rules={[{ required: true }]}>
                      <Textarea
                        label="描述"
                        placeholder="Enter Description"
                        rows={5}
                        value={article.description}
                        onChange={(e) => onRecordChange(e, "description")}
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col flex={3}>
                  <Fieldset>
                    <Label>開始日期</Label>
                    <Form.Item
                      name="EstimatedDate1"
                      rules={[{ required: true }]}
                    >
                      <DatePicker
                        placeholder="預計日期"
                        onChange={(e) => {
                          if (e !== null) {
                            article[
                              "EstimatedDate1"
                            ] = e._d.toLocaleDateString();
                            dispatch(update(article));
                          }
                          console.log(article);
                        }}
                        picker="EstimatedDate1"
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
                <Col flex={3}>
                  <Fieldset>
                    <Label>結束日期</Label>
                    <Form.Item
                      name="EstimatedDate2"
                      rules={[{ required: true }]}
                    >
                      <DatePicker
                        placeholder="預計日期"
                        onChange={(e) => {
                          if (e !== null) {
                            article[
                              "EstimatedDate2"
                            ] = e._d.toLocaleDateString();
                            dispatch(update(article));
                          }
                          console.log(article);
                        }}
                        picker="EstimatedDate2"
                      />
                    </Form.Item>
                  </Fieldset>
                </Col>
              </Row>
              {/**下拉式選單 */}
              <Row gutter={[16, 16]}>
                <Col flex={3}>
                  <Label>請選擇</Label>
                  <Fieldset>
                    <Select
                      defaultValue="momo"
                      onChange={handleChange}
                      style={{ width: "120px" }}
                    >
                      {channeldata.map((item, key) => {
                        return (
                          <Option value={item.key} key={key}>
                            {item.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </Fieldset>
                </Col>
              </Row>
              {/**HTML編輯器 */}
              <Row gutter={[16, 16]}>
                <Col flex={16}>
                  <Label>商品規格</Label>
                  <Fieldset>
                    <EditorFunc article={article} />
                  </Fieldset>
                </Col>
              </Row>
              {/**上傳文件 */}
              <Fieldset>
                <Upload {...props}>
                  <Button type="ghost">
                    <Icon type="upload" /> 點擊上傳
                  </Button>
                </Upload>
              </Fieldset>
              {/**Excel匯入 */}
              <Fieldset>
                <ExcelReader Category="0001" />
              </Fieldset>
            </Form>
          </Modal>
          {/**表格區 */}
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
                return `Showing ${range[0]}-${range[1]} of ${dataSource.length} Results `;
              },
            }}
          />
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
};
/**定義輸出可用 */
export default Articles;
