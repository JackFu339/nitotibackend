import React from "react";
import { Row, Col } from "antd";
import ContentHolder from "@iso/components/utility/contentHolder";
import IntlMessages from "@iso/components/utility/intlMessages";
import { InputSearch } from "@iso/components/uielements/input";
import { ActionBtn } from "../../library/tablecolumn/table.style";

export const SearchAndNew = ({ searchHandel, getNewData, breadcrumbs }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col flex={4}>
        <ContentHolder>
          <h1>
            <IntlMessages id={breadcrumbs.root} /> /{" "}
            <IntlMessages id={breadcrumbs.path} />
          </h1>
        </ContentHolder>
      </Col>
      <Col flex={4}>
        <ContentHolder>
          <InputSearch placeholder="搜尋" onSearch={searchHandel} />
        </ContentHolder>
      </Col>
      <Col flex={1}>
        <ContentHolder>
          <ActionBtn type="primary" onClick={() => getNewData(null)}>
            新增
          </ActionBtn>
        </ContentHolder>
      </Col>
    </Row>
  );
};
