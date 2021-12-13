import React from "react";

import { Form, Row, Col, Input } from "antd";

export const CreateDateUpdateDateComp = ({ tableName }) => {
  return (
    <Row gutter={(16, 16)} style={{ height: "0px" }}>
      <Col className="gutter-row">
        <Form.Item name="Id" style={{ height: "0px" }}>
          <Input
            label="Id"
            name="Id"
            placeholder="系統自動填入"
            value={tableName.MemberName}
            disabled={true}
            type="hidden"
          />
        </Form.Item>
        {/* <Label>建立者Id</Label> */}
        <Form.Item name="CreateId" rules={[{ required: true }]}>
          <Input
            label="CreateId"
            placeholder=""
            value={tableName.CreateId}
            style={{ width: "60px" }}
            disabled={true}
            type="hidden"
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        {/* <Label>建立日期</Label> */}
        <Form.Item name="CreateDate" rules={[{ required: true }]}>
          <Input
            label="CreateDate"
            placeholder=""
            value={tableName.CreateDate}
            disabled={true}
            style={{ width: "180px" }}
            type="hidden"
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        {/* <Label>更新者Id</Label> */}
        <Form.Item name="UpdateId" rules={[{ required: true }]}>
          <Input
            label="UpdateId"
            placeholder=""
            value={tableName.UpdateId}
            disabled={true}
            style={{ width: "60px" }}
            type="hidden"
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        {/* <Label>更新日期</Label> */}
        <Form.Item name="UpdateDate" rules={[{ required: true }]}>
          <Input
            label="UpdateDate"
            placeholder=""
            value={tableName.UpdateDate}
            disabled={true}
            style={{ width: "180px" }}
            type="hidden"
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
