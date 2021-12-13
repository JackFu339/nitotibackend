import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Layout, Menu, Dropdown, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import modalActions from "@iso/redux/modal/actions";
import scrumBoardActions from "@iso/redux/scrumBoard/actions";
import { variables } from "@iso/assets/styles/variables";
import AvatarIcon from "@iso/assets/images/icon/08-icon.svg";
import { payload } from "@iso/lib/payload/single.js";

import { Scrollbars } from "react-custom-scrollbars";

import {
  ProjectInfoCard,
  Avatar,
  Category,
  Title,
  InfoWrapper,
  DropdownHeader,
  Header,
} from "./BoardLayout.style";

const { Content } = Layout;
const { saveColumnsData } = scrumBoardActions;

const BoardLayout = ({
  children,
  setSearchText,
  boards,
  currentBoard = "",
}) => {
  const { columns } = useSelector((state) => state.scrumBoard);
  const dispatch = useDispatch();

  const getAllColumnData = () => {
    let columnArray = [];
    for (var i in columns) {
      columnArray.push(columns[i]);
    }
    payload.Keyword = "Create";
    payload.Getdata.Apiurl = "/Page/PageCRUD";
    payload.Data = JSON.stringify(columnArray);

    dispatch(saveColumnsData(payload));
    // console.log(JSON.stringify(columnArray));
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <DropdownHeader>頁面</DropdownHeader>
      </Menu.Item>

      {Object.values(boards).map((board) => (
        <Menu.Item key={board.id}>
          <Link to={`/dashboard/scrum-board/project/${board.id}`}>
            <ProjectInfoCard>
              {board.title !== "" && <Avatar src={AvatarIcon} />}
              <InfoWrapper>
                <Title>{board.title}</Title>
                <Category>{board.category}</Category>
              </InfoWrapper>
            </ProjectInfoCard>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Layout
      style={{
        backgroundColor: `${variables.WHITE_COLOR}`,
      }}
    >
      <Header>
        <Dropdown overlay={menu} overlayClassName="project-menu">
          <div>
            <ProjectInfoCard>
              {/* <Avatar src={AvatarIcon} /> */}
              <InfoWrapper>
                <Title>{currentBoard.title}</Title>
                <Category>{currentBoard.category}</Category>
              </InfoWrapper>
              {/* <DownOutlined style={{ marginLeft: 16 }} /> */}
            </ProjectInfoCard>
          </div>
        </Dropdown>

        <Button
          color="primary"
          className="invoiceViewBtn"
          onClick={() => getAllColumnData()}
        >
          存檔
          <i className="icon ion-edit" />
        </Button>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          width: "100%",
        }}
      >
        <Scrollbars
          style={{
            width: "100%",
            height: "calc(100vh - 100px)",
          }}
          autoHide
        >
          {children}
        </Scrollbars>
      </Content>
    </Layout>
  );
};

export default connect(null, { ...modalActions, ...scrumBoardActions })(
  BoardLayout
);
